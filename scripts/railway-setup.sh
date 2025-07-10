#!/bin/bash

# 🚂 ZowT - Railway.app Setup Script
# Prepara o projeto para deploy gratuito no Railway via GitHub

echo "🚂 Preparando ZowT para Railway.app..."
echo "===================================="

# Criar pasta específica para Railway
mkdir -p railway-deploy
cd railway-deploy

echo "📁 Copiando arquivos do projeto..."

# Copiar estrutura do projeto
cp -r ../../client ./
cp -r ../../server ./  
cp -r ../../shared ./
cp ../../package.json ./
cp ../../package-lock.json ./
cp ../../tsconfig.json ./
cp ../../vite.config.ts ./
cp ../../tailwind.config.ts ./
cp ../../postcss.config.js ./
cp ../../components.json ./
cp ../../drizzle.config.ts ./

echo "🚂 Criando configurações específicas do Railway..."

# Railway configuration
cat > railway.json << 'EOF'
{
  "build": {
    "builder": "nixpacks",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "numReplicas": 1,
    "restartPolicyType": "ON_FAILURE",
    "healthcheckPath": "/",
    "healthcheckTimeout": 300
  }
}
EOF

# Nixpacks configuration (Railway's build system)
cat > nixpacks.toml << 'EOF'
[phases.install]
dependsOn = ["setup"]
cmds = ["npm ci"]

[phases.build]
dependsOn = ["install"]
cmds = ["npm run build"]

[start]
cmd = "npm start"

[variables]
NODE_ENV = "production"
EOF

# Package.json otimizado para Railway
cat > package.json << 'EOF'
{
  "name": "zowt-digital-forensics",
  "version": "2.1.0",
  "description": "ZowT Digital Forensics - Professional Cybersecurity Website",
  "main": "dist/index.js",
  "type": "module",
  "engines": {
    "node": "18.x",
    "npm": "9.x"
  },
  "scripts": {
    "start": "node dist/index.js",
    "build": "npm run build:server && npm run build:client",
    "build:client": "vite build",
    "build:server": "tsc --project tsconfig.json",
    "dev": "tsx server/index.ts",
    "railway:deploy": "npm run build && npm start",
    "db:push": "drizzle-kit push"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@neondatabase/serverless": "^0.10.6",
    "@radix-ui/react-accordion": "^1.2.1",
    "@radix-ui/react-alert-dialog": "^1.1.2",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.1",
    "@radix-ui/react-checkbox": "^1.1.2",
    "@radix-ui/react-collapsible": "^1.1.1",
    "@radix-ui/react-context-menu": "^2.2.2",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.2",
    "@radix-ui/react-hover-card": "^1.1.2",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.2",
    "@radix-ui/react-navigation-menu": "^1.2.1",
    "@radix-ui/react-popover": "^1.1.2",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.1",
    "@radix-ui/react-scroll-area": "^1.2.0",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.1",
    "@radix-ui/react-tabs": "^1.1.1",
    "@radix-ui/react-toast": "^1.2.2",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.3",
    "@tanstack/react-query": "^5.59.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.4",
    "date-fns": "^4.1.0",
    "drizzle-orm": "^0.36.4",
    "drizzle-zod": "^0.5.1",
    "embla-carousel-react": "^8.5.1",
    "express": "^4.21.1",
    "framer-motion": "^12.0.0",
    "input-otp": "^1.4.1",
    "lucide-react": "^0.468.0",
    "next-themes": "^0.4.4",
    "react": "^18.3.1",
    "react-day-picker": "^9.4.2",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.0",
    "react-icons": "^5.4.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.13.3",
    "tailwind-merge": "^2.5.4",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "ws": "^8.18.0",
    "zod": "^3.23.8",
    "zod-validation-error": "^3.4.0"
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "@types/node": "^22.10.1",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@types/ws": "^8.5.13",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "drizzle-kit": "^0.30.1",
    "esbuild": "^0.24.0",
    "postcss": "^8.5.11",
    "tailwindcss": "^3.4.15",
    "tsx": "^4.19.2",
    "typescript": "^5.6.3",
    "vite": "^5.4.11"
  }
}
EOF

# Dockerfile para Railway (optional)
cat > Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/ || exit 1

# Start application
CMD ["npm", "start"]
EOF

# .gitignore para GitHub
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production build
dist/
build/

# Environment variables
.env
.env.local
.env.production.local
.env.development.local

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

# Storybook build outputs
.out
.storybook-out

# Temporary folders
tmp/
temp/

# Editor directories and files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
EOF

# Environment template para Railway
cat > .env.example << 'EOF'
# ZowT - Railway Configuration
NODE_ENV=production

# Database (Railway auto-generates PostgreSQL)
DATABASE_URL=postgresql://username:password@host:port/database

# Application
PORT=5000

# Security
RATE_LIMIT=100
LOG_LEVEL=info

# Optional: Monitoring
# SENTRY_DSN=your_sentry_url
EOF

# GitHub Actions para CI/CD (opcional)
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy ZowT to Railway

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18.x]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Test security features
      run: |
        echo "Testing security layers..."
        # Add your security tests here
    
    # Railway will auto-deploy when this passes
EOF

# README específico para Railway
cat > README-RAILWAY.md << 'EOF'
# 🚂 ZowT no Railway.app - Deploy Gratuito

## 🎯 Configuração Railway

Esta pasta contém tudo otimizado para Railway.app:

```
railway-deploy/
├── client/              # Frontend React
├── server/              # Backend Express + Segurança
├── shared/              # Código compartilhado
├── railway.json         # Configuração Railway
├── nixpacks.toml        # Build system
├── Dockerfile           # Container (opcional)
├── .github/workflows/   # CI/CD automático
└── README-RAILWAY.md    # Este arquivo
```

## 🚀 Deploy em 5 Minutos

### 1. Upload no GitHub
```bash
# Criar repositório no GitHub
git init
git add .
git commit -m "ZowT Digital Forensics - Ready for Railway"
git remote add origin https://github.com/seu-usuario/zowt-website.git
git push -u origin main
```

### 2. Conectar Railway
1. Acesse: https://railway.app
2. Login com GitHub
3. "New Project" > "Deploy from GitHub repo"
4. Selecione seu repositório ZowT
5. Deploy automático inicia!

### 3. Configurar Banco (Automático)
- Railway detecta PostgreSQL automaticamente
- DATABASE_URL é gerada automaticamente
- Schema é criado no primeiro deploy

### 4. Configurar Domínio
- Railway gera: `https://zowt-production.up.railway.app`
- Domínio custom: Configure DNS se tiver

## 💰 Custos

### Railway Hobby Plan (Gratuito)
- **$5 USD crédito/mês** (suficiente para ZowT)
- **PostgreSQL incluído**
- **SSL automático**
- **Deploy automático**
- **Logs em tempo real**

### Consumo Estimado ZowT
- **CPU:** ~0.1 vCPU
- **RAM:** ~256MB
- **Banco:** ~100MB
- **Custo:** ~$2-3/mês (dentro do crédito gratuito)

## 🔧 Variáveis de Ambiente

Railway auto-configura:
```env
NODE_ENV=production
DATABASE_URL=postgresql://auto-generated-by-railway
PORT=auto-assigned-by-railway
RAILWAY_STATIC_URL=your-domain.up.railway.app
```

Adicionais (se necessário):
```env
RATE_LIMIT=100
LOG_LEVEL=info
```

## 📊 Monitoramento

### Railway Dashboard
- **Metrics:** CPU, RAM, Network
- **Logs:** Em tempo real
- **Deployments:** Histórico completo
- **Database:** Queries e performance

### Logs Úteis
```bash
# Ver logs do servidor
railway logs

# Conectar ao banco
railway connect postgres
```

## 🔒 Segurança Ativa

### Funcionalidades Ativas no Railway
- ✅ **HTTPS automático** com SSL
- ✅ **Honeypots** capturando invasores
- ✅ **Rate limiting** 100 req/min
- ✅ **Pattern detection** SQL injection, XSS
- ✅ **Security headers** HSTS, CSP, etc.
- ✅ **Logging** todas atividades suspeitas

### Headers Especiais
```
X-Powered-By: ZowT-Digital-Forensics-v2.1.0
X-Security-Team: ZowT-Cyber-Defense-Unit
X-Easter-Egg: Try the Konami Code in console!
```

## 🌐 URLs e Endpoints

### Site Principal
```
https://zowt-production.up.railway.app
https://zowt-production.up.railway.app/articles
https://zowt-production.up.railway.app/artigos
```

### API Endpoints
```
POST /api/contact           # Formulário de contato
GET  /api/security/stats    # Easter egg para pesquisadores
```

### Easter Eggs
```javascript
// No console do navegador
window.zowt.showEasterEgg()

// Código Konami: ↑↑↓↓←→←→BA
```

## 🚨 Troubleshooting

### Build Falha
```bash
# Verificar logs de build
railway logs --build

# Forçar novo deploy
git commit --allow-empty -m "Force redeploy"
git push
```

### Database Issues
```bash
# Verificar conexão
railway run npx drizzle-kit push

# Reset database (cuidado!)
railway postgres:reset
```

### Site Não Carrega
```bash
# Verificar status
railway status

# Ver logs em tempo real
railway logs -f
```

## 📈 Otimizações

### Performance
- **Nixpacks** build otimizado
- **Node.js 18** com performance moderna
- **Static files** servidos eficientemente
- **Database pooling** configurado

### Escalabilidade
```bash
# Upgrade para plano pago se necessário
# $5/mês = ~150GB transfer + mais CPU/RAM
railway upgrade
```

## ✅ Checklist Deploy

- [ ] Código no GitHub
- [ ] Railway conectado ao repo
- [ ] PostgreSQL database criado
- [ ] Variáveis de ambiente configuradas
- [ ] Build completado com sucesso
- [ ] Site acessível via HTTPS
- [ ] Formulário de contato funcionando
- [ ] Sistema de segurança ativo
- [ ] Logs sendo gerados

## 🎉 Resultado Final

Após o deploy você terá:

🌐 **Site profissional:** https://zowt-production.up.railway.app  
🔒 **Segurança avançada:** Honeypots e monitoramento ativo  
📱 **Mobile responsive:** Funciona em todos dispositivos  
⚡ **Performance:** Carregamento rápido global  
🛡️ **Proteção:** Sistema anti-hacker em operação  
📊 **Analytics:** Logs detalhados de segurança  
🆓 **Custo:** $0 (dentro do crédito gratuito)  

---

*"Railway.app é perfeito para desenvolvedores que querem deploy profissional sem complicação. Em 5 minutos seu site ZowT estará online!"*
EOF

echo ""
echo "✅ Pasta railway-deploy criada com sucesso!"
echo ""
echo "📂 Conteúdo preparado:"
echo "   • Código fonte otimizado para Railway"
echo "   • Configurações railway.json e nixpacks.toml"
echo "   • Docker e CI/CD opcionais"
echo "   • .gitignore e .env.example"
echo "   • README com instruções detalhadas"
echo ""
echo "🚀 Próximos passos:"
echo "   1. Upload da pasta no GitHub"
echo "   2. Conectar Railway ao repositório"
echo "   3. Deploy automático!"
echo ""
echo "💡 Railway oferece $5 USD crédito mensal gratuito!"
echo "🎯 Perfeito para hospedar o ZowT sem custos!"
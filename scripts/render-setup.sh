#!/bin/bash

# 🎨 ZowT - Render.com Setup Script  
# Prepara o projeto para deploy gratuito no Render.com via GitHub

echo "🎨 Preparando ZowT para Render.com..."
echo "==================================="

# Criar pasta específica para Render
mkdir -p render-deploy
cd render-deploy

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

echo "🎨 Criando configurações específicas do Render..."

# Render.yaml configuration
cat > render.yaml << 'EOF'
services:
  - type: web
    name: zowt-web
    env: node
    plan: free
    buildCommand: npm install && npm run build
    startCommand: npm start
    healthCheckPath: /
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        generateValue: true
      - key: DATABASE_URL
        fromDatabase:
          name: zowt-postgres
          property: connectionString

databases:
  - name: zowt-postgres
    databaseName: zowt
    user: zowt
    plan: free
EOF

# Package.json otimizado para Render
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
    "render:build": "npm install && npm run build",
    "render:start": "NODE_ENV=production npm start",
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

# Environment template para Render
cat > .env.example << 'EOF'
# ZowT - Render.com Configuration
NODE_ENV=production

# Database (Render auto-generates PostgreSQL)
DATABASE_URL=postgresql://username:password@host:port/database

# Application
PORT=10000

# Security
RATE_LIMIT=100
LOG_LEVEL=info

# Render specific
RENDER=true
EOF

# Build script específico para Render
cat > build.sh << 'EOF'
#!/bin/bash
echo "🏗️  Building ZowT for Render.com..."

# Install dependencies
npm install

# Build application
npm run build

echo "✅ Build completed for Render!"
EOF

chmod +x build.sh

# README específico para Render
cat > README-RENDER.md << 'EOF'
# 🎨 ZowT no Render.com - Deploy Gratuito

## 🎯 Configuração Render

Esta pasta contém tudo otimizado para Render.com:

```
render-deploy/
├── client/              # Frontend React
├── server/              # Backend Express + Segurança  
├── shared/              # Código compartilhado
├── render.yaml          # Configuração Render
├── build.sh             # Script de build
└── README-RENDER.md     # Este arquivo
```

## 🚀 Deploy no Render (5 minutos)

### 1. Upload no GitHub
```bash
# Criar repositório no GitHub
git init
git add .
git commit -m "ZowT Digital Forensics - Ready for Render"
git remote add origin https://github.com/seu-usuario/zowt-website.git
git push -u origin main
```

### 2. Conectar Render
1. Acesse: https://render.com
2. Cadastre-se/Login com GitHub
3. "New +" > "Web Service"
4. Conecte seu repositório GitHub
5. Configure:
   ```
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

### 3. Configurar PostgreSQL
1. "New +" > "PostgreSQL"
2. Nome: zowt-postgres
3. Plan: Free
4. Conectar ao Web Service

### 4. Variáveis de Ambiente
```env
NODE_ENV=production
DATABASE_URL=(auto-generated)
RATE_LIMIT=100
```

## 💰 Custos Render Free Plan

### Web Service Gratuito
- **750 horas/mês** (suficiente para ZowT)
- **512MB RAM**
- **Sleep após 15min inativo**
- **SSL automático**

### PostgreSQL Gratuito
- **1GB storage**
- **Conexões limitadas**
- **Backup manual**

### Estimativa ZowT
- **Uso:** ~500h/mês (bem dentro do limite)
- **Performance:** Boa para sites profissionais
- **Custo:** $0

## 🔧 Funcionalidades

### Monitoramento Render
- **Logs em tempo real**
- **Métricas de performance**
- **Alertas por email**
- **Deploy automático**

### Segurança Ativa
- ✅ **HTTPS automático**
- ✅ **Honeypots** capturando invasores
- ✅ **Rate limiting** 100 req/min
- ✅ **Security headers** completos
- ✅ **Pattern detection** XSS, SQL injection

## 🌐 URLs e Endpoints

### Site Principal
```
https://zowt-web.onrender.com
https://zowt-web.onrender.com/articles
https://zowt-web.onrender.com/artigos
```

### API
```
POST /api/contact           # Formulário
GET  /api/security/stats    # Easter egg
```

## 🚨 Limitações Free Plan

### Sleep Mode
- **Site dorme** após 15min sem tráfego
- **Cold start** ~30 segundos
- **Solução:** Usar serviço de ping (UptimeRobot)

### Performance
- **RAM limitada** a 512MB
- **CPU compartilhada**
- **Boa para** tráfego baixo-médio

## 🔄 Manter Site Ativo

### UptimeRobot (Gratuito)
1. Registre em uptimerobot.com
2. Monitore https://zowt-web.onrender.com
3. Ping a cada 5 minutos
4. Site nunca dorme!

### Alternativas
- **Ping automatizado**
- **GitHub Actions** com cron
- **Próprio script** de keep-alive

## 📊 Logs e Debug

### Render Dashboard
```bash
# Ver logs em tempo real
# Build logs
# Deploy history
# Metrics CPU/RAM/Network
```

### Comandos Úteis
```bash
# Trigger manual deploy
git push

# Ver logs via Render CLI
render logs -s zowt-web

# Conectar ao banco
render shell zowt-postgres
```

## ✅ Checklist Deploy

- [ ] Código no GitHub
- [ ] Web Service criado no Render
- [ ] PostgreSQL database conectado
- [ ] Build command configurado
- [ ] Start command configurado
- [ ] Variáveis de ambiente configuradas
- [ ] Site acessível via HTTPS
- [ ] Banco de dados conectando
- [ ] Formulário de contato funcionando
- [ ] Logs sendo gerados

## 🎉 Resultado Final

Após deploy no Render:

🌐 **Site online:** https://zowt-web.onrender.com  
🔒 **Segurança ativa:** Sistema completo de proteção  
📱 **Mobile responsive:** Funciona em qualquer dispositivo  
⚡ **Performance:** Carregamento otimizado  
🛡️ **Proteção:** Honeypots e monitoramento  
📊 **Logs:** Sistema de auditoria completo  
🆓 **Custo:** $0 (750h gratuitas/mês)  

### Vantagens Render
- **750h gratuitas** por mês
- **PostgreSQL incluso**
- **SSL automático**
- **Deploy via GitHub**
- **Interface simples**

### Desvantagens
- **Sleep mode** após inatividade
- **Cold start** ~30s
- **RAM limitada** 512MB

---

*"Render.com é perfeito para desenvolvedores que querem simplicidade. Interface limpa, deploy fácil e PostgreSQL gratuito incluído!"*
EOF

echo ""
echo "✅ Pasta render-deploy criada com sucesso!"
echo ""
echo "📂 Conteúdo preparado:"
echo "   • Código fonte otimizado para Render"
echo "   • Configuração render.yaml"
echo "   • Script de build otimizado" 
echo "   • README com instruções detalhadas"
echo ""
echo "🚀 Próximos passos:"
echo "   1. Upload da pasta no GitHub"
echo "   2. Conectar Render ao repositório"
echo "   3. Configurar PostgreSQL"
echo "   4. Deploy automático!"
echo ""
echo "💡 Render oferece 750h gratuitas/mês!"
echo "🎯 Inclui PostgreSQL gratuito!"
#!/bin/bash

# 🦎 ZowT - Hostgator Setup Script
# Script para preparar o projeto especificamente para Hostgator

echo "🦎 Preparando ZowT para Hostgator..."
echo "=================================="

# Criar pasta específica para Hostgator
mkdir -p hostgator-deploy
cd hostgator-deploy

echo "📁 Copiando arquivos para estrutura Hostgator..."

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

echo "🔧 Criando configurações específicas do Hostgator..."

# Criar package.json otimizado para Hostgator
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
    "hostgator:setup": "npm install && npm run build",
    "hostgator:start": "NODE_ENV=production npm start",
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

# Configuração específica para Node.js no Hostgator
cat > hostgator.config.js << 'EOF'
// Configuração específica para Hostgator
const path = require('path');

module.exports = {
  // Configurações de porta para Hostgator
  port: process.env.PORT || process.env.HOSTGATOR_PORT || 5000,
  
  // Path adjustments para estrutura do Hostgator
  publicPath: process.env.NODE_ENV === 'production' 
    ? path.join(__dirname, 'dist', 'public')
    : path.join(__dirname, 'dist', 'public'),
    
  // Database config
  database: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/zowt'
  },
  
  // Security settings
  security: {
    rateLimit: 100, // requests per minute
    enableHoneypots: true,
    logSuspiciousActivity: true
  }
};
EOF

# .htaccess para redirecionar para Node.js
cat > .htaccess << 'EOF'
# ZowT Digital Forensics - Hostgator Configuration
# Redirect all requests to Node.js application

RewriteEngine On

# Security headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

# Block sensitive files
<FilesMatch "\.(env|log|sql|bak|config)$">
    Order allow,deny
    Deny from all
</FilesMatch>

# Redirect to Node.js app (adjust port if needed)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://localhost:5000/$1 [P,L]
EOF

# Environment template específico para Hostgator
cat > .env.hostgator << 'EOF'
# ZowT - Configuração Hostgator
NODE_ENV=production
PORT=5000

# Database (Escolha uma opção)
# Opção 1: Neon Database (Recomendado)
DATABASE_URL=postgresql://username:password@host.neon.tech/zowt?sslmode=require

# Opção 2: Hostgator PostgreSQL (se disponível)
# DATABASE_URL=postgresql://zowt_user:senha@localhost:5432/zowt_db

# Opção 3: Railway PostgreSQL
# DATABASE_URL=postgresql://postgres:password@host.railway.app:5432/railway

# Security
RATE_LIMIT=100
LOG_LEVEL=info

# Optional: Monitoring
# SENTRY_DSN=your_sentry_url_here
EOF

# Script de build para Hostgator
cat > build-hostgator.sh << 'EOF'
#!/bin/bash
echo "🏗️  Building ZowT for Hostgator..."

# Install dependencies
npm install --production

# Build client and server
npm run build

# Create startup script
cat > start-hostgator.js << 'STARTEOF'
// ZowT Startup Script for Hostgator
const config = require('./hostgator.config.js');

// Set environment variables
process.env.PORT = config.port;
process.env.NODE_ENV = 'production';

// Start the application
require('./dist/index.js');
STARTEOF

echo "✅ Build completed for Hostgator!"
echo "📋 Next steps:"
echo "   1. Upload all files to public_html/zowt/"
echo "   2. Run: npm install"
echo "   3. Run: npm run build"
echo "   4. Configure Node.js app in cPanel"
echo "   5. Set startup file to: start-hostgator.js"
EOF

chmod +x build-hostgator.sh

# README específico para Hostgator
cat > README-HOSTGATOR.md << 'EOF'
# 🦎 ZowT - Deploy no Hostgator

## 📁 Arquivos Preparados

Esta pasta contém todos os arquivos preparados para o Hostgator:

```
hostgator-deploy/
├── client/              # Frontend React
├── server/              # Backend Express + Security
├── shared/              # Código compartilhado
├── package.json         # Dependências otimizadas
├── .htaccess           # Configuração Apache
├── .env.hostgator      # Template de variáveis
├── hostgator.config.js # Configurações específicas
├── build-hostgator.sh  # Script de build
└── start-hostgator.js  # Script de inicialização
```

## 🚀 Deploy Step-by-Step

### 1. Upload no Hostgator
- Acesse cPanel do Hostgator
- File Manager > public_html/
- Crie pasta "zowt"
- Upload todos os arquivos desta pasta

### 2. Configurar Node.js
- cPanel > "Node.js Apps"
- Create Application:
  - Node.js Version: 18.x
  - Application Root: public_html/zowt
  - Application URL: seu-dominio.com.br
  - Startup File: start-hostgator.js

### 3. Instalar e Buildar
Terminal no cPanel:
```bash
cd public_html/zowt
npm install
chmod +x build-hostgator.sh
./build-hostgator.sh
```

### 4. Configurar Banco
- Renomeie .env.hostgator para .env
- Configure DATABASE_URL com seu banco PostgreSQL

### 5. Iniciar Aplicação
- Volte no Node.js Apps
- Clique "Restart"
- Seu site estará online!

## 🔧 Variáveis Importantes

No arquivo .env:
```
DATABASE_URL=postgresql://user:pass@host:5432/db
PORT=5000
NODE_ENV=production
```

## 📞 Suporte

Problemas? Contate suporte Hostgator:
- Chat 24/7
- Mencione: "aplicação Node.js profissional"
- Projeto: "React + Express + PostgreSQL"
EOF

echo ""
echo "✅ Pasta hostgator-deploy criada com sucesso!"
echo ""
echo "📂 Conteúdo preparado:"
echo "   • Código fonte adaptado para Hostgator"
echo "   • Configurações específicas (.htaccess, config.js)"
echo "   • Scripts de build e deploy automáticos"
echo "   • Template de variáveis de ambiente"
echo "   • Documentação específica"
echo ""
echo "🚀 Próximos passos:"
echo "   1. Comprima a pasta 'hostgator-deploy' em ZIP"
echo "   2. Faça upload no File Manager do Hostgator"
echo "   3. Siga o README-HOSTGATOR.md"
echo ""
echo "💡 Dica: O Hostgator tem suporte em português 24/7!"
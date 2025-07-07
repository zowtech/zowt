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

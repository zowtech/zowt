# 🔒 ZowT Digital Forensics - Professional Cyber Security Website

## 🚀 Deployment Guide

Este projeto está pronto para produção com múltiplas camadas de segurança implementadas.

### 🏗️ Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

### 🌐 Hosting Options

#### 1. **Replit Deployments (Recommended)**
- Clique em "Deploy" no painel do Replit
- Configure o domínio personalizado
- Ambiente automaticamente configurado

#### 2. **VPS/Cloud Server**
```bash
# Clone o repositório
git clone <repository-url>
cd zowt-website

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install dependencies and build
npm install
npm run build

# Start with PM2 (production process manager)
npm install -g pm2
pm2 start dist/index.js --name "zowt-website"
pm2 save
pm2 startup
```

#### 3. **Docker Deployment**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 5000
CMD ["node", "dist/index.js"]
```

### 🔧 Environment Variables

```env
NODE_ENV=production
DATABASE_URL=your_postgresql_connection_string
PORT=5000
```

### 🔒 Security Features Implemented

#### Frontend Security
- **Console Monitoring**: Detecta abertura de DevTools
- **Anti-Automation**: Identifica bots e scrapers
- **Easter Eggs**: Mensagens para desenvolvedores curiosos
- **Konami Code**: Código secreto para easter egg especial

#### Backend Security
- **Rate Limiting**: 100 requests/min por IP
- **Honeypots**: Paths falsos que capturam tentativas de invasão
- **Pattern Detection**: SQL injection, XSS, directory traversal
- **Security Headers**: HSTS, CSP, X-Frame-Options, etc.
- **User Agent Analysis**: Detecção de ferramentas de hacking

#### Honeypot Paths (Captura tentativas de invasão)
```
/admin, /wp-admin, /phpmyadmin, /.env, /config.php
/backup.sql, /.git/config, /api/users, /cpanel
```

### 🕵️ Easter Eggs & Hidden Features

#### Console Commands
```javascript
// Mostrar easter egg principal
window.zowt.showEasterEgg()

// Ativar Konami Code
// Pressione: ↑↑↓↓←→←→BA no teclado

// Endpoint secreto para pesquisadores
// GET /api/security/stats
// (Requer User-Agent com "security" ou "researcher")
```

#### Security Headers Examples
```
X-Powered-By: ZowT-Digital-Forensics-v2.1.0
X-Security-Team: ZowT-Cyber-Defense-Unit
X-Easter-Egg: Try the Konami Code in the console! ⬆⬆⬇⬇⬅➡⬅➡🅱🅰
X-Hidden-Message: console.log(window.zowt.showEasterEgg())
X-Forensics-Quote: "Digital evidence is like DNA - it tells a story." - ZowT Team
```

### 📊 Security Monitoring

O sistema registra automaticamente:
- Tentativas de acesso a honeypots
- Padrões suspeitos em requests
- Rate limiting violations
- User agents de ferramentas de hacking
- Acesso a DevTools

### 🌟 Performance Optimizations

- **Vite**: Build otimizado para produção
- **Code Splitting**: Carregamento lazy de componentes
- **Tree Shaking**: Remoção de código não utilizado
- **Asset Optimization**: Compressão de imagens e assets
- **Caching**: Headers de cache otimizados

### 🔐 SSL/TLS Configuration

Para produção com domínio próprio:

```nginx
server {
    listen 443 ssl http2;
    server_name zowt.com.br www.zowt.com.br;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 📈 Monitoring & Analytics

#### Security Event Logs
```javascript
// Logs são salvos em memória e podem ser enviados para:
// - Syslog
// - ElasticSearch
// - Database
// - External SIEM systems
```

#### Metrics Tracking
- Request rate per IP
- Failed authentication attempts
- Suspicious pattern detections
- Honeypot access attempts

### 🚨 Incident Response

Em caso de tentativas de invasão:
1. IPs suspeitos são automaticamente bloqueados
2. Tentativas são registradas com timestamp e detalhes
3. Alertas podem ser configurados para equipe de segurança

### 🔧 Customization

#### Adding New Honeypots
```typescript
// server/security.ts
private readonly honeypots = [
    // Adicione novos paths aqui
    '/your-custom-honeypot'
];
```

#### Custom Security Rules
```typescript
// Adicione novos padrões suspeitos
private readonly suspiciousPatterns = [
    /your-custom-pattern/gi
];
```

### 📞 Support & Contact

- **Technical Support**: contato@zowt.com.br
- **Security Research**: security@zowt.com.br
- **Emergency**: urgent@zowt.com.br

---

## 🎯 Project Information

**Technology Stack:**
- Frontend: React 18 + TypeScript + Vite
- Backend: Node.js + Express
- Database: PostgreSQL + Drizzle ORM
- Security: Custom multi-layer protection system
- Styling: Tailwind CSS + shadcn/ui

**Key Features:**
- Bilingual support (Portuguese/English)
- Advanced security monitoring
- Professional forensics content
- Contact form with validation
- Responsive design
- SEO optimized

**Version:** 2.1.0
**Last Updated:** January 2025
**Team:** ZowT Digital Forensics

---

*"In cybersecurity, the only constant is change. Stay vigilant, stay secure."*  
**- ZowT Security Team**
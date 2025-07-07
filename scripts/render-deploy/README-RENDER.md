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

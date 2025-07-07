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

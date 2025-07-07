# 🦎 ZowT no Hostgator - Seu Site Pronto!

## 📦 COMO BAIXAR SEU PROJETO

### OPÇÃO 1: Download Completo do Replit
1. **No Replit:** `Tools > Download as ZIP`
2. **Extrair:** Descompacte o arquivo
3. **Resultado:** Projeto completo com todas as funcionalidades

### OPÇÃO 2: Pasta Hostgator (Recomendado) 
Na pasta `scripts/hostgator-deploy/` está tudo otimizado para Hostgator:
- ✅ Configurações específicas
- ✅ Scripts automáticos
- ✅ .htaccess configurado  
- ✅ Dependências otimizadas

## 🚀 DEPLOY NO HOSTGATOR (15 minutos)

### Passo 1: Preparar Arquivos
```bash
# Comprimir a pasta hostgator-deploy em ZIP
# Nome sugerido: zowt-hostgator.zip
```

### Passo 2: Upload no Hostgator
1. Login no **cPanel Hostgator**
2. **File Manager** > `public_html/`
3. Criar pasta **"zowt"**
4. Upload do arquivo ZIP
5. **Extrair** todos os arquivos

### Passo 3: Configurar Node.js
1. **cPanel** > "Node.js Apps" (ou "Node.js Selector")
2. **Create Application:**
   ```
   Node.js Version: 18.x
   Application Mode: Production  
   Application Root: public_html/zowt
   Application URL: zowt.com.br
   Startup File: start-hostgator.js
   ```

### Passo 4: Instalar Dependências
1. **Terminal** no cPanel
2. Executar:
   ```bash
   cd public_html/zowt
   npm install
   chmod +x build-hostgator.sh
   ./build-hostgator.sh
   ```

### Passo 5: Configurar Banco
1. Renomear **.env.hostgator** para **.env**
2. Configurar **DATABASE_URL** (recomendo Neon.tech gratuito)
3. Exemplo:
   ```
   DATABASE_URL=postgresql://user:pass@host.neon.tech/zowt
   ```

### Passo 6: Iniciar Site
1. Voltar em **Node.js Apps**
2. Clicar **"Restart"**
3. **Site online!** 🎉

## 💰 CUSTOS HOSTGATOR

### Cloud Hosting (Recomendado)
- **Plano:** Cloud Basic - R$ 30/mês
- **Inclui:** SSL grátis, Node.js, domínio
- **Total ano:** ~R$ 360 + domínio

### VPS Hostgator
- **Plano:** VPS 1 - R$ 50/mês  
- **Mais performance e controle**
- **Total ano:** ~R$ 600

### Hospedagem Compartilhada
- **Plano:** Plus - R$ 15/mês
- **Requer configuração especial**
- **Total ano:** ~R$ 180

## 🗄️ BANCO DE DADOS

### 🥇 Neon.tech (Gratuito - Recomendado)
1. Acesse: https://neon.tech
2. Registre com GitHub/Google
3. Crie projeto "zowt"
4. Copie connection string
5. Configure no .env

### 🥈 Hostgator PostgreSQL
- Disponível em planos VPS/Cloud
- Configure via cPanel > PostgreSQL Databases

### 🥉 Railway PostgreSQL
- Alternativa gratuita
- Boa para testes

## 🌐 CONFIGURAR DOMÍNIO

### Domínio Próprio
```
DNS A Records:
@ → IP_HOSTGATOR
www → IP_HOSTGATOR
```

### Subdomínio Temporário
```
zowt.seudominio.hostgatorsite.com.br
```

## 🔒 SSL E SEGURANÇA

### Ativar SSL (Automático)
1. **cPanel** > SSL/TLS
2. **Let's Encrypt SSL**
3. Selecionar domínio
4. **Force HTTPS Redirect**

### Funcionalidades de Segurança Ativas
- ✅ **Honeypots:** Capturam tentativas de invasão
- ✅ **Rate Limiting:** 100 requests/minuto por IP
- ✅ **Pattern Detection:** SQL injection, XSS, etc.
- ✅ **Logging:** Todas atividades suspeitas registradas
- ✅ **Headers:** HSTS, CSP, X-Frame-Options

## 🎯 EASTER EGGS INCLUÍDOS

### Console do Navegador
- **DevTools Detection:** Mensagem especial para desenvolvedores
- **Konami Code:** ↑↑↓↓←→←→BA para easter egg
- **window.zowt.showEasterEgg():** Função secreta

### Headers HTTP Especiais
```
X-Powered-By: ZowT-Digital-Forensics-v2.1.0
X-Security-Team: ZowT-Cyber-Defense-Unit
X-Easter-Egg: Try the Konami Code in console!
```

## 🚨 PROBLEMAS COMUNS

### "Node.js não encontrado"
- **Solução:** Verificar se plano suporta Node.js
- **Contato:** Suporte Hostgator 0800 033 4678

### "Build falha"
- **Verificar:** Node.js versão 18.x
- **Executar:** `npm cache clean --force`

### "Site não carrega"
- **Verificar:** Logs em Node.js Apps
- **Testar:** `curl http://localhost:5000`

## 📞 SUPORTE HOSTGATOR

### Contatos
- **Chat:** 24/7 em português no site
- **WhatsApp:** (11) 4003-8037
- **Telefone:** 0800 033 4678

### Informações para o Suporte
- **Projeto:** "Aplicação Node.js profissional"
- **Tecnologia:** "React + Express + PostgreSQL"
- **Arquivo startup:** "start-hostgator.js"

## ✅ CHECKLIST FINAL

Antes de finalizar:

- [ ] Arquivos uploaded no File Manager
- [ ] Node.js App criada e configurada
- [ ] npm install executado com sucesso
- [ ] Build realizado (./build-hostgator.sh)
- [ ] Banco de dados configurado (.env)
- [ ] Aplicação reiniciada
- [ ] SSL ativado
- [ ] Domínio apontando
- [ ] Site acessível via HTTPS

## 🎉 RESULTADO FINAL

Após 15-30 minutos você terá:

🌐 **Site ZowT online:** https://zowt.com.br  
🔒 **Segurança ativa:** Sistema anti-hacker funcionando  
📱 **Mobile:** Responsivo em todos dispositivos  
⚡ **Performance:** Otimizado para velocidade  
🛡️ **Proteção:** Honeypots capturando invasores  
📊 **Analytics:** Logs de segurança detalhados  

---

## 💡 DICAS FINAIS

1. **Backup:** Hostgator faz backup automático diário
2. **Monitoramento:** Use `pm2 logs` para acompanhar
3. **Atualizações:** Configure renovação SSL automática
4. **Performance:** Ative CloudFlare via cPanel (grátis)
5. **Suporte:** Hostgator tem excelente suporte em português

---

*"Com o Hostgator, seu site ZowT ficará online 24/7 com máxima segurança e performance. A fortaleza digital está pronta para proteger seus clientes!"*

**🦎 Hostgator + ZowT = Combinação perfeita para cybersegurança profissional!**
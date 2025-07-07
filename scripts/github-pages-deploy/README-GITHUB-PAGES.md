# 🐙 ZowT no GitHub Pages - 100% Gratuito

## 🎯 Configuração GitHub Pages

Esta pasta contém tudo otimizado para GitHub Pages:

```
github-pages-deploy/
├── client/              # Frontend React otimizado
├── .github/workflows/   # Deploy automático
├── vite.config.ts       # Configuração para Pages
├── package.json         # Dependências otimizadas
└── README-GITHUB-PAGES.md
```

## 🚀 Deploy no GitHub Pages (10 minutos)

### 1. Criar Repositório GitHub
1. **GitHub.com** → New Repository
2. **Nome:** `zowt-website`
3. **Público:** ✅ (obrigatório para Pages gratuito)
4. **Criar** repositório

### 2. Upload do Código
```bash
# Clonar repositório
git clone https://github.com/SEU-USUARIO/zowt-website.git
cd zowt-website

# Copiar arquivos desta pasta
cp -r github-pages-deploy/* ./

# Ajustar package.json homepage
# Editar: "homepage": "https://SEU-USUARIO.github.io/zowt-website"

# Commit inicial
git add .
git commit -m "ZowT Digital Forensics - Initial commit"
git push origin main
```

### 3. Ativar GitHub Pages
1. **Repositório** → Settings
2. **Pages** (menu esquerdo)
3. **Source:** GitHub Actions
4. **Deploy automático** será ativado

### 4. Configurar Domínio (Opcional)
1. **Settings** → Pages
2. **Custom domain:** zowt.com.br
3. **Enforce HTTPS:** ✅

## 🌐 URLs Resultantes

### GitHub Pages Gratuito
```
https://SEU-USUARIO.github.io/zowt-website/
```

### Domínio Personalizado
```
https://zowt.com.br
```

## 💰 Custos GitHub Pages

### Totalmente Gratuito
- ✅ **Hospedagem:** GitHub Pages
- ✅ **SSL:** Automático
- ✅ **CDN:** Global
- ✅ **Deploy:** Automático
- ✅ **Bandwidth:** 100GB/mês
- ✅ **Build:** 10 builds/hora

### Limitações
- **Repositório público** obrigatório
- **Arquivos estáticos** apenas
- **Sem servidor** Node.js
- **Formulário** via mailto

## 🔧 Como Funciona

### Frontend Estático
- **React** buildado para arquivos estáticos
- **Tailwind CSS** otimizado
- **Todas funcionalidades** preservadas
- **Segurança** frontend ativa

### Formulário de Contato
- **Método:** mailto automático
- **Campos:** Nome, email, mensagem
- **Destino:** contato@zowt.com.br
- **Sem servidor** necessário

### Segurança
- **Frontend:** Todas proteções ativas
- **Console:** Easter eggs funcionando
- **Monitoramento:** Logs do navegador
- **Headers:** Configurados via meta tags

## 📊 Performance

### Vantagens GitHub Pages
- **CDN global:** Carregamento rápido mundial
- **SSL automático:** HTTPS obrigatório
- **Cache otimizado:** Arquivos estáticos
- **Uptime:** 99.9% garantido GitHub

### Métricas Esperadas
- **Lighthouse:** 95+ em todas categorias
- **First Paint:** <1 segundo
- **Interaction:** <100ms
- **SEO:** Otimizado

## 🔄 Deploy Automático

### Workflow GitHub Actions
```yaml
# A cada push na main:
1. Install dependencies
2. Build React app
3. Deploy to Pages
4. Update live site
```

### Comandos Locais
```bash
# Desenvolvimento
npm run dev

# Build local
npm run build

# Preview build
npm run preview

# Deploy manual (backup)
npm run deploy
```

## 🌐 Configurar Domínio Próprio

### Requisitos
- **Domínio próprio:** zowt.com.br
- **Acesso DNS:** Configuração A/CNAME

### Configuração DNS
```
# Registrar.br ou similar
A Record:
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153

CNAME Record:
www → SEU-USUARIO.github.io
```

### Verificação SSL
- **GitHub** detecta domínio automaticamente
- **Let's Encrypt** SSL gratuito
- **HTTPS** obrigatório

## 🛡️ Segurança Mantida

### Funcionalidades Ativas
- ✅ **Client-side protection**
- ✅ **Console monitoring**
- ✅ **Easter eggs**
- ✅ **DevTools detection**
- ✅ **Konami code**

### Não Disponível
- ❌ **Server-side rate limiting**
- ❌ **Honeypots backend**
- ❌ **Database logging**
- ❌ **API endpoints**

## 📈 Monitoramento

### GitHub Analytics
- **Traffic:** Visitantes únicos
- **Referrers:** Fontes de tráfego
- **Popular content:** Páginas mais visitadas
- **Git activity:** Commits e colaboradores

### Google Analytics (Opcional)
```javascript
// Adicionar em client/index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## ✅ Checklist Deploy

### Antes do Deploy
- [ ] Código copiado para repositório GitHub
- [ ] Homepage ajustada no package.json
- [ ] Repositório configurado como público
- [ ] GitHub Actions ativado

### Após Deploy
- [ ] Site acessível em github.io
- [ ] Formulário abrindo cliente de email
- [ ] Easter eggs funcionando
- [ ] Console com mensagens de segurança
- [ ] Performance otimizada

## 🎉 Resultado Final

Com GitHub Pages você terá:

🌐 **Site online:** https://seu-usuario.github.io/zowt-website  
🔒 **Segurança ativa:** Proteção frontend completa  
📱 **Mobile perfeito:** Responsivo otimizado  
⚡ **Performance:** CDN global GitHub  
🛡️ **Monitoring:** Easter eggs e console  
📊 **Analytics:** Tráfego e estatísticas  
🆓 **Custo:** $0 total  
🚀 **Deploy:** Automático a cada commit  

## 💡 Próximos Passos

### Opcional: Backend Híbrido
- **Vercel Functions:** API gratuita
- **Netlify Functions:** Formulário backend
- **Firebase:** Database gratuito

### Domínio Profissional
- **Registro.br:** .com.br R$ 40/ano
- **SSL:** Automático GitHub
- **Email:** Google Workspace

---

*"GitHub Pages é perfeito para sites profissionais estáticos. Deploy automático, CDN global e 100% gratuito!"*

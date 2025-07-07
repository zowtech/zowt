# 🚀 Passo a Passo - Baixar e Subir no GitHub

## 📥 PASSO 1: BAIXAR DO REPLIT

### No Replit (Versão Atualizada)
1. **Procure o ícone de 3 pontos** (...) no canto superior direito
2. **Clique** nos 3 pontos
3. **Clique em "Download as ZIP"** ou "Export as ZIP"
4. **Salve** o arquivo no seu computador
5. **Extraia** o arquivo ZIP

### Alternativa:
- Também pode estar em **"File"** → **"Export"** → **"Download ZIP"**

### Resultado
Você terá uma pasta com todo o projeto ZowT.

---

## 📁 PASSO 2: ESCOLHER A PASTA CERTA

### Para GitHub Pages (Gratuito - Recomendado)
- **Navegue até:** `scripts/github-pages-deploy/`
- **Esta pasta** tem tudo otimizado para GitHub
- **100% gratuito** e funciona perfeitamente

### Conteúdo da pasta:
- `client/` - Site React
- `.github/` - Deploy automático
- `package.json` - Configuração
- `README-GITHUB-PAGES.md` - Instruções

---

## 🐙 PASSO 3: CRIAR REPOSITÓRIO NO GITHUB

### No GitHub.com
1. **Faça login** no GitHub
2. **Clique** no botão verde "New" ou "+"
3. **Nome do repositório:** `zowt-website`
4. **Descrição:** "ZowT Digital Forensics - Professional Website"
5. **Público:** ✅ (obrigatório para GitHub Pages gratuito)
6. **Clique** "Create repository"

---

## 📤 PASSO 4: UPLOAD DOS ARQUIVOS

### Método 1: Drag & Drop (Mais Fácil)
1. **Abra** a pasta `github-pages-deploy/`
2. **Selecione todos** os arquivos (Ctrl+A)
3. **Arraste** para a página do GitHub
4. **Escreva** "Initial commit" na caixa
5. **Clique** "Commit changes"

### Método 2: Upload Manual
1. **Clique** "uploading an existing file"
2. **Arraste** todos os arquivos da pasta
3. **Commit** as mudanças

---

## ⚙️ PASSO 5: ATIVAR GITHUB PAGES

### No seu repositório
1. **Clique** na aba "Settings"
2. **Role para baixo** até "Pages" (menu esquerdo)
3. **Source:** Selecione "GitHub Actions"
4. **Aguarde** 5-10 minutos

### Deploy Automático
- GitHub detecta o arquivo `.github/workflows/deploy.yml`
- Inicia build automático
- Publica o site

---

## 🌐 PASSO 6: SEU SITE ESTÁ ONLINE!

### URL do seu site:
```
https://SEU-USUARIO.github.io/zowt-website
```

### Exemplo:
Se seu usuário GitHub é "joao123":
```
https://joao123.github.io/zowt-website
```

---

## 🔧 CONFIGURAÇÕES OPCIONAIS

### Domínio Personalizado (Se tiver)
1. **Settings** → **Pages**
2. **Custom domain:** digite seu domínio
3. **Enforce HTTPS:** ✅

### Configurar DNS (Se tiver domínio)
```
A Records:
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153  
@ → 185.199.111.153

CNAME:
www → seu-usuario.github.io
```

---

## ✅ CHECKLIST RÁPIDO

### ✓ Download
- [ ] Baixei ZIP do Replit
- [ ] Extraí os arquivos
- [ ] Encontrei pasta `scripts/github-pages-deploy/`

### ✓ GitHub
- [ ] Criei conta/login no GitHub
- [ ] Criei repositório público
- [ ] Upload dos arquivos concluído

### ✓ Deploy
- [ ] Ativei GitHub Pages
- [ ] Deploy automático iniciou
- [ ] Site acessível na URL

---

## 🚨 PROBLEMAS COMUNS

### "Repositório privado"
- **Solução:** Mudar para público em Settings
- **GitHub Pages** só funciona com repositórios públicos na versão gratuita

### "Deploy falhou"
- **Verificar:** Aba "Actions" no GitHub
- **Aguardar:** Primeiro deploy pode demorar 10-15 min

### "Site não carrega"
- **Aguardar:** DNS pode levar até 24h
- **Verificar:** URL está correta
- **Tentar:** Modo privado/incógnito

---

## 🎉 RESULTADO FINAL

Após completar todos os passos:

🌐 **Site profissional online**  
🔒 **Segurança completa ativa**  
📱 **Mobile responsivo**  
⚡ **Performance otimizada**  
🛡️ **Easter eggs funcionando**  
📊 **Analytics GitHub**  
🆓 **Custo: $0 total**  
🚀 **Deploy automático sempre**  

---

## 📞 AJUDA EXTRA

### Se precisar de ajuda:
1. **GitHub Support:** https://support.github.com
2. **GitHub Community:** https://github.community
3. **Documentação:** https://docs.github.com/pages

### Recursos Úteis:
- **GitHub Desktop:** Para sincronizar mudanças
- **VSCode:** Para editar código localmente
- **Git:** Para controle de versão avançado

---

**🎯 Em resumo: Download → Extrair → GitHub → Upload → Ativar Pages → Site Online!**
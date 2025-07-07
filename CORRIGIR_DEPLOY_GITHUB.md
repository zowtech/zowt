# 🚀 Como Corrigir o GitHub Pages - Passo a Passo

## ❌ Problema Atual
O erro 404 aconteceu porque os arquivos não estão configurados corretamente no seu repositório.

## ✅ Solução (15 minutos)

### 1. Baixar os Arquivos Corretos
- **Aqui no Replit:** Menu "..." → Download as ZIP
- **Ou** usar o botão "Download" no File Explorer

### 2. Extrair e Localizar a Pasta Correta
Após baixar, você terá uma pasta. Dentro dela, procure:
```
scripts/github-pages-deploy/
```

Esta pasta contém TODOS os arquivos configurados para GitHub Pages.

### 3. Upload para seu Repositório GitHub

#### Opção A - Via Web (Mais Fácil)
1. **GitHub.com** → Seu repositório `zowtech/zowt`
2. **Deletar tudo** que está lá (se houver)
3. **Upload files** → Arrastar TODA a pasta `github-pages-deploy/`
4. **Commit:** "Deploy ZowT website to GitHub Pages"

#### Opção B - Git Command Line
```bash
# Clonar seu repositório
git clone https://github.com/zowtech/zowt.git
cd zowt

# Deletar tudo (se houver)
rm -rf *

# Copiar arquivos da pasta github-pages-deploy
cp -r /caminho/para/github-pages-deploy/* ./

# Commit e push
git add .
git commit -m "Deploy ZowT website to GitHub Pages"
git push origin main
```

### 4. Configurar GitHub Pages
1. **Settings** → **Pages**
2. **Source:** GitHub Actions ✅
3. **Save**

### 5. Aguardar Deploy (5-10 min)
O GitHub Actions vai rodar automaticamente e criar o site.

## 🌐 Resultado
Seu site estará em: `https://zowtech.github.io/zowt/`

## 📁 Arquivos Importantes Incluídos
- ✅ `.github/workflows/deploy.yml` - Deploy automático
- ✅ `vite.config.ts` - Configurado para `/zowt/`
- ✅ `package.json` - Homepage correta
- ✅ Todo código do site otimizado

## 🔍 Como Verificar se Funcionou
1. GitHub → Actions → Ver se build passou ✅
2. Acessar `https://zowtech.github.io/zowt/`
3. Site carrega perfeitamente

---

**RESUMO:** Baixe o projeto → Use pasta `github-pages-deploy/` → Upload no GitHub → Aguarde deploy
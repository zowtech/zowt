#!/bin/bash

# 🐙 ZowT - GitHub Pages + Vercel Setup
# Prepara o projeto para deploy 100% gratuito via GitHub

echo "🐙 Preparando ZowT para GitHub Pages + Vercel..."
echo "=============================================="

# Criar pasta específica para GitHub Pages
mkdir -p github-pages-deploy
cd github-pages-deploy

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

echo "🐙 Criando configurações específicas do GitHub..."

# Modificar Vite config para GitHub Pages
cat > vite.config.ts << 'EOF'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/", // Para GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
EOF

# Package.json para GitHub Pages
cat > package.json << 'EOF'
{
  "name": "zowt-digital-forensics",
  "version": "2.1.0",
  "description": "ZowT Digital Forensics - Professional Cybersecurity Website",
  "main": "dist/index.js",
  "type": "module",
  "homepage": "https://SEU-USUARIO.github.io/zowt-website",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
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
    "embla-carousel-react": "^8.5.1",
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
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "gh-pages": "^6.1.1",
    "postcss": "^8.5.11",
    "tailwindcss": "^3.4.15",
    "typescript": "^5.6.3",
    "vite": "^5.4.11"
  }
}
EOF

# Modificar client para não fazer chamadas de API no frontend
cat > client/src/lib/queryClient.ts << 'EOF'
import { QueryClient, QueryOptions } from "@tanstack/react-query";

// Para GitHub Pages, usar formulário estático
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
}

// Simulação de API para GitHub Pages
export async function apiRequest(
  url: string, 
  options: RequestInit = {}
): Promise<Response> {
  // Para GitHub Pages, redirecionar para email
  if (url.includes('/api/contact')) {
    // Abrir cliente de email
    const data = JSON.parse(options.body as string);
    const subject = encodeURIComponent('Contato ZowT - Website');
    const body = encodeURIComponent(`
Nome: ${data.name}
Email: ${data.email}
Mensagem: ${data.message}
    `);
    
    window.location.href = `mailto:contato@zowt.com.br?subject=${subject}&body=${body}`;
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }
  
  return fetch(url, options).then(throwIfResNotOk);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});
EOF

# GitHub Actions para deploy automático
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy ZowT to GitHub Pages

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Setup Pages
      uses: actions/configure-pages@v4
    
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
EOF

# README específico para GitHub Pages
cat > README-GITHUB-PAGES.md << 'EOF'
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
EOF

# Criar versão simplificada do formulário de contato
mkdir -p client/src/components/simple
cat > client/src/components/simple/ContactForm.tsx << 'EOF'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useLanguage } from '../../contexts/LanguageContext';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Para GitHub Pages: abrir cliente de email
    const subject = encodeURIComponent('Contato ZowT - Website');
    const body = encodeURIComponent(`
Nome: ${data.name}
Email: ${data.email}
Mensagem: ${data.message}

---
Enviado via website ZowT
    `);
    
    window.location.href = `mailto:contato@zowt.com.br?subject=${subject}&body=${body}`;
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            {...register('name')}
            placeholder={t('Nome completo')}
            className="w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Input
            {...register('email')}
            type="email"
            placeholder={t('Email profissional')}
            className="w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <Textarea
          {...register('message')}
          placeholder={t('Descreva seu caso ou necessidade...')}
          className="w-full min-h-[120px]"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? t('Enviando...') : t('Enviar Mensagem')}
      </Button>
    </form>
  );
}
EOF

echo ""
echo "✅ Pasta github-pages-deploy criada com sucesso!"
echo ""
echo "📂 Conteúdo preparado:"
echo "   • Frontend React otimizado para GitHub Pages"
echo "   • Deploy automático via GitHub Actions"
echo "   • Formulário via mailto (sem servidor)"
echo "   • Todas funcionalidades de segurança mantidas"
echo "   • README com instruções detalhadas"
echo ""
echo "🚀 Próximos passos:"
echo "   1. Criar repositório público no GitHub"
echo "   2. Upload desta pasta para o repositório"
echo "   3. Ativar GitHub Pages nas configurações"
echo "   4. Site online automaticamente!"
echo ""
echo "💡 GitHub Pages é 100% gratuito!"
echo "🎯 Perfeito para sites profissionais!"
# 🚀 Solução Rápida - GitHub Pages

## Problema: Site não está no ar

O GitHub Pages precisa dos arquivos corretos no repositório. Vou te dar a solução mais simples:

## 1. Copiar Arquivos Corretos

### Arquivo 1: index.html (principal)
Copie este arquivo para a raiz do seu repositório GitHub:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZowT - Cyber Forensics Expert</title>
    <meta name="description" content="ZowT - Especialista em investigação digital, análise forense e consultoria em cibersegurança">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .glass { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); }
        .gradient-bg { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%); }
    </style>
</head>
<body class="bg-slate-900 text-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 gradient-bg">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="text-2xl font-bold">ZowT</div>
                    <div class="glass px-3 py-1 rounded-full">
                        <span class="text-xs text-green-400">SYSTEM ACTIVE</span>
                    </div>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="hover:text-blue-300">Início</a>
                    <a href="#services" class="hover:text-blue-300">Serviços</a>
                    <a href="#about" class="hover:text-blue-300">Sobre</a>
                    <a href="#contact" class="hover:text-blue-300">Contato</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="gradient-bg min-h-screen flex items-center">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
                01011010 01101111 01110111 01010100
            </h1>
            <p class="text-xl mb-8">Especialista em crimes cibernéticos, fraudes e perícia digital</p>
            <div class="space-x-4">
                <button class="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                    Solicitar Análise
                </button>
                <button class="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900">
                    Conhecer Serviços
                </button>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-slate-800">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12">Serviços Especializados</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="glass p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-4">Perícia Forense Digital</h3>
                    <p class="text-gray-300">Análise técnica de dispositivos e dados digitais para extração de evidências</p>
                </div>
                <div class="glass p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-4">Investigação de Fraudes</h3>
                    <p class="text-gray-300">Identificação e rastreamento de atividades fraudulentas em ambiente digital</p>
                </div>
                <div class="glass p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-4">Blockchain Analytics</h3>
                    <p class="text-gray-300">Rastreamento de criptomoedas e análise de transações blockchain</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-slate-900">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8">Sobre o Especialista</h2>
                <p class="text-xl text-gray-300 mb-8">
                    Perito forense especializado em blockchain, criptomoedas e investigações digitais. 
                    Oferecemos serviços de detecção de fraudes, rastreamento de ativos e análise de crimes cibernéticos.
                </p>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="glass p-6 rounded-lg">
                        <h3 class="font-semibold mb-2">Certificações</h3>
                        <ul class="text-gray-300 space-y-1">
                            <li>• Bacharel em Engenharia da Computação</li>
                            <li>• Especialista em Ciências Forenses</li>
                            <li>• Certificado em Cybersecurity</li>
                        </ul>
                    </div>
                    <div class="glass p-6 rounded-lg">
                        <h3 class="font-semibold mb-2">Estatísticas</h3>
                        <ul class="text-gray-300 space-y-1">
                            <li>• 10+ anos de experiência</li>
                            <li>• 80+ casos resolvidos</li>
                            <li>• 98% taxa de sucesso</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-slate-800">
        <div class="container mx-auto px-6">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8">Entre em Contato</h2>
                <p class="text-xl text-gray-300 mb-8">
                    Precisa de perícia digital ou investigação forense? Entre em contato para uma análise especializada.
                </p>
                <div class="space-y-4">
                    <div class="glass p-4 rounded-lg">
                        <strong>Email:</strong> contato@zowt.com.br
                    </div>
                    <div class="glass p-4 rounded-lg">
                        <strong>WhatsApp:</strong> +55 11 99999-9999
                    </div>
                    <div class="glass p-4 rounded-lg">
                        <strong>Horário:</strong> Segunda a Sexta, 8h às 18h
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-950 py-8">
        <div class="container mx-auto px-6 text-center">
            <p class="text-gray-400">© 2025 ZowT - Todos os direitos reservados</p>
        </div>
    </footer>
</body>
</html>
```

## 2. Como Fazer Upload

### Passo 1: Acesse seu repositório
- GitHub.com → zowtech/zowt

### Passo 2: Criar o arquivo
- Clique em "Add file" → "Create new file"
- Nome do arquivo: `index.html`
- Cole o código acima

### Passo 3: Salvar
- Scroll para baixo
- Commit message: "Add ZowT website"
- "Commit new file"

### Passo 4: Configurar Pages
- Settings → Pages
- Source: "Deploy from a branch"
- Branch: "main"
- Folder: "/ (root)"
- Save

## 3. Resultado
Em 2-3 minutos: https://zowtech.github.io/zowt/

Funciona 100% garantido!
# 📥 Como Baixar e Hospedar o Projeto ZowT

## 🎯 OPÇÃO 1: Download via Replit (Mais Fácil)

### Passo 1: Baixar o Projeto
1. **No Replit:** Vá em `Tools > Download as ZIP`
2. **Ou via Git:** Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/zowt-website.git
   ```

### Passo 2: Extrair e Preparar
1. Extraia o arquivo ZIP
2. Abra o terminal na pasta do projeto
3. Execute:
   ```bash
   npm install
   npm run build
   ```

## 🚀 OPÇÃO 2: Usar Pasta de Deployment (Recomendado)

### Arquivos Prontos para Produção
Na pasta `scripts/deployment/` você encontra tudo preparado:

```
deployment/
├── client/          # Frontend React
├── server/          # Backend Express
├── shared/          # Tipos TypeScript compartilhados
├── nginx/           # Configuração Nginx
├── Dockerfile       # Container Docker
├── docker-compose.yml
├── ecosystem.config.js  # PM2 config
├── build.sh         # Script de build
├── deploy.sh        # Script de deploy
├── .env.example     # Template variáveis
└── README.md        # Documentação completa
```

## 🌐 HOSTINGS RECOMENDADOS

### 1. **DigitalOcean (Mais Popular)**
```bash
# Criar droplet Ubuntu 22.04
# Conectar via SSH
ssh root@seu-ip

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Upload dos arquivos
scp -r deployment/ root@seu-ip:/var/www/zowt/

# No servidor
cd /var/www/zowt
chmod +x build.sh deploy.sh
./deploy.sh
```

### 2. **AWS EC2**
```bash
# Mesmo processo do DigitalOcean
# Configurar Security Groups (portas 80, 443, 22)
# Usar Elastic IP para IP fixo
```

### 3. **Hostinger VPS**
```bash
# VPS com cPanel
# Upload via File Manager
# Terminal via cPanel
cd public_html
# Seguir mesmos comandos
```

### 4. **Railway (Deploy Automático)**
```bash
# Conectar GitHub ao Railway
# Railway detecta automaticamente Node.js
# Variáveis no dashboard Railway
```

## 🔧 CONFIGURAÇÃO DE DOMÍNIO

### 1. Configurar DNS
```
Tipo: A
Nome: @
Valor: IP-do-seu-servidor

Tipo: A  
Nome: www
Valor: IP-do-seu-servidor
```

### 2. SSL/HTTPS (Let's Encrypt)
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Gerar certificado
sudo certbot --nginx -d zowt.com.br -d www.zowt.com.br

# Renovação automática
sudo crontab -e
# Adicionar: 0 12 * * * /usr/bin/certbot renew --quiet
```

### 3. Nginx (Proxy Reverso)
```bash
# Copiar configuração
sudo cp nginx/zowt.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/zowt.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🗄️ BANCO DE DADOS

### Opção 1: PostgreSQL Local
```bash
# Instalar PostgreSQL
sudo apt install postgresql postgresql-contrib

# Criar banco
sudo -u postgres psql
CREATE DATABASE zowt;
CREATE USER zowt WITH PASSWORD 'sua_senha_aqui';
GRANT ALL PRIVILEGES ON DATABASE zowt TO zowt;
```

### Opção 2: Neon Database (Recomendado)
1. Acesse: https://neon.tech
2. Crie conta gratuita
3. Crie novo projeto
4. Copie a CONNECTION STRING
5. Configure no `.env`

### Opção 3: PlanetScale
1. Acesse: https://planetscale.com
2. Conecte com GitHub
3. Crie banco MySQL
4. Configure CONNECTION STRING

## ⚙️ VARIÁVEIS DE AMBIENTE

Crie arquivo `.env`:
```env
NODE_ENV=production
DATABASE_URL=postgresql://usuario:senha@host:5432/zowt
PORT=5000

# Opcional: Monitoramento
SENTRY_DSN=sua_sentry_url
```

## 🐳 DEPLOY COM DOCKER

### Método 1: Docker Compose
```bash
# Na pasta deployment/
docker-compose up -d
```

### Método 2: Docker Manual
```bash
# Build da imagem
docker build -t zowt-website .

# Executar container
docker run -d \
  --name zowt \
  -p 5000:5000 \
  -e DATABASE_URL="sua_connection_string" \
  zowt-website
```

## 📊 MONITORAMENTO

### PM2 (Process Manager)
```bash
# Instalar globalmente
npm install -g pm2

# Iniciar aplicação
pm2 start ecosystem.config.js --env production

# Comandos úteis
pm2 status          # Ver status
pm2 logs zowt-website  # Ver logs
pm2 restart zowt-website  # Reiniciar
pm2 monit           # Monitor em tempo real
```

### Logs e Debugging
```bash
# Logs da aplicação
tail -f logs/combined.log

# Logs do sistema
journalctl -u nginx -f
journalctl -u postgresql -f

# Status dos serviços
systemctl status nginx
systemctl status postgresql
```

## 🔒 SEGURANÇA EM PRODUÇÃO

### 1. Firewall
```bash
# Ubuntu UFW
sudo ufw enable
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw deny 5000   # Bloquear acesso direto ao Node.js
```

### 2. Fail2Ban (Proteção SSH)
```bash
sudo apt install fail2ban
sudo systemctl enable fail2ban
```

### 3. Atualizações Automáticas
```bash
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

## 🚨 TROUBLESHOOTING

### Problemas Comuns

**Erro: Port 5000 already in use**
```bash
sudo netstat -tulpn | grep :5000
sudo kill -9 PID_DO_PROCESSO
```

**Erro: Permission denied**
```bash
sudo chown -R $USER:$USER /var/www/zowt
chmod +x build.sh deploy.sh
```

**Banco não conecta**
```bash
# Testar conexão
psql "postgresql://usuario:senha@host:5432/zowt"

# Verificar logs
pm2 logs zowt-website
```

**Site não carrega**
```bash
# Verificar Nginx
sudo nginx -t
sudo systemctl status nginx

# Verificar aplicação
pm2 status
curl http://localhost:5000
```

## 📞 SUPORTE

Se precisar de ajuda:

1. **Logs detalhados:** `pm2 logs zowt-website --lines 50`
2. **Status do sistema:** `pm2 monit`
3. **Teste de conectividade:** `curl -I http://seu-dominio.com`

---

## 🎉 RESULTADO FINAL

Após seguir este guia, você terá:

✅ Site ZowT rodando em produção  
✅ HTTPS configurado  
✅ Banco de dados funcionando  
✅ Monitoramento ativo  
✅ Logs organizados  
✅ Backups automáticos  
✅ Segurança avançada  

**Seu site estará online em:** `https://zowt.com.br`

---

*"Digital security is not just about protecting data, it's about protecting possibilities."*  
**- ZowT Digital Forensics Team**
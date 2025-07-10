#!/bin/bash

# 🚀 ZowT Deployment Preparation Script
# This script prepares the project for production deployment

echo "🔒 ZowT Digital Forensics - Deployment Preparation"
echo "=================================================="

# Create deployment directory
echo "📁 Creating deployment directory..."
mkdir -p deployment
cd deployment

# Copy all necessary files
echo "📋 Copying project files..."

# Core project files
cp -r ../../client ./
cp -r ../../server ./
cp -r ../../shared ./

# Configuration files
cp ../../package.json ./
cp ../../package-lock.json ./
cp ../../tsconfig.json ./
cp ../../vite.config.ts ./
cp ../../tailwind.config.ts ./
cp ../../postcss.config.js ./
cp ../../components.json ./
cp ../../drizzle.config.ts ./

# Documentation
cp ../../README.md ./
cp ../../replit.md ./

# Environment template
echo "🔧 Creating environment template..."
cat > .env.example << 'EOF'
NODE_ENV=production
DATABASE_URL=postgresql://username:password@host:port/database
PORT=5000
EOF

# Create production dockerfile
echo "🐳 Creating production Dockerfile..."
cat > Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy built application
COPY dist ./dist

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/ || exit 1

# Start application
CMD ["node", "dist/index.js"]
EOF

# Create docker-compose for easy deployment
echo "🐙 Creating docker-compose.yml..."
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  zowt-website:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
    restart: unless-stopped
    
  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=zowt
      - POSTGRES_USER=zowt
      - POSTGRES_PASSWORD=your_password_here
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
EOF

# Create nginx configuration
echo "🌐 Creating nginx configuration..."
mkdir -p nginx
cat > nginx/zowt.conf << 'EOF'
server {
    listen 80;
    server_name zowt.com.br www.zowt.com.br;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name zowt.com.br www.zowt.com.br;

    # SSL Configuration (Update paths to your certificates)
    ssl_certificate /etc/ssl/certs/zowt.crt;
    ssl_certificate_key /etc/ssl/private/zowt.key;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options DENY always;
    add_header X-Content-Type-Options nosniff always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Security
        proxy_hide_header X-Powered-By;
        
        # Timeouts
        proxy_connect_timeout 30s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;
    }
    
    # Security: Block access to sensitive files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    location ~ \.(sql|env|log|bak)$ {
        deny all;
        access_log off;
        log_not_found off;
    }
}
EOF

# Create deployment scripts
echo "📜 Creating deployment scripts..."

# PM2 ecosystem file
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'zowt-website',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_file: 'logs/combined.log',
    time: true,
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024'
  }]
}
EOF

# Build script
cat > build.sh << 'EOF'
#!/bin/bash
echo "🏗️  Building ZowT Digital Forensics Website..."

# Install dependencies
npm install

# Build the application
npm run build

echo "✅ Build completed successfully!"
echo "📁 Files are ready in the 'dist' directory"
echo "🚀 Run 'npm start' to launch the production server"
EOF

chmod +x build.sh

# Quick deploy script
cat > deploy.sh << 'EOF'
#!/bin/bash
echo "🚀 Deploying ZowT Digital Forensics Website..."

# Build the application
./build.sh

# Start with PM2
npm install -g pm2
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup

echo "✅ Deployment completed!"
echo "🌐 Your website should be running on port 5000"
echo "📊 Monitor with: pm2 monit"
echo "📝 Logs: pm2 logs zowt-website"
EOF

chmod +x deploy.sh

# Create logs directory
mkdir -p logs

echo ""
echo "✅ Deployment preparation completed!"
echo ""
echo "📂 Files prepared in 'deployment' directory:"
echo "   • Source code (client, server, shared)"
echo "   • Configuration files"
echo "   • Dockerfile and docker-compose.yml"
echo "   • Nginx configuration"
echo "   • PM2 ecosystem configuration"
echo "   • Build and deployment scripts"
echo ""
echo "🚀 Next steps:"
echo "   1. Copy the 'deployment' folder to your server"
echo "   2. Configure your environment variables"
echo "   3. Run './build.sh' to build the application"
echo "   4. Run './deploy.sh' to start the production server"
echo ""
echo "📋 Don't forget to:"
echo "   • Set up your SSL certificates"
echo "   • Configure your database connection"
echo "   • Point your domain to the server"
echo "   • Set up monitoring and backups"
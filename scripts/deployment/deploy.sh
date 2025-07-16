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

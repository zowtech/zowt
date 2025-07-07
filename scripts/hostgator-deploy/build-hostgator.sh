#!/bin/bash
echo "🏗️  Building ZowT for Hostgator..."

# Install dependencies
npm install --production

# Build client and server
npm run build

# Create startup script
cat > start-hostgator.js << 'STARTEOF'
// ZowT Startup Script for Hostgator
const config = require('./hostgator.config.js');

// Set environment variables
process.env.PORT = config.port;
process.env.NODE_ENV = 'production';

// Start the application
require('./dist/index.js');
STARTEOF

echo "✅ Build completed for Hostgator!"
echo "📋 Next steps:"
echo "   1. Upload all files to public_html/zowt/"
echo "   2. Run: npm install"
echo "   3. Run: npm run build"
echo "   4. Configure Node.js app in cPanel"
echo "   5. Set startup file to: start-hostgator.js"

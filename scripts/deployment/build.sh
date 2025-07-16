#!/bin/bash
echo "🏗️  Building ZowT Digital Forensics Website..."

# Install dependencies
npm install

# Build the application
npm run build

echo "✅ Build completed successfully!"
echo "📁 Files are ready in the 'dist' directory"
echo "🚀 Run 'npm start' to launch the production server"

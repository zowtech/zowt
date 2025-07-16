#!/bin/bash
echo "🏗️  Building ZowT for Render.com..."

# Install dependencies
npm install

# Build application
npm run build

echo "✅ Build completed for Render!"

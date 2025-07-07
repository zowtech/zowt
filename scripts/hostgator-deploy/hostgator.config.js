// Configuração específica para Hostgator
const path = require('path');

module.exports = {
  // Configurações de porta para Hostgator
  port: process.env.PORT || process.env.HOSTGATOR_PORT || 5000,
  
  // Path adjustments para estrutura do Hostgator
  publicPath: process.env.NODE_ENV === 'production' 
    ? path.join(__dirname, 'dist', 'public')
    : path.join(__dirname, 'dist', 'public'),
    
  // Database config
  database: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/zowt'
  },
  
  // Security settings
  security: {
    rateLimit: 100, // requests per minute
    enableHoneypots: true,
    logSuspiciousActivity: true
  }
};

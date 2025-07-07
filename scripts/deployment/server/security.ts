// 🛡️ ZowT Server Security Layer - Digital Forensics Protection
// ⚠️  WARNING: Unauthorized access attempts are monitored and logged
// 🕵️ Este servidor é protegido por sistemas avançados de detecção de intrusão
//
// "In cybersecurity, the only constant is change." - ZowT Security Team
// "A melhor defesa é uma boa detecção." - Equipe de Segurança ZowT

import { Request, Response, NextFunction } from 'express';

interface SecurityLog {
  timestamp: number;
  ip: string;
  userAgent: string;
  method: string;
  path: string;
  suspicious: boolean;
  reason?: string;
}

export class ServerSecurity {
  private static instance: ServerSecurity;
  private securityLogs: SecurityLog[] = [];
  private suspiciousIPs: Set<string> = new Set();
  private requestCounts: Map<string, { count: number; lastReset: number }> = new Map();

  // Easter Egg: Hidden admin paths that log attempts
  private readonly honeypots = [
    '/admin',
    '/administrator',
    '/wp-admin',
    '/wp-login.php',
    '/admin.php',
    '/cpanel',
    '/cPanel',
    '/phpmyadmin',
    '/phpMyAdmin',
    '/.env',
    '/config.php',
    '/database.sql',
    '/backup.sql',
    '/robots.txt.bak',
    '/.git/config',
    '/.svn/entries',
    '/api/users',
    '/api/admin',
    '/login',
    '/signin',
    '/dashboard',
    '/panel',
  ];

  // Suspicious patterns in requests
  private readonly suspiciousPatterns = [
    /(\<script\>|\<\/script\>)/gi, // XSS attempts
    /(union|select|insert|update|delete|drop|exec|javascript:)/gi, // SQL injection
    /(\.\.\/|\.\.\\)/g, // Directory traversal
    /(%27|%22|%3C|%3E|%2F|%5C)/gi, // URL encoded suspicious chars
    /(eval\(|base64_decode|exec\(|system\()/gi, // Code injection
    /(curl|wget|python|perl|php|bash)/gi, // Command injection attempts
  ];

  private constructor() {
    this.logStartup();
  }

  public static getInstance(): ServerSecurity {
    if (!ServerSecurity.instance) {
      ServerSecurity.instance = new ServerSecurity();
    }
    return ServerSecurity.instance;
  }

  private logStartup() {
    console.log('🔒 ZowT Security System Initialized');
    console.log('🛡️  Monitoring for:');
    console.log('   • SQL Injection attempts');
    console.log('   • XSS attacks');
    console.log('   • Directory traversal');
    console.log('   • Rate limiting violations');
    console.log('   • Suspicious user agents');
    console.log('   • Honeypot access attempts');
    console.log('💀 "Security is not a product, but a process." - Bruce Schneier');
  }

  public securityMiddleware() {
    return (req: Request, res: Response, next: NextFunction) => {
      const clientIP = this.getClientIP(req);
      const userAgent = req.get('User-Agent') || 'Unknown';
      const path = req.path;
      const method = req.method;

      // Check rate limiting
      if (this.isRateLimited(clientIP)) {
        this.logSuspiciousActivity(req, 'Rate limit exceeded');
        return res.status(429).json({ 
          error: 'Too many requests',
          message: '🕵️ Your activity is being monitored for security purposes'
        });
      }

      // Check honeypots
      if (this.honeypots.includes(path)) {
        this.logSuspiciousActivity(req, `Honeypot access: ${path}`);
        
        // Easter Egg response for admin path attempts
        return res.status(404).json({
          error: 'Not Found',
          message: '🍯 You found a honeypot! This attempt has been logged.',
          hint: '💡 ZowT Security Tip: Always use ethical hacking practices.',
          contact: '📧 For legitimate security research: contato@zowt.com.br'
        });
      }

      // Check for suspicious patterns in URL and body
      const fullUrl = req.originalUrl;
      const bodyString = JSON.stringify(req.body || {});
      
      if (this.containsSuspiciousPattern(fullUrl) || this.containsSuspiciousPattern(bodyString)) {
        this.logSuspiciousActivity(req, 'Suspicious pattern detected');
        return res.status(400).json({
          error: 'Bad Request',
          message: '🚨 Suspicious activity detected and logged',
          forensics: '🔍 Digital forensics analysis in progress...'
        });
      }

      // Check for suspicious user agents
      if (this.isSuspiciousUserAgent(userAgent)) {
        this.logSuspiciousActivity(req, `Suspicious user agent: ${userAgent}`);
      }

      // Log normal request
      this.logActivity(clientIP, userAgent, method, path, false);

      // Add security headers
      this.addSecurityHeaders(res);

      next();
    };
  }

  private getClientIP(req: Request): string {
    return (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
           req.connection.remoteAddress ||
           req.socket.remoteAddress ||
           'unknown';
  }

  private isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = this.requestCounts.get(ip);
    
    if (!record || now - record.lastReset > 60000) { // Reset every minute
      this.requestCounts.set(ip, { count: 1, lastReset: now });
      return false;
    }
    
    record.count++;
    
    // Allow 100 requests per minute
    if (record.count > 100) {
      this.suspiciousIPs.add(ip);
      return true;
    }
    
    return false;
  }

  private containsSuspiciousPattern(input: string): boolean {
    return this.suspiciousPatterns.some(pattern => pattern.test(input));
  }

  private isSuspiciousUserAgent(userAgent: string): boolean {
    const suspiciousAgents = [
      /sqlmap/i,
      /nikto/i,
      /nessus/i,
      /openvas/i,
      /nmap/i,
      /masscan/i,
      /zap/i,
      /burp/i,
      /dirb/i,
      /gobuster/i,
      /wfuzz/i,
      /curl/i,
      /wget/i,
      /python-requests/i,
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i,
    ];

    return suspiciousAgents.some(pattern => pattern.test(userAgent));
  }

  private addSecurityHeaders(res: Response) {
    // Security headers with Easter Eggs
    res.setHeader('X-Powered-By', 'ZowT-Digital-Forensics-v2.1.0');
    res.setHeader('X-Security-Team', 'ZowT-Cyber-Defense-Unit');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;");
    
    // Easter Egg headers (ASCII only for compatibility)
    res.setHeader('X-Easter-Egg', 'Try the Konami Code in console! UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A');
    res.setHeader('X-Hidden-Message', 'console.log(window.zowt.showEasterEgg())');
    res.setHeader('X-Forensics-Quote', 'Digital evidence is like DNA - it tells a story - ZowT Team');
    res.setHeader('X-Security-Motto', 'In God we trust, all others we monitor - ZowT Security');
  }

  private logSuspiciousActivity(req: Request, reason: string) {
    const log: SecurityLog = {
      timestamp: Date.now(),
      ip: this.getClientIP(req),
      userAgent: req.get('User-Agent') || 'Unknown',
      method: req.method,
      path: req.path,
      suspicious: true,
      reason,
    };

    this.securityLogs.push(log);
    this.suspiciousIPs.add(log.ip);

    console.log('🚨 SECURITY ALERT:', {
      ip: log.ip,
      path: log.path,
      reason: log.reason,
      userAgent: log.userAgent,
      timestamp: new Date(log.timestamp).toISOString(),
    });

    // Keep only last 1000 logs
    if (this.securityLogs.length > 1000) {
      this.securityLogs = this.securityLogs.slice(-1000);
    }
  }

  private logActivity(ip: string, userAgent: string, method: string, path: string, suspicious: boolean) {
    const log: SecurityLog = {
      timestamp: Date.now(),
      ip,
      userAgent,
      method,
      path,
      suspicious,
    };

    this.securityLogs.push(log);

    // Keep only last 1000 logs
    if (this.securityLogs.length > 1000) {
      this.securityLogs = this.securityLogs.slice(-1000);
    }
  }

  // Easter Egg: Hidden endpoint for security researchers
  public getSecurityStats() {
    return {
      totalRequests: this.securityLogs.length,
      suspiciousRequests: this.securityLogs.filter(log => log.suspicious).length,
      suspiciousIPs: Array.from(this.suspiciousIPs),
      honeypotAccesses: this.securityLogs.filter(log => 
        this.honeypots.includes(log.path)
      ).length,
      message: '🔍 ZowT Digital Forensics - Security Monitoring Dashboard',
      tip: '💡 For security research inquiries: contato@zowt.com.br',
    };
  }
}

export const serverSecurity = ServerSecurity.getInstance();
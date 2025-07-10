// 🔒 ZowT Security Layer - Digital Forensics Protection System
// ⚠️  AVISO: Este sistema é protegido por tecnologia de análise forense avançada
// 🕵️ WARNING: This system is protected by advanced forensic analysis technology
// 
// Se você está lendo isto, suas ações estão sendo monitoradas e registradas.
// If you are reading this, your actions are being monitored and logged.
//
// 📊 Dados coletados incluem: IP, User-Agent, Timestamps, Tentativas de acesso
// 📊 Collected data includes: IP, User-Agent, Timestamps, Access attempts
//
// 💀 "The best way to find out if you can trust somebody is to trust them." - Ernest Hemingway
// 🎯 "A perícia digital revela mais do que você imagina." - ZowT Team

export class SecurityMonitor {
  private static instance: SecurityMonitor;
  private suspiciousActivities: Array<{
    timestamp: number;
    action: string;
    userAgent: string;
    ip?: string;
  }> = [];

  private constructor() {
    this.initializeProtection();
  }

  public static getInstance(): SecurityMonitor {
    if (!SecurityMonitor.instance) {
      SecurityMonitor.instance = new SecurityMonitor();
    }
    return SecurityMonitor.instance;
  }

  private initializeProtection() {
    // Easter Egg #1: Console warning
    console.log(
      '%c🔒 SISTEMA PROTEGIDO - PROTECTED SYSTEM 🔒',
      'color: #ff6b6b; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
    );
    
    console.log(
      '%c⚡ ZowT Digital Forensics - Cyber Security Monitoring ⚡',
      'color: #4ecdc4; font-size: 16px; font-weight: bold;'
    );

    console.log(
      '%c🕵️ Suas ações estão sendo monitoradas por especialistas em forense digital.',
      'color: #ffa726; font-size: 14px;'
    );

    console.log(
      '%c🎯 Your actions are being monitored by digital forensics experts.',
      'color: #ffa726; font-size: 14px;'
    );

    // Easter Egg #2: Hidden message for developers
    console.log(
      '%c💡 Para desenvolvedores legítimos: Bem-vindos! Este site foi criado com React + TypeScript.',
      'color: #66bb6a; font-size: 12px;'
    );

    console.log(
      '%c🚀 For legitimate developers: Welcome! This site was built with React + TypeScript.',
      'color: #66bb6a; font-size: 12px;'
    );

    // Anti-debugging measures
    this.setupAntiDebugging();
    
    // Monitor console access
    this.monitorConsoleAccess();
    
    // Detect automation tools
    this.detectAutomationTools();
  }

  private setupAntiDebugging() {
    // Easter Egg #3: Detect DevTools
    let devtools = { open: false, orientation: null };
    
    setInterval(() => {
      if (window.outerHeight - window.innerHeight > 200 || 
          window.outerWidth - window.innerWidth > 200) {
        if (!devtools.open) {
          devtools.open = true;
          this.logSuspiciousActivity('DevTools opened', 'Developer tools detected');
          
          // Easter Egg message for curious developers
          console.log(
            '%c🎉 Olá, desenvolvedor curioso! 🎉\n' +
            '🔍 Você encontrou nosso sistema de monitoramento.\n' +
            '💼 Se você tem interesse em cibersegurança e forense digital,\n' +
            '📧 entre em contato conosco: zowtech@email.com\n' +
            '🚀 Estamos sempre procurando talentos!',
            'color: #e91e63; font-size: 14px; font-weight: bold; background: #f8f9fa; padding: 10px; border: 2px solid #e91e63; border-radius: 8px;'
          );
        }
      } else {
        devtools.open = false;
      }
    }, 500);
  }

  private monitorConsoleAccess() {
    // Simple console monitoring without recursion
    let consoleAccessed = false;
    
    Object.defineProperty(console, '_monitored', {
      get: () => {
        if (!consoleAccessed) {
          consoleAccessed = true;
          this.logSuspiciousActivity('Console access', 'Developer tools console accessed');
        }
        return true;
      }
    });
  }

  private detectAutomationTools() {
    // Detect headless browsers and automation tools
    const checks = [
      () => navigator.webdriver,
      () => window.phantom,
      () => window.callPhantom,
      () => window._phantom,
      () => window.Buffer,
      () => window.emit,
      () => window.spawn,
      () => window.chrome?.runtime?.onConnect,
      () => window.chrome?.app?.isInstalled,
      () => navigator.userAgent.includes('HeadlessChrome'),
      () => navigator.userAgent.includes('PhantomJS'),
      () => navigator.userAgent.includes('Selenium'),
    ];

    checks.forEach((check, index) => {
      if (check()) {
        this.logSuspiciousActivity(
          'Automation detected', 
          `Automation tool detected: check ${index + 1}`
        );
        
        // Easter Egg for automation attempts
        console.log(
          '%c🤖 AUTOMAÇÃO DETECTADA - AUTOMATION DETECTED 🤖\n' +
          '⚠️  Este sistema possui proteção contra bots e scrapers.\n' +
          '🔍 Todas as tentativas são registradas e analisadas.\n' +
          '💀 "In the world of cyber security, paranoia is just good sense."',
          'color: #f44336; font-size: 16px; font-weight: bold; background: #ffebee; padding: 15px; border: 3px solid #f44336;'
        );
      }
    });
  }

  private logSuspiciousActivity(action: string, details: string) {
    const activity = {
      timestamp: Date.now(),
      action,
      userAgent: navigator.userAgent,
      details,
    };

    this.suspiciousActivities.push(activity);

    // Keep only last 100 activities
    if (this.suspiciousActivities.length > 100) {
      this.suspiciousActivities = this.suspiciousActivities.slice(-100);
    }

    // In a real-world scenario, this would send data to your security monitoring system
    console.log('🔒 Security Event Logged:', activity);
  }

  // Easter Egg function - hidden message for curious developers
  public showEasterEgg() {
    console.log(
      '%c' +
      '    ╔══════════════════════════════════════════════════════════════╗\n' +
      '    ║                    🎯 ZOWT EASTER EGG 🎯                     ║\n' +
      '    ║                                                              ║\n' +
      '    ║  👋 Olá, desenvolvedor! Você encontrou nosso easter egg!     ║\n' +
      '    ║                                                              ║\n' +
      '    ║  🔍 Somos especialistas em:                                  ║\n' +
      '    ║     • Análise Forense Digital                                ║\n' +
      '    ║     • Investigação de Criptomoedas                          ║\n' +
      '    ║     • Perícia em Cibercrimes                                 ║\n' +
      '    ║     • Due Diligence Corporativa                              ║\n' +
      '    ║                                                              ║\n' +
      '    ║  💼 Interessado em cibersegurança?                           ║\n' +
      '    ║     📧 zowtech@email.com                                     ║\n' +
      '    ║     🌐 https://zowt.com.br                                   ║\n' +
      '    ║                                                              ║\n' +
      '    ║  🚀 "Code is poetry written in logic" - ZowT Team            ║\n' +
      '    ╚══════════════════════════════════════════════════════════════╝',
      'color: #00bcd4; font-family: monospace; font-size: 12px; line-height: 1.2;'
    );
  }

  // Method to check system integrity
  public checkIntegrity(): boolean {
    const checks = [
      () => typeof React !== 'undefined',
      () => typeof window !== 'undefined',
      () => document.title.includes('ZowT'),
    ];

    return checks.every(check => check());
  }
}

// Initialize security monitoring
export const security = SecurityMonitor.getInstance();

// Add global easter egg function
(window as any).zowt = {
  showEasterEgg: () => security.showEasterEgg(),
  version: '2.1.0',
  author: 'ZowT Digital Forensics Team',
  message: 'Protecting digital assets through advanced forensic analysis',
  // Easter Egg: Konami Code
  konami: () => {
    console.log('%c🎮 KONAMI CODE DETECTED! 🎮', 'color: #ff9800; font-size: 20px;');
    console.log('%c⬆⬆⬇⬇⬅➡⬅➡🅱🅰 - Classic!', 'color: #4caf50; font-size: 16px;');
    security.showEasterEgg();
  }
};

// Konami Code implementation (modern approach)
let konamiSequence: string[] = [];
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
  konamiSequence.push(e.code);
  
  if (konamiSequence.length > konamiCode.length) {
    konamiSequence = konamiSequence.slice(-konamiCode.length);
  }
  
  if (konamiSequence.length === konamiCode.length) {
    if (konamiSequence.every((code, index) => code === konamiCode[index])) {
      (window as any).zowt.konami();
      konamiSequence = [];
    }
  }
});

// Alternative simple easter egg with typed sequence
let typedSequence = '';
document.addEventListener('keydown', (e) => {
  if (e.key.length === 1) {
    typedSequence += e.key.toLowerCase();
    if (typedSequence.length > 10) {
      typedSequence = typedSequence.slice(-10);
    }
    
    // Simple easter egg: typing "zowt" + Enter
    if (typedSequence.includes('zowt') && e.key === 'Enter') {
      console.log('%c🎯 ZOWT EASTER EGG ATIVADO!', 'color: #00bcd4; font-size: 18px; font-weight: bold;');
      (window as any).zowt.showEasterEgg();
      typedSequence = '';
    }
  }
});
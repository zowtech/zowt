import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.cases': 'Casos',
    'nav.blog': 'Artigos',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.headline': 'Provas Digitais. Justiça Real.',
    'hero.subheadline': 'Especialista em crimes cibernéticos, fraudes e perícia digital.',
    'hero.cta': 'Solicitar Análise',
    'hero.secondary': 'Conhecer Serviços',
    
    // Introduction
    'intro.title': 'Perícia Digital com Precisão Técnica',
    'intro.description': 'Lucas Alberto é perito criminal cibernético, especializado em analisar provas digitais, investigar fraudes online e elaborar laudos técnicos aceitos judicialmente. Auxiliamos pessoas físicas, empresas e escritórios de advocacia a desvendar crimes digitais com precisão.',
    'intro.certified': 'Certificado em Análise Forense',
    
    // Services
    'services.title': 'Serviços Prestados',
    'services.subtitle': 'Soluções especializadas em investigação digital e perícia forense',
    'services.forensics.title': 'Perícia Forense Digital',
    'services.forensics.desc': 'Análise técnica de dispositivos e dados digitais para extração de evidências',
    'services.fraud.title': 'Investigação de Fraudes Online',
    'services.fraud.desc': 'Identificação e rastreamento de atividades fraudulentas em ambiente digital',
    'services.email.title': 'Análise de E-mails e Redes Sociais',
    'services.email.desc': 'Verificação de autenticidade e rastreamento de comunicações digitais',
    'services.reports.title': 'Laudos Técnicos para Processos Judiciais',
    'services.reports.desc': 'Relatórios periciais detalhados aceitos juridicamente',
    'services.tampering.title': 'Verificação de Manipulação',
    'services.tampering.desc': 'Análise de áudio, vídeo e documentos para detectar alterações',
    'services.compliance.title': 'Consultoria em LGPD e Compliance',
    'services.compliance.desc': 'Orientação sobre proteção de dados e conformidade digital',
    
    // About
    'about.title': 'Sobre o Perito',
    'about.description': 'Com formação em jornalismo e segurança digital, Lucas Alberto atua em investigações de crimes virtuais, coleta de provas técnicas e consultoria para advogados e empresas. É certificado em análise forense e LGPD, e une conhecimento técnico com clareza jurídica.',
    'about.education': 'Formação em Jornalismo e Segurança Digital',
    'about.cert': 'Certificado em Análise Forense Digital',
    'about.legal': 'Especialista em LGPD e Compliance',
    
    // Cases
    'cases.title': 'Casos Atendidos',
    'cases.subtitle': 'Atendimentos envolvendo fraudes financeiras, roubo de identidade, ataques hacker e falsificação de mensagens eletrônicas.',
    'cases.financial.title': 'Fraudes Financeiras',
    'cases.financial.desc': 'Investigação de transações suspeitas e identificação de padrões fraudulentos',
    'cases.identity.title': 'Roubo de Identidade',
    'cases.identity.desc': 'Rastreamento de uso indevido de dados pessoais e documentos',
    'cases.hacking.title': 'Ataques Hacker',
    'cases.hacking.desc': 'Análise de invasões e identificação de vulnerabilidades exploradas',
    
    // Blog
    'blog.title': 'Artigos e Dicas',
    'blog.subtitle': 'Conhecimento especializado em segurança digital e perícia forense',
    'blog.article1.title': 'Como identificar spoofing de e-mail',
    'blog.article1.excerpt': 'Aprenda técnicas para detectar e-mails falsificados e proteger sua organização',
    'blog.article2.title': 'Os golpes online mais comuns em 2025',
    'blog.article2.excerpt': 'Conheça as principais fraudes digitais e como se proteger',
    'blog.article3.title': 'O que é um laudo pericial digital?',
    'blog.article3.excerpt': 'Entenda a importância dos laudos técnicos em processos judiciais',
    'blog.readMore': 'Ler mais →',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Solicite uma consulta especializada ou análise pericial',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.form.namePlaceholder': 'Seu nome completo',
    'contact.form.emailPlaceholder': 'seu@email.com',
    'contact.form.messagePlaceholder': 'Descreva seu caso ou necessidade',
    'contact.info.title': 'Informações de Contato',
    'contact.whatsapp.title': 'WhatsApp Direto',
    'contact.whatsapp.desc': 'Para casos urgentes, entre em contato diretamente via WhatsApp',
    'contact.whatsapp.button': 'Conversar no WhatsApp',
    'contact.hours.title': 'Horário de Atendimento',
    'contact.hours.weekdays': 'Segunda - Sexta:',
    'contact.hours.saturday': 'Sábado:',
    'contact.hours.sunday': 'Domingo:',
    'contact.hours.closed': 'Fechado',
    
    // Footer
    'footer.description': 'Perito Criminal Cibernético especializado em análise forense digital e investigação de crimes virtuais.',
    'footer.services.title': 'Serviços',
    'footer.services.forensics': 'Perícia Forense Digital',
    'footer.services.fraud': 'Investigação de Fraudes',
    'footer.services.reports': 'Laudos Técnicos',
    'footer.services.compliance': 'Consultoria LGPD',
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Política de Privacidade',
    'footer.legal.terms': 'Termos de Uso',
    'footer.copyright': '© 2025 Lucas Alberto – Todos os direitos reservados.',
    
    // Messages
    'message.success': 'Mensagem enviada com sucesso!',
    'message.error': 'Erro ao enviar mensagem. Tente novamente.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.cases': 'Cases',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.headline': 'Digital Evidence. Real Justice.',
    'hero.subheadline': 'Expert in cybercrime, fraud investigation, and digital forensics.',
    'hero.cta': 'Request Investigation',
    'hero.secondary': 'Learn More',
    
    // Introduction
    'intro.title': 'Digital Forensics with Technical Precision',
    'intro.description': 'Lucas Alberto is a certified cyber forensic expert specialized in analyzing digital evidence, identifying fraud, and providing court-accepted technical reports. We help individuals, companies, and law firms uncover cybercrime with precision.',
    'intro.certified': 'Certified in Forensic Analysis',
    
    // Services
    'services.title': 'Services Offered',
    'services.subtitle': 'Specialized solutions in digital investigation and forensic analysis',
    'services.forensics.title': 'Digital Forensics',
    'services.forensics.desc': 'Technical analysis of devices and digital data for evidence extraction',
    'services.fraud.title': 'Online Fraud Investigation',
    'services.fraud.desc': 'Identification and tracking of fraudulent activities in digital environments',
    'services.email.title': 'Email and Social Media Analysis',
    'services.email.desc': 'Authenticity verification and tracking of digital communications',
    'services.reports.title': 'Expert Technical Reports',
    'services.reports.desc': 'Detailed forensic reports accepted in legal proceedings',
    'services.tampering.title': 'Audio/Video Tampering Detection',
    'services.tampering.desc': 'Analysis of audio, video and documents to detect alterations',
    'services.compliance.title': 'LGPD Compliance and Digital Risk Consulting',
    'services.compliance.desc': 'Guidance on data protection and digital compliance',
    
    // About
    'about.title': 'About the Expert',
    'about.description': 'With a background in journalism and digital security, Lucas Alberto assists in cybercrime investigations, technical evidence collection, and legal consulting. Certified in forensic analysis and LGPD compliance, he brings technical expertise and legal clarity together.',
    'about.education': 'Background in Journalism and Digital Security',
    'about.cert': 'Certified in Digital Forensic Analysis',
    'about.legal': 'LGPD and Compliance Specialist',
    
    // Cases
    'cases.title': 'Case Examples',
    'cases.subtitle': 'Cases involving financial fraud, identity theft, hacking incidents, and tampered electronic messages.',
    'cases.financial.title': 'Financial Fraud',
    'cases.financial.desc': 'Investigation of suspicious transactions and identification of fraudulent patterns',
    'cases.identity.title': 'Identity Theft',
    'cases.identity.desc': 'Tracking misuse of personal data and documents',
    'cases.hacking.title': 'Hacking Attacks',
    'cases.hacking.desc': 'Analysis of breaches and identification of exploited vulnerabilities',
    
    // Blog
    'blog.title': 'Blog & Insights',
    'blog.subtitle': 'Specialized knowledge in digital security and forensic analysis',
    'blog.article1.title': 'How to identify email spoofing',
    'blog.article1.excerpt': 'Learn techniques to detect forged emails and protect your organization',
    'blog.article2.title': 'Most common online scams in 2025',
    'blog.article2.excerpt': 'Know the main digital frauds and how to protect yourself',
    'blog.article3.title': 'What is a digital forensic report?',
    'blog.article3.excerpt': 'Understand the importance of technical reports in legal proceedings',
    'blog.readMore': 'Read more →',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Request a specialized consultation or forensic analysis',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.namePlaceholder': 'Your full name',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.messagePlaceholder': 'Describe your case or need',
    'contact.info.title': 'Contact Information',
    'contact.whatsapp.title': 'Direct WhatsApp',
    'contact.whatsapp.desc': 'For urgent cases, contact directly via WhatsApp',
    'contact.whatsapp.button': 'Chat on WhatsApp',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekdays': 'Monday - Friday:',
    'contact.hours.saturday': 'Saturday:',
    'contact.hours.sunday': 'Sunday:',
    'contact.hours.closed': 'Closed',
    
    // Footer
    'footer.description': 'Cyber Forensic Expert specialized in digital forensic analysis and cybercrime investigation.',
    'footer.services.title': 'Services',
    'footer.services.forensics': 'Digital Forensics',
    'footer.services.fraud': 'Fraud Investigation',
    'footer.services.reports': 'Technical Reports',
    'footer.services.compliance': 'LGPD Consulting',
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Use',
    'footer.copyright': '© 2025 Lucas Alberto – All rights reserved.',
    
    // Messages
    'message.success': 'Message sent successfully!',
    'message.error': 'Error sending message. Please try again.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

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
    'hero.headline': 'Investigação Digital Elite.',
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
    'services.diligence.title': 'Due Diligence Digital',
    'services.diligence.desc': 'Verificação completa de ativos digitais, reputação e integridade corporativa',
    'services.corporate.title': 'Investigação de Fraude Corporativa',
    'services.corporate.desc': 'Detecção de irregularidades internas, vazamentos e má conduta empresarial',
    'services.anticorruption.title': 'Análise Anti-Corrupção',
    'services.anticorruption.desc': 'Investigação de práticas corruptas e análise de compliance regulatório',
    'services.profiling.title': 'Cyber Profiling & OSINT',
    'services.profiling.desc': 'Análise comportamental digital e inteligência de fontes abertas para investigações',
    'services.blockchain.title': 'Blockchain Analytics',
    'services.blockchain.desc': 'Rastreamento de criptomoedas e análise de transações blockchain',
    'services.aml.title': 'AML/CFT Compliance',
    'services.aml.desc': 'Prevenção à lavagem de dinheiro e financiamento ao terrorismo',
    'services.sar.title': 'SAR & FATF Reporting',
    'services.sar.desc': 'Relatórios de atividades suspeitas e conformidade FATF',
    'services.network.title': 'Análise de Tráfego de Rede',
    'services.network.desc': 'Investigação forense de comunicações e protocolos de rede',
    
    // About
    'about.title': 'Sobre o Perito',
    'about.description': 'Perito forense especializado em blockchain, criptomoedas e investigações digitais. Ofereço serviços de detecção de fraudes cripto, rastreamento de ativos, análise de crimes cibernéticos e preservação de evidências digitais. Discreto, preciso e alinhado com padrões forenses globais.',
    'about.education': 'Bacharel em Engenharia da Computação',
    'about.forensic': 'Especialista em Ciências Forenses',
    'about.criminology': 'Formação em Criminologia',
    'about.cyber': 'Certificado em Cybersecurity',
    'about.defender': 'Cyber Defender Certificado',
    
    // Cases
    'cases.title': 'Casos Atendidos',
    'cases.subtitle': 'Portfolio de investigações realizadas em crimes digitais, fraudes corporativas e análises forenses especializadas.',
    'cases.financial.title': 'Fraude Bancária com Criptomoedas',
    'cases.financial.desc': 'Rastreamento de R$ 2.3M em Bitcoin através de múltiplas exchanges e wallets',
    'cases.identity.title': 'Espionagem Corporativa',
    'cases.identity.desc': 'Investigação de vazamento interno em multinacional com 50k funcionários',
    'cases.hacking.title': 'Ransomware em Hospital',
    'cases.hacking.desc': 'Análise forense e recuperação de sistemas críticos de saúde',
    'cases.deepfake.title': 'Deepfake em Processo Judicial',
    'cases.deepfake.desc': 'Perícia técnica que comprovou manipulação de evidências audiovisuais',
    'cases.crypto.title': 'Lavagem via DeFi',
    'cases.crypto.desc': 'Investigação de esquema de lavagem usando protocolos descentralizados',
    'cases.corruption.title': 'Corrupção em Licitação',
    'cases.corruption.desc': 'Due diligence que revelou rede de corrupção em processo licitatório',
    'cases.data.title': 'Vazamento de 1M+ Registros',
    'cases.data.desc': 'Investigação LGPD em breach que expôs dados de clientes bancários',
    'cases.social.title': 'Perfis Falsos Coordenados',
    'cases.social.desc': 'OSINT que mapeou rede de 500+ perfis fake em campanha política',
    'cases.extortion.title': 'Extorsão Digital',
    'cases.extortion.desc': 'Rastreamento de criminoso que chantageava executivos com dados roubados',
    'cases.insider.title': 'Insider Trading Digital',
    'cases.insider.desc': 'Análise de comunicações que comprovou uso de informação privilegiada',
    
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
    'hero.headline': 'Elite Digital Investigation.',
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
    'services.diligence.title': 'Digital Due Diligence',
    'services.diligence.desc': 'Complete verification of digital assets, reputation and corporate integrity',
    'services.corporate.title': 'Corporate Fraud Investigation',
    'services.corporate.desc': 'Detection of internal irregularities, data breaches and corporate misconduct',
    'services.anticorruption.title': 'Anti-Corruption Analysis',
    'services.anticorruption.desc': 'Investigation of corrupt practices and regulatory compliance analysis',
    'services.profiling.title': 'Cyber Profiling & OSINT',
    'services.profiling.desc': 'Digital behavioral analysis and open source intelligence for investigations',
    'services.blockchain.title': 'Blockchain Analytics',
    'services.blockchain.desc': 'Cryptocurrency tracking and blockchain transaction analysis',
    'services.aml.title': 'AML/CFT Compliance',
    'services.aml.desc': 'Anti-money laundering and counter-terrorism financing prevention',
    'services.sar.title': 'SAR & FATF Reporting',
    'services.sar.desc': 'Suspicious activity reports and FATF compliance documentation',
    'services.network.title': 'Network Traffic Analysis',
    'services.network.desc': 'Forensic investigation of communications and network protocols',
    
    // About
    'about.title': 'About the Expert',
    'about.description': 'Forensic expert specialized in blockchain, cryptocurrency, and digital investigations. I offer services in crypto fraud detection, asset tracing, cybercrime analysis, and digital evidence preservation. Discreet, precise, and aligned with global forensic standards.',
    'about.education': 'Computer Engineering BS',
    'about.forensic': 'Forensic Science Specialist',
    'about.criminology': 'Criminology Background',
    'about.cyber': 'Cybersecurity Certified',
    'about.defender': 'Cyber Defender Certified',
    
    // Cases
    'cases.title': 'Case Portfolio',
    'cases.subtitle': 'Digital crime investigations, corporate fraud analysis, and specialized forensic cases.',
    'cases.financial.title': 'Banking Fraud with Cryptocurrency',
    'cases.financial.desc': 'Tracked $2.3M in Bitcoin through multiple exchanges and wallets',
    'cases.identity.title': 'Corporate Espionage',
    'cases.identity.desc': 'Internal leak investigation at multinational with 50k employees',
    'cases.hacking.title': 'Hospital Ransomware',
    'cases.hacking.desc': 'Forensic analysis and recovery of critical healthcare systems',
    'cases.deepfake.title': 'Deepfake in Legal Proceedings',
    'cases.deepfake.desc': 'Technical expertise that proved audiovisual evidence tampering',
    'cases.crypto.title': 'DeFi Money Laundering',
    'cases.crypto.desc': 'Investigation of laundering scheme using decentralized protocols',
    'cases.corruption.title': 'Bidding Process Corruption',
    'cases.corruption.desc': 'Due diligence that revealed corruption network in public tender',
    'cases.data.title': '1M+ Records Data Breach',
    'cases.data.desc': 'LGPD investigation into breach exposing banking customer data',
    'cases.social.title': 'Coordinated Fake Profiles',
    'cases.social.desc': 'OSINT mapping of 500+ fake profiles in political campaign',
    'cases.extortion.title': 'Digital Extortion',
    'cases.extortion.desc': 'Tracking criminal blackmailing executives with stolen data',
    'cases.insider.title': 'Digital Insider Trading',
    'cases.insider.desc': 'Communication analysis proving use of privileged information',
    
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
    return (translations[language] as any)[key] || key;
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

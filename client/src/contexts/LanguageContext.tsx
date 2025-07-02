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
    'services.reports.title': 'Consultoria em Cibersegurança',
    'services.reports.desc': 'Análise de vulnerabilidades e implementação de proteções digitais',
    'services.tampering.title': 'Verificação de Manipulação',
    'services.tampering.desc': 'Análise de áudio, vídeo e documentos para detectar alterações',
    'services.compliance.title': 'Consultoria em LGPD e Compliance',
    'services.compliance.desc': 'Orientação sobre proteção de dados e conformidade digital',
    'services.diligence.title': 'Due Diligence Corporativa',
    'services.diligence.desc': 'Verificação completa de ativos digitais, reputação e integridade corporativa',
    'services.corporate.title': 'Investigação de Fraude Corporativa',
    'services.corporate.desc': 'Detecção de irregularidades internas, vazamentos e má conduta empresarial',
    'services.anticorruption.title': 'Análise Anti-Corrupção',
    'services.anticorruption.desc': 'Investigação de práticas corruptas e análise de compliance regulatório',
    'services.profiling.title': 'OSINT & SOCMINT',
    'services.profiling.desc': 'Inteligência de fontes abertas e análise de mídias sociais para investigações',
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
    'about.experience': '10+ ANOS DE EXPERIÊNCIA',
    'about.certified.forensic': 'Certificado em Análise Forense',
    'about.title.expert': 'CYBER FORENSIC EXPERT',
    'about.certifications': 'CERTIFICAÇÕES TÉCNICAS:',
    'about.blockchain.certified': 'Blockchain Analysis Certified',
    
    // Blog additional
    'blog.viewall': 'Ver todos',
    'blog.newsletter.title': 'Newsletter Técnica',
    'blog.newsletter.desc': 'Receba insights exclusivos sobre análise forense e investigação digital.',
    'blog.newsletter.learn': 'Saber mais',
    
    // Articles page
    'articles.title': 'Artigos Técnicos',
    'articles.subtitle': 'Insights especializados sobre investigação digital, análise forense e cybersecurity.',
    'articles.back': 'Voltar',
    'articles.consultation.title': 'Precisa de Consultoria Especializada?',
    'articles.consultation.desc': 'Entre em contato para discutir seu caso específico e obter análise técnica personalizada.',
    'articles.consultation.cta': 'Solicitar Consultoria',
    
    // Cases
    'cases.title': 'Casos Atendidos',
    'cases.subtitle': 'Portfolio de investigações realizadas em crimes digitais, fraudes corporativas e análises forenses especializadas.',
    'cases.financial.title': 'Esquema Ponzi com Criptomoedas',
    'cases.financial.desc': 'Investigação que desmascarou pirâmide financeira de R$ 180M usando stablecoins e DEXs para ocultar transações.',
    'cases.identity.title': 'Roubo de Propriedade Intelectual',
    'cases.identity.desc': 'Análise forense de dispositivos corporativos revelou exfiltração de 2.5TB de dados técnicos confidenciais.',
    'cases.hacking.title': 'APT em Infraestrutura Crítica',
    'cases.hacking.desc': 'Investigação de grupo de ameaça persistente avançada que infiltrou sistemas de energia por 18 meses.',
    'cases.deepfake.title': 'Manipulação de CEO em Fraude',
    'cases.deepfake.desc': 'Perícia que identificou deepfake de voz usado para autorizar transferência fraudulenta de US$ 35M.',
    'cases.crypto.title': 'Mixer de Bitcoin Ilícito',
    'cases.crypto.desc': 'Rastreamento através de CoinJoin e tumblers que recuperou US$ 12M em Bitcoin de cartel internacional.',
    'cases.corruption.title': 'Propina via Criptomoedas',
    'cases.corruption.desc': 'Análise blockchain revelou pagamentos em Monero entre executivos e políticos em esquema de licitação.',
    'cases.data.title': 'Ataque a Exchange Brasileira',
    'cases.data.desc': 'Investigação de hack que resultou no roubo de R$ 300M em criptomoedas e exposição de 800k usuários.',
    'cases.social.title': 'Operação de Desinformação',
    'cases.social.desc': 'SOCMINT identificou rede de 2.5k bots e 300 influenciadores coordenando narrativas políticas falsas.',
    'cases.extortion.title': 'Sextortion com IA Generativa',
    'cases.extortion.desc': 'Investigação de criminoso que usava deepfakes pornográficos para chantagear vítimas por criptomoedas.',
    'cases.insider.title': 'Vazamento de Dados Bancários',
    'cases.insider.desc': 'Análise forense provou que funcionário vendeu dados de 150k clientes para esquema de empréstimos fraudulentos.',
    
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
    'services.reports.title': 'Cybersecurity Consulting',
    'services.reports.desc': 'Vulnerability analysis and digital protection implementation',
    'services.tampering.title': 'Audio/Video Tampering Detection',
    'services.tampering.desc': 'Analysis of audio, video and documents to detect alterations',
    'services.compliance.title': 'LGPD Compliance and Digital Risk Consulting',
    'services.compliance.desc': 'Guidance on data protection and digital compliance',
    'services.diligence.title': 'Corporate Due Diligence',
    'services.diligence.desc': 'Complete verification of digital assets, reputation and corporate integrity',
    'services.corporate.title': 'Corporate Fraud Investigation',
    'services.corporate.desc': 'Detection of internal irregularities, data breaches and corporate misconduct',
    'services.anticorruption.title': 'Anti-Corruption Analysis',
    'services.anticorruption.desc': 'Investigation of corrupt practices and regulatory compliance analysis',
    'services.profiling.title': 'OSINT & SOCMINT',
    'services.profiling.desc': 'Open source intelligence and social media analysis for investigations',
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
    'about.experience': '10+ YEARS OF EXPERIENCE',
    'about.certified.forensic': 'Certified in Forensic Analysis',
    'about.title.expert': 'CYBER FORENSIC EXPERT',
    'about.certifications': 'TECHNICAL CERTIFICATIONS:',
    'about.blockchain.certified': 'Blockchain Analysis Certified',
    
    // Blog additional
    'blog.viewall': 'View all',
    'blog.newsletter.title': 'Technical Newsletter',
    'blog.newsletter.desc': 'Receive exclusive insights on forensic analysis and digital investigation.',
    'blog.newsletter.learn': 'Learn more',
    
    // Articles page
    'articles.title': 'Technical Articles',
    'articles.subtitle': 'Specialized insights on digital investigation, forensic analysis and cybersecurity.',
    'articles.back': 'Back',
    'articles.consultation.title': 'Need Specialized Consultation?',
    'articles.consultation.desc': 'Contact us to discuss your specific case and get personalized technical analysis.',
    'articles.consultation.cta': 'Request Consultation',
    
    // Cases
    'cases.title': 'Case Portfolio',
    'cases.subtitle': 'Digital crime investigations, corporate fraud analysis, and specialized forensic cases.',
    'cases.financial.title': 'Cryptocurrency Ponzi Scheme',
    'cases.financial.desc': 'Investigation that exposed $180M financial pyramid using stablecoins and DEXs to conceal transactions.',
    'cases.identity.title': 'Intellectual Property Theft',
    'cases.identity.desc': 'Corporate device forensics revealed exfiltration of 2.5TB of confidential technical data.',
    'cases.hacking.title': 'APT in Critical Infrastructure',
    'cases.hacking.desc': 'Investigation of advanced persistent threat group that infiltrated energy systems for 18 months.',
    'cases.deepfake.title': 'CEO Voice Manipulation Fraud',
    'cases.deepfake.desc': 'Analysis identified voice deepfake used to authorize fraudulent $35M transfer.',
    'cases.crypto.title': 'Illicit Bitcoin Mixing',
    'cases.crypto.desc': 'Tracking through CoinJoin and tumblers that recovered $12M in Bitcoin from international cartel.',
    'cases.corruption.title': 'Cryptocurrency Bribery',
    'cases.corruption.desc': 'Blockchain analysis revealed Monero payments between executives and politicians in bidding scheme.',
    'cases.data.title': 'Brazilian Exchange Attack',
    'cases.data.desc': 'Investigation of hack resulting in $300M cryptocurrency theft and exposure of 800k users.',
    'cases.social.title': 'Disinformation Campaign',
    'cases.social.desc': 'SOCMINT identified network of 2.5k bots and 300 influencers coordinating false political narratives.',
    'cases.extortion.title': 'AI-Generated Sextortion',
    'cases.extortion.desc': 'Investigation of criminal using pornographic deepfakes to blackmail victims for cryptocurrency.',
    'cases.insider.title': 'Banking Data Leak',
    'cases.insider.desc': 'Forensic analysis proved employee sold 150k customer data for fraudulent loan schemes.',
    
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

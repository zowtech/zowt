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
    'hero.headline': 'ZowT 01011010',
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
    'about.defender': 'ISO 27001 Lead Auditor',
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
    'cases.financial.title': 'Fraude com Criptomoedas',
    'cases.financial.desc': 'Investigação completa de lavagem de R$ 850k através de múltiplas carteiras Bitcoin e conversão para stablecoins, incluindo análise de blockchain e rastreamento de transações',
    'cases.identity.title': 'Roubo de Identidade',
    'cases.identity.desc': 'Análise forense digital revelou 15k CPFs comprometidos em vazamento de base governamental, com perícia técnica dos sistemas afetados e mapeamento dos criminosos',
    'cases.hacking.title': 'Phishing Corporativo',
    'cases.hacking.desc': 'Perícia técnica completa em campanha de spear phishing que comprometeu credenciais de 85 executivos através de e-mails falsificados e domínios maliciosos',
    'cases.deepfake.title': 'Deepfake Corporativo',
    'cases.deepfake.desc': 'Análise forense de chamada de vídeo deepfake onde criminosos imitaram diretor financeiro para solicitar transferência urgente de R$ 240k, investigação identificou origem através de análise de compressão e artefatos',
    'cases.crypto.title': 'Fraude com Cartões',
    'cases.crypto.desc': 'Investigação de organização criminosa especializada em clonagem de cartões, operando através de grupos do Telegram com mais de 500 vítimas identificadas',
    'cases.corruption.title': 'Investigação Anti-Corrupção',
    'cases.corruption.desc': 'Perícia forense digital comprovou esquema de propinas entre funcionário público e fornecedor através de análise de mensagens WhatsApp criptografadas, revelando pagamentos irregulares de R$ 1.6M',
    'cases.data.title': 'Vazamento de Dados',
    'cases.data.desc': 'Investigação técnica de breach de segurança que expôs 80k registros de clientes, incluindo análise de logs, vetores de ataque e avaliação de danos',
    'cases.social.title': 'Fraude em Marketplace',
    'cases.social.desc': 'Investigação de rede organizada que utilizava perfis falsos para aplicar golpes de produtos inexistentes, causando prejuízo de R$ 850k em múltiplas plataformas de vendas',
    'cases.extortion.title': 'Doxing e Extorsão',
    'cases.extortion.desc': 'Investigação em servidor Discord localizou grupo de extorsão, evitando pagamento de R$ 480k através de identificação dos criminosos via análise de metadados e recuperação das evidências',
    'cases.insider.title': 'Insider Trading',
    'cases.insider.desc': 'Perícia forense em dispositivos corporativos comprovou uso de informações privilegiadas para fraude financeira com movimentação irregular de R$ 320k',
    
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
    'footer.description': 'Empresa especializada em investigação digital, análise forense e consultoria em cibersegurança para organizações e profissionais jurídicos.',
    'footer.services.title': 'Serviços',
    'footer.services.forensics': 'Perícia Forense Digital',
    'footer.services.fraud': 'Investigação de Fraudes',
    'footer.services.reports': 'Laudos Técnicos',
    'footer.services.compliance': 'Consultoria LGPD',
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Política de Privacidade',
    'footer.legal.terms': 'Termos de Uso',
    'footer.copyright': '© 2025 ZowT – Todos os direitos reservados.',
    
    // Messages
    'message.success': 'Mensagem enviada com sucesso!',
    'message.error': 'Erro ao enviar mensagem. Tente novamente.',
    
    // Privacy Policy
    'privacy.title': 'Política de Privacidade',
    'privacy.lastUpdated': 'Última atualização: Janeiro de 2025',
    'privacy.section1.title': 'Informações Gerais',
    'privacy.section1.content': 'A ZowT está comprometida em proteger a privacidade dos nossos clientes. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.',
    'privacy.section2.title': 'Informações Coletadas',
    'privacy.section2.content': 'Coletamos as seguintes informações quando você utiliza nossos serviços:',
    'privacy.section2.item1': 'Nome e informações de contato fornecidas voluntariamente',
    'privacy.section2.item2': 'Dados técnicos necessários para análise forense',
    'privacy.section2.item3': 'Informações de navegação em nosso website',
    'privacy.section2.item4': 'Comunicações por email ou telefone',
    'privacy.section3.title': 'Uso das Informações',
    'privacy.section3.content': 'Utilizamos suas informações exclusivamente para prestar serviços de investigação digital, fornecer suporte técnico e cumprir obrigações legais. Não compartilhamos dados com terceiros sem seu consentimento explícito.',
    'privacy.section4.title': 'Segurança dos Dados',
    'privacy.section4.content': 'Implementamos medidas de segurança robustas incluindo criptografia, controle de acesso e protocolos de segurança para proteger suas informações contra acesso não autorizado.',
    'privacy.section5.title': 'Seus Direitos',
    'privacy.section5.content': 'Você tem direito de acessar, corrigir, excluir ou solicitar a portabilidade de seus dados pessoais, conforme previsto na LGPD (Lei Geral de Proteção de Dados).',
    'privacy.section6.title': 'Retenção de Dados',
    'privacy.section6.content': 'Mantemos seus dados pelo período necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.',
    'privacy.contact.title': 'Contato para Questões de Privacidade',
    'privacy.contact.content': 'Para questões relacionadas à privacidade ou exercício de seus direitos, entre em contato conosco:',
    
    // Terms of Use
    'terms.title': 'Termos de Uso',
    'terms.lastUpdated': 'Última atualização: Janeiro de 2025',
    'terms.section1.title': 'Aceitação dos Termos',
    'terms.section1.content': 'Ao utilizar os serviços da ZowT, você concorda com estes termos de uso. Recomendamos a leitura completa antes de prosseguir com a contratação de nossos serviços.',
    'terms.section2.title': 'Descrição dos Serviços',
    'terms.section2.content': 'A ZowT oferece serviços especializados em investigação digital, análise forense, consultoria em cibersegurança e elaboração de laudos técnicos.',
    'terms.section3.title': 'Responsabilidades do Cliente',
    'terms.section3.content': 'O cliente se compromete a:',
    'terms.section3.item1': 'Fornecer informações verdadeiras e precisas',
    'terms.section3.item2': 'Utilizar nossos serviços de forma legal e ética',
    'terms.section3.item3': 'Manter a confidencialidade das informações compartilhadas',
    'terms.section3.item4': 'Efetuar o pagamento conforme acordado',
    'terms.section4.title': 'Limitações de Responsabilidade',
    'terms.section4.content': 'Nossa responsabilidade limita-se à prestação dos serviços contratados. Não nos responsabilizamos por consequências decorrentes do uso inadequado de nossas análises.',
    'terms.section5.title': 'Confidencialidade',
    'terms.section5.content': 'Todas as informações compartilhadas durante a prestação de serviços são tratadas com absoluta confidencialidade e sigilo profissional.',
    'terms.section6.title': 'Propriedade Intelectual',
    'terms.section6.content': 'Os relatórios e análises produzidos são de propriedade do cliente, mas as metodologias e ferramentas utilizadas permanecem de propriedade da ZowT.',
    'terms.section7.title': 'Alterações nos Termos',
    'terms.section7.content': 'Reservamo-nos o direito de modificar estes termos a qualquer momento, com notificação prévia aos clientes.',
    'terms.section8.title': 'Lei Aplicável',
    'terms.section8.content': 'Estes termos são regidos pelas leis brasileiras e qualquer disputa será resolvida no foro da comarca onde a ZowT está estabelecida.',
    'terms.contact.title': 'Contato para Questões Legais',
    'terms.contact.content': 'Para questões relacionadas aos termos de uso, entre em contato conosco:',
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
    'hero.headline': 'ZowT 01011010',
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
    'about.defender': 'ISO 27001 Lead Auditor',
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
    'cases.financial.title': 'Cryptocurrency Fraud',
    'cases.financial.desc': 'Complete investigation of $215k money laundering through multiple Bitcoin wallets and stablecoin conversion, including blockchain analysis and transaction tracking',
    'cases.identity.title': 'Identity Theft',
    'cases.identity.desc': 'Digital forensic analysis revealed 15k compromised tax IDs in government database breach, with technical investigation of affected systems and criminal mapping',
    'cases.hacking.title': 'Corporate Phishing',
    'cases.hacking.desc': 'Complete technical investigation of spear phishing campaign that compromised credentials of 85 executives through falsified emails and malicious domains',
    'cases.deepfake.title': 'Corporate Deepfake',
    'cases.deepfake.desc': 'Forensic analysis of deepfake video call where criminals impersonated financial director to request urgent transfer of $60k, investigation identified origin through compression and artifact analysis',
    'cases.crypto.title': 'Credit Card Fraud',
    'cases.crypto.desc': 'Investigation of criminal organization specialized in card cloning, operating through Telegram groups with over 500 identified victims',
    'cases.corruption.title': 'Anti-Corruption Investigation',
    'cases.corruption.desc': 'Digital forensic investigation proved bribery scheme between public official and supplier through encrypted WhatsApp message analysis, revealing irregular payments of $400k',
    'cases.data.title': 'Data Breach',
    'cases.data.desc': 'Technical investigation of security breach that exposed 80k customer records, including log analysis, attack vectors and damage assessment',
    'cases.social.title': 'Marketplace Fraud',
    'cases.social.desc': 'Investigation of organized network using fake profiles to commit non-existent product scams, causing $215k in losses across multiple sales platforms',
    'cases.extortion.title': 'Doxing and Extortion',
    'cases.extortion.desc': 'Investigation in Discord server located extortion group, preventing $120k payment through criminal identification via metadata analysis and evidence recovery',
    'cases.insider.title': 'Insider Trading',
    'cases.insider.desc': 'Forensic investigation of corporate devices proved use of privileged information for financial fraud with irregular movement of $80k',
    
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
    'footer.description': 'Company specialized in digital investigation, forensic analysis and cybersecurity consulting for organizations and legal professionals.',
    'footer.services.title': 'Services',
    'footer.services.forensics': 'Digital Forensics',
    'footer.services.fraud': 'Fraud Investigation',
    'footer.services.reports': 'Technical Reports',
    'footer.services.compliance': 'LGPD Consulting',
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Use',
    'footer.copyright': '© 2025 ZowT – All rights reserved.',
    
    // Messages
    'message.success': 'Message sent successfully!',
    'message.error': 'Error sending message. Please try again.',
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: January 2025',
    'privacy.section1.title': 'General Information',
    'privacy.section1.content': 'ZowT is committed to protecting the privacy of our clients. This policy describes how we collect, use and protect your personal information.',
    'privacy.section2.title': 'Information Collected',
    'privacy.section2.content': 'We collect the following information when you use our services:',
    'privacy.section2.item1': 'Name and contact information provided voluntarily',
    'privacy.section2.item2': 'Technical data necessary for forensic analysis',
    'privacy.section2.item3': 'Browsing information on our website',
    'privacy.section2.item4': 'Communications via email or phone',
    'privacy.section3.title': 'Use of Information',
    'privacy.section3.content': 'We use your information exclusively to provide digital investigation services, provide technical support and comply with legal obligations. We do not share data with third parties without your explicit consent.',
    'privacy.section4.title': 'Data Security',
    'privacy.section4.content': 'We implement robust security measures including encryption, access control and security protocols to protect your information against unauthorized access.',
    'privacy.section5.title': 'Your Rights',
    'privacy.section5.content': 'You have the right to access, correct, delete or request portability of your personal data, as provided for in applicable data protection laws.',
    'privacy.section6.title': 'Data Retention',
    'privacy.section6.content': 'We maintain your data for the period necessary to fulfill the purposes described in this policy or as required by law.',
    'privacy.contact.title': 'Contact for Privacy Questions',
    'privacy.contact.content': 'For privacy-related questions or to exercise your rights, contact us:',
    
    // Terms of Use
    'terms.title': 'Terms of Use',
    'terms.lastUpdated': 'Last updated: January 2025',
    'terms.section1.title': 'Acceptance of Terms',
    'terms.section1.content': 'By using ZowT services, you agree to these terms of use. We recommend reading them completely before proceeding with contracting our services.',
    'terms.section2.title': 'Service Description',
    'terms.section2.content': 'ZowT offers specialized services in digital investigation, forensic analysis, cybersecurity consulting and technical report preparation.',
    'terms.section3.title': 'Client Responsibilities',
    'terms.section3.content': 'The client agrees to:',
    'terms.section3.item1': 'Provide true and accurate information',
    'terms.section3.item2': 'Use our services legally and ethically',
    'terms.section3.item3': 'Maintain confidentiality of shared information',
    'terms.section3.item4': 'Make payment as agreed',
    'terms.section4.title': 'Limitations of Liability',
    'terms.section4.content': 'Our responsibility is limited to providing the contracted services. We are not responsible for consequences arising from improper use of our analyses.',
    'terms.section5.title': 'Confidentiality',
    'terms.section5.content': 'All information shared during service provision is treated with absolute confidentiality and professional secrecy.',
    'terms.section6.title': 'Intellectual Property',
    'terms.section6.content': 'Reports and analyses produced are owned by the client, but the methodologies and tools used remain the property of ZowT.',
    'terms.section7.title': 'Changes to Terms',
    'terms.section7.content': 'We reserve the right to modify these terms at any time, with prior notice to clients.',
    'terms.section8.title': 'Applicable Law',
    'terms.section8.content': 'These terms are governed by Brazilian laws and any dispute will be resolved in the jurisdiction where ZowT is established.',
    'terms.contact.title': 'Contact for Legal Questions',
    'terms.contact.content': 'For questions related to the terms of use, contact us:',
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

import { Search, Shield, Mail, FileText, Video, ClipboardCheck, Fingerprint, Database, Eye, Wifi, Terminal, ScanLine, Building, ShieldCheck, AlertTriangle, Users, Bitcoin, DollarSign, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ServicesSection() {
  const { t } = useLanguage();

  const getServiceTopics = (serviceKey: string) => {
    const topics: { [key: string]: string[] } = {
      'services.forensics.title': [
        'Análise de dispositivos móveis e computadores',
        'Recuperação de dados deletados',
        'Análise de logs e metadados',
        'Extração de evidências digitais',
        'Cadeia de custódia digital'
      ],
      'services.fraud.title': [
        'Investigação de fraudes financeiras online',
        'Análise de transações suspeitas',
        'Rastreamento de contas fraudulentas',
        'Identificação de padrões criminosos',
        'Análise de engenharia social'
      ],
      'services.email.title': [
        'Análise forense de e-mails',
        'Verificação de autenticidade de mensagens',
        'Rastreamento de comunicações',
        'Análise de redes sociais',
        'Investigação de perfis falsos'
      ],
      'services.reports.title': [
        'Laudos periciais judiciais',
        'Relatórios técnicos especializados',
        'Documentação de evidências',
        'Pareceres técnicos',
        'Assistência técnica processual'
      ],
      'services.tampering.title': [
        'Detecção de deepfakes e manipulações',
        'Análise de integridade de arquivos',
        'Verificação de autenticidade audiovisual',
        'Análise de metadados de mídia',
        'Perícia em documentos digitais'
      ],
      'services.compliance.title': [
        'Auditoria de conformidade LGPD',
        'Implementação de políticas de privacidade',
        'Mapeamento de dados pessoais',
        'Análise de riscos de vazamento',
        'Treinamento em proteção de dados'
      ],
      'services.diligence.title': [
        'Análise patrimonial e background check executivo',
        'Investigação de reputação digital e PEPs',
        'Auditoria de ativos offshore e estruturas complexas',
        'Verificação de litígios e histórico regulatório'
      ],
      'services.corporate.title': [
        'Investigação de vazamentos internos',
        'Análise de má conduta empresarial',
        'Detecção de espionagem corporativa',
        'Auditoria de segurança interna'
      ],
      'services.anticorruption.title': [
        'Investigação de práticas corruptas',
        'Análise de compliance anti-corrupção',
        'Auditoria de processos éticos',
        'Detecção de irregularidades contratuais'
      ],
      'services.profiling.title': [
        'OSINT técnico e automação especializada',
        'Operações SOC e threat hunting',
        'Análise de mídias sociais corporativas',
        'Investigação em dark web e marketplaces'
      ],
      'services.blockchain.title': [
        'Rastreamento de criptomoedas',
        'Análise de transações blockchain',
        'Investigação de mixers e tumblers',
        'Identificação de carteiras suspeitas',
        'Análise de smart contracts'
      ],
      'services.aml.title': [
        'Implementação de programas AML/CFT corporativos',
        'Compliance internacional (BSA, EU AMLD, UK MLR)',
        'Due diligence aprimorada e KYC automatizado',
        'Auditoria de sistemas de monitoramento transacional'
      ],
      'services.sar.title': [
        'Elaboração de SAR conforme padrões FATF',
        'Análise de tipologias de lavagem e financiamento',
        'Estruturação de RIF para COAF/FIU',
        'Documentação para unidades de inteligência financeira'
      ],
      'services.network.title': [
        'Deep Packet Inspection (DPI) e análise de tráfego',
        'Análise forense de protocolos (IPv4/IPv6, DNS, TLS)',
        'Detecção de túneis criptografados e comunicações ocultas',
        'Investigação de botnets e análise de IOCs de rede'
      ]
    };
    return topics[serviceKey] || [];
  };

  const services = [
    {
      icon: Fingerprint,
      titleKey: 'services.forensics.title',
      descKey: 'services.forensics.desc',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      titleKey: 'services.fraud.title',
      descKey: 'services.fraud.desc',
      color: 'text-red-400'
    },
    {
      icon: Eye,
      titleKey: 'services.email.title',
      descKey: 'services.email.desc',
      color: 'text-green-400'
    },
    {
      icon: Terminal,
      titleKey: 'services.reports.title',
      descKey: 'services.reports.desc',
      color: 'text-purple-400'
    },
    {
      icon: ScanLine,
      titleKey: 'services.tampering.title',
      descKey: 'services.tampering.desc',
      color: 'text-yellow-400'
    },
    {
      icon: Database,
      titleKey: 'services.compliance.title',
      descKey: 'services.compliance.desc',
      color: 'text-cyan-400'
    },
    {
      icon: Search,
      titleKey: 'services.diligence.title',
      descKey: 'services.diligence.desc',
      color: 'text-orange-400'
    },
    {
      icon: Building,
      titleKey: 'services.corporate.title',
      descKey: 'services.corporate.desc',
      color: 'text-indigo-400'
    },
    {
      icon: ShieldCheck,
      titleKey: 'services.anticorruption.title',
      descKey: 'services.anticorruption.desc',
      color: 'text-emerald-400'
    },
    {
      icon: Users,
      titleKey: 'services.profiling.title',
      descKey: 'services.profiling.desc',
      color: 'text-pink-400'
    },
    {
      icon: Bitcoin,
      titleKey: 'services.blockchain.title',
      descKey: 'services.blockchain.desc',
      color: 'text-amber-400'
    },
    {
      icon: DollarSign,
      titleKey: 'services.aml.title',
      descKey: 'services.aml.desc',
      color: 'text-lime-400'
    },
    {
      icon: FileCheck,
      titleKey: 'services.sar.title',
      descKey: 'services.sar.desc',
      color: 'text-violet-400'
    },
    {
      icon: Wifi,
      titleKey: 'services.network.title',
      descKey: 'services.network.desc',
      color: 'text-teal-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bright-blue">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const serviceTopics = getServiceTopics(service.titleKey);
            return (
              <div 
                key={index}
                className="relative group card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-bright-blue/50 transition-all duration-300 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="relative flex-shrink-0">
                        <div className={`absolute inset-0 ${service.color.replace('text-', 'bg-')}/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-150`}></div>
                        <div className={`relative ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-10 w-10" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-bright-blue transition-colors duration-300">
                          {t(service.titleKey)}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {t(service.descKey)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Service Topics */}
                    <div className="flex-1 space-y-3">
                      <h4 className="text-bright-blue text-xs font-mono uppercase tracking-wider">Capacidades Técnicas:</h4>
                      <div className="space-y-2">
                        {serviceTopics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-start text-xs text-gray-400">
                            <div className="h-1 w-1 bg-bright-blue rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                      <div className="h-px bg-gradient-to-r from-bright-blue/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
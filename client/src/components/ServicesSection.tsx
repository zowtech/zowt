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
        'Background check digital completo',
        'Verificação de reputação online',
        'Análise de ativos digitais',
        'Investigação de histórico corporativo',
        'Verificação de sanções e PEPs'
      ],
      'services.corporate.title': [
        'Investigação de vazamentos internos',
        'Análise de má conduta empresarial',
        'Detecção de espionagem corporativa',
        'Auditoria de segurança interna',
        'Investigação de conflitos de interesse'
      ],
      'services.anticorruption.title': [
        'Investigação de práticas corruptas',
        'Análise de compliance anti-corrupção',
        'Auditoria de processos éticos',
        'Detecção de irregularidades contratuais',
        'Análise de conflitos de interesse'
      ],
      'services.profiling.title': [
        'Análise comportamental digital',
        'Investigação OSINT avançada',
        'Criação de perfis criminais',
        'Análise de redes de relacionamento',
        'Investigação em dark web'
      ],
      'services.blockchain.title': [
        'Rastreamento de criptomoedas',
        'Análise de transações blockchain',
        'Investigação de mixers e tumblers',
        'Identificação de carteiras suspeitas',
        'Análise de smart contracts'
      ],
      'services.aml.title': [
        'Análise de operações suspeitas',
        'Monitoramento de transações',
        'Identificação de lavagem de dinheiro',
        'Compliance bancário e financeiro',
        'Análise de risco de clientes'
      ],
      'services.sar.title': [
        'Elaboração de RIF (Relatórios de Inteligência Financeira)',
        'Comunicações ao COAF',
        'Análise de conformidade FATF',
        'Relatórios de atividades suspeitas',
        'Documentação regulatória especializada'
      ],
      'services.network.title': [
        'Análise de protocolos de rede TCP/IP',
        'Captura e exame de pacotes de dados',
        'Investigação de comunicações clandestinas',
        'Análise forense de logs de firewall',
        'Mapeamento de infraestrutura de rede'
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

        <div className="grid lg:grid-cols-2 gap-8">
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
                <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-bright-blue/50 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 ${service.color.replace('text-', 'bg-')}/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-150`}></div>
                      <div className={`relative ${service.color} text-4xl group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-12 w-12" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-bright-blue transition-colors duration-300">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        {t(service.descKey)}
                      </p>
                      
                      {/* Service Topics */}
                      <div className="space-y-2">
                        <h4 className="text-bright-blue text-sm font-mono mb-3">CAPACIDADES TÉCNICAS:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {serviceTopics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center text-xs text-gray-400">
                              <div className="h-1 w-1 bg-bright-blue rounded-full mr-3 animate-pulse"></div>
                              <span className="font-mono">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 text-sm">
                        <div className="h-px bg-gradient-to-r from-bright-blue/50 to-transparent"></div>
                      </div>
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
import { CreditCard, UserX, Bug, Video, Bitcoin, Building, Database, Users, AlertTriangle, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function CasesSection() {
  const { t } = useLanguage();

  const cases = [
    {
      icon: Bitcoin,
      titleKey: 'cases.financial.title',
      descKey: 'cases.financial.desc',
      color: 'text-amber-400',
      status: 'RESOLVIDO'
    },
    {
      icon: Building,
      titleKey: 'cases.identity.title',
      descKey: 'cases.identity.desc',
      color: 'text-red-400',
      status: 'CLASSIFICADO'
    },
    {
      icon: Bug,
      titleKey: 'cases.hacking.title',
      descKey: 'cases.hacking.desc',
      color: 'text-purple-400',
      status: 'CRÍTICO'
    },
    {
      icon: Video,
      titleKey: 'cases.deepfake.title',
      descKey: 'cases.deepfake.desc',
      color: 'text-pink-400',
      status: 'PERÍCIA'
    },
    {
      icon: CreditCard,
      titleKey: 'cases.crypto.title',
      descKey: 'cases.crypto.desc',
      color: 'text-blue-400',
      status: 'RASTREADO'
    },
    {
      icon: AlertTriangle,
      titleKey: 'cases.corruption.title',
      descKey: 'cases.corruption.desc',
      color: 'text-orange-400',
      status: 'EXPOSTO'
    },
    {
      icon: Database,
      titleKey: 'cases.data.title',
      descKey: 'cases.data.desc',
      color: 'text-cyan-400',
      status: 'AUDITADO'
    },
    {
      icon: Users,
      titleKey: 'cases.social.title',
      descKey: 'cases.social.desc',
      color: 'text-green-400',
      status: 'MAPEADO'
    },
    {
      icon: UserX,
      titleKey: 'cases.extortion.title',
      descKey: 'cases.extortion.desc',
      color: 'text-red-500',
      status: 'NEUTRALIZADO'
    },
    {
      icon: TrendingUp,
      titleKey: 'cases.insider.title',
      descKey: 'cases.insider.desc',
      color: 'text-violet-400',
      status: 'COMPROVADO'
    }
  ];

  return (
    <section id="cases" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bright-blue">
            {t('cases.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <div 
                key={index}
                className="relative group card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative glass p-6 rounded-xl border border-slate-700/50 hover:border-bright-blue/50 transition-all duration-300">
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-2 py-1 bg-slate-800/90 rounded text-xs font-mono text-bright-blue border border-bright-blue/30">
                      {caseItem.status}
                    </div>
                  </div>
                  
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 ${caseItem.color.replace('text-', 'bg-')}/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-150`}></div>
                    <div className={`relative ${caseItem.color} text-3xl group-hover:scale-110 transition-transform duration-300 inline-block`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-bright-blue transition-colors duration-300">
                    {t(caseItem.titleKey)}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {t(caseItem.descKey)}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="flex items-center text-xs text-bright-blue/70">
                    <div className="h-1 w-1 bg-bright-blue rounded-full mr-2 animate-pulse"></div>
                    <span className="font-mono">CASO #{String(index + 1).padStart(3, '0')}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Statistics Summary */}
        <div className="mt-16 glass p-8 rounded-xl border border-bright-blue/30">
          <div className="flex items-center justify-center mb-6">
            <div className="h-2 w-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <h3 className="text-xl font-semibold text-bright-blue font-mono">RESUMO OPERACIONAL</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">80+</div>
              <div className="text-gray-300 text-sm font-mono">CASOS RESOLVIDOS</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">R$ 20M+</div>
              <div className="text-gray-300 text-sm font-mono">VALORES RASTREADOS</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm font-mono">TAXA DE SUCESSO</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm font-mono">SUPORTE TÉCNICO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
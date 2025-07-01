import { CreditCard, UserX, Bug } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function CasesSection() {
  const { t } = useLanguage();

  const cases = [
    {
      icon: CreditCard,
      titleKey: 'cases.financial.title',
      descKey: 'cases.financial.desc'
    },
    {
      icon: UserX,
      titleKey: 'cases.identity.title',
      descKey: 'cases.identity.desc'
    },
    {
      icon: Bug,
      titleKey: 'cases.hacking.title',
      descKey: 'cases.hacking.desc'
    }
  ];

  return (
    <section id="cases" className="py-20 bg-dark-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bright-blue">
            {t('cases.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <div 
                key={index}
                className="relative group card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative glass p-8 rounded-2xl border border-slate-700/50 hover:border-bright-blue/50 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-bright-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-150"></div>
                    <div className="relative text-bright-blue text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">
                      <IconComponent className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-bright-blue transition-colors duration-300">
                    {t(caseItem.titleKey)}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t(caseItem.descKey)}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-bright-blue to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

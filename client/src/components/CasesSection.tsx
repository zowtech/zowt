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
                className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              >
                <div className="text-bright-blue text-3xl mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {t(caseItem.titleKey)}
                </h3>
                <p className="text-gray-300">
                  {t(caseItem.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

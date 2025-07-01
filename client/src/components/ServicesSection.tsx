import { Search, Shield, Mail, FileText, Video, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Search,
      titleKey: 'services.forensics.title',
      descKey: 'services.forensics.desc'
    },
    {
      icon: Shield,
      titleKey: 'services.fraud.title',
      descKey: 'services.fraud.desc'
    },
    {
      icon: Mail,
      titleKey: 'services.email.title',
      descKey: 'services.email.desc'
    },
    {
      icon: FileText,
      titleKey: 'services.reports.title',
      descKey: 'services.reports.desc'
    },
    {
      icon: Video,
      titleKey: 'services.tampering.title',
      descKey: 'services.tampering.desc'
    },
    {
      icon: ClipboardCheck,
      titleKey: 'services.compliance.title',
      descKey: 'services.compliance.desc'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-bright-blue transition duration-300 group"
              >
                <div className="text-bright-blue text-4xl mb-4 group-hover:scale-110 transition duration-300">
                  <IconComponent className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-300">
                  {t(service.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

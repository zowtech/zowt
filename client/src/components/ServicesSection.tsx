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
                className="relative group card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-bright-blue/50 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-bright-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-150"></div>
                    <div className="relative text-bright-blue text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-12 w-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-bright-blue transition-colors duration-300">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-bright-blue to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

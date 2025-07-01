import { Search, Shield, Mail, FileText, Video, ClipboardCheck, Fingerprint, Database, Eye, Wifi, Terminal, ScanLine, Building, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ServicesSection() {
  const { t } = useLanguage();

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
                    <div className={`absolute inset-0 ${service.color.replace('text-', 'bg-')}/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-150`}></div>
                    <div className={`relative ${service.color} text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-12 w-12" />
                    </div>
                    {/* Scanning line effect */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bright-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

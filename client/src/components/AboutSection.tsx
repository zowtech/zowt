import { GraduationCap, Award, Scale, Shield, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  const credentials = [
    {
      icon: GraduationCap,
      key: 'about.education',
      color: 'text-blue-400'
    },
    {
      icon: Award,
      key: 'about.forensic',
      color: 'text-green-400'
    },
    {
      icon: Scale,
      key: 'about.criminology',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      key: 'about.cyber',
      color: 'text-orange-400'
    },
    {
      icon: Users,
      key: 'about.defender',
      color: 'text-red-400'
    }
  ];

  return (
    <section id="about" className="py-24 gradient-section relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M0 40h80v40H0V40zm20 0v20h20V40H20zm20 0v20h20V40H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bright-blue">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            
            {/* Credenciais */}
            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => {
                const IconComponent = credential.icon;
                return (
                  <div key={index} className="flex items-center group">
                    <div className="relative">
                      <div className={`absolute inset-0 ${credential.color.replace('text-', 'bg-')}/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <IconComponent className={`relative ${credential.color} h-6 w-6 mr-4 group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{t(credential.key)}</span>
                  </div>
                );
              })}
            </div>
              
            {/* Painel de Especialização */}
            <div className="glass p-6 rounded-xl border border-bright-blue/30">
              <div className="flex items-center mb-4">
                <div className="h-2 w-2 bg-bright-blue rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-lg font-semibold text-bright-blue font-mono">ESPECIALIZAÇÃO TÉCNICA</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-sm text-gray-300">
                  <div className="flex items-center mb-2">
                    <div className="h-1 w-1 bg-green-400 rounded-full mr-2"></div>
                    <span className="font-mono">BLOCKCHAIN ANALYSIS</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="h-1 w-1 bg-blue-400 rounded-full mr-2"></div>
                    <span className="font-mono">CRYPTO INVESTIGATION</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="h-1 w-1 bg-purple-400 rounded-full mr-2"></div>
                    <span className="font-mono">DIGITAL FORENSICS</span>
                  </div>
                </div>
                <div className="text-sm text-gray-300">
                  <div className="flex items-center mb-2">
                    <div className="h-1 w-1 bg-orange-400 rounded-full mr-2"></div>
                    <span className="font-mono">CYBERCRIME ANALYSIS</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="h-1 w-1 bg-red-400 rounded-full mr-2"></div>
                    <span className="font-mono">EVIDENCE PRESERVATION</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="h-1 w-1 bg-cyan-400 rounded-full mr-2"></div>
                    <span className="font-mono">COMPLIANCE AUDIT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Foto do Perito */}
          <div className="relative">
            <div className="relative glass rounded-2xl overflow-hidden border border-bright-blue/30">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-bright-blue/20 to-purple-500/20 flex items-center justify-center border-2 border-bright-blue/30">
                    <Users className="h-16 w-16 text-bright-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Lucas Alberto</h3>
                  <p className="text-bright-blue font-mono text-sm">CYBER FORENSIC EXPERT</p>
                  <div className="mt-4 text-xs text-gray-400 font-mono">
                    <div className="mb-1">● BLOCKCHAIN SPECIALIST</div>
                    <div className="mb-1">● CRYPTOCURRENCY INVESTIGATOR</div>
                    <div>● DIGITAL EVIDENCE ANALYST</div>
                  </div>
                </div>
              </div>
              
              {/* Badge de Classificação */}
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 bg-green-500/90 text-white text-xs font-mono rounded-full border border-green-400">
                  CERTIFIED
                </div>
              </div>
              
              {/* Status Operacional */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass p-3 rounded-lg border border-bright-blue/30">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center text-green-400">
                      <div className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span>OPERACIONAL</span>
                    </div>
                    <div className="text-bright-blue">24/7</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Efeitos de Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-bright-blue/10 to-purple-500/10 rounded-3xl blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
          
          {/* Perfil do Perito */}
          <div className="relative">
            <div className="relative glass rounded-2xl overflow-hidden border border-bright-blue/30 p-6">
              
              {/* Header do Perfil */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-bright-blue/20 to-purple-500/20 flex items-center justify-center border-2 border-bright-blue/30">
                  <Users className="h-12 w-12 text-bright-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Lucas Alberto</h3>
                <p className="text-bright-blue font-mono text-xs mb-1">FOUNDER & CEO • ZOWT</p>
                <p className="text-bright-blue font-mono text-sm">{t('about.title.expert')}</p>
                <div className="mt-2 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-mono rounded-full border border-green-400/30">
                  {t('about.experience')}
                </div>
              </div>
              
              {/* Certificações Adicionais */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-mono text-bright-blue mb-3">{t('about.certifications')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="h-1 w-1 bg-green-400 rounded-full mr-3"></div>
                    <span>{t('about.certified.forensic')}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="h-1 w-1 bg-blue-400 rounded-full mr-3"></div>
                    <span>{t('about.blockchain.certified')}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="h-1 w-1 bg-purple-400 rounded-full mr-3"></div>
                    <span>Digital Evidence Specialist</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="h-1 w-1 bg-orange-400 rounded-full mr-3"></div>
                    <span>AML/CFT Compliance Expert</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="h-1 w-1 bg-red-400 rounded-full mr-3"></div>
                    <span>OSINT Intelligence Analyst</span>
                  </div>
                </div>
              </div>
              
              {/* Resumo Operacional */}
              <div className="glass p-4 rounded-xl border border-bright-blue/20 mb-6">
                <h4 className="text-sm font-mono text-bright-blue mb-3">RESUMO OPERACIONAL:</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">80+</div>
                    <div className="text-gray-400 font-mono">CASOS RESOLVIDOS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">R$ 20M+</div>
                    <div className="text-gray-400 font-mono">VALORES RASTREADOS</div>
                  </div>
                </div>
              </div>
              
              {/* Especializações Principais */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono text-bright-blue mb-3">ESPECIALIZAÇÕES:</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="h-1 w-1 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Investigação de Criptomoedas</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="h-1 w-1 bg-yellow-400 rounded-full mr-3"></div>
                    <span>Análise de Fraudes Digitais</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="h-1 w-1 bg-pink-400 rounded-full mr-3"></div>
                    <span>Perícias Judiciais</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="h-1 w-1 bg-indigo-400 rounded-full mr-3"></div>
                    <span>Due Diligence Digital</span>
                  </div>
                </div>
              </div>
              
              {/* Status */}
              <div className="mt-6 glass p-3 rounded-lg border border-bright-blue/30">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center text-green-400">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span>OPERACIONAL</span>
                  </div>
                  <div className="text-bright-blue">24/7</div>
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
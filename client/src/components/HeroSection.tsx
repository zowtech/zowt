import { Button } from '@/components/ui/button';
import { Shield, Search, Lock, Eye, Fingerprint, Database, Wifi, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Forensic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-bright-blue/20 animate-pulse-slow">
          <Shield className="h-16 w-16" />
        </div>
        <div className="absolute top-32 right-16 text-bright-blue/20 animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <Fingerprint className="h-12 w-12" />
        </div>
        <div className="absolute bottom-32 left-20 text-bright-blue/20 animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <Database className="h-14 w-14" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-bright-blue/15 animate-pulse-slow" style={{ animationDelay: '3s' }}>
          <Eye className="h-10 w-10" />
        </div>
        <div className="absolute bottom-1/4 right-10 text-bright-blue/15 animate-pulse-slow" style={{ animationDelay: '4s' }}>
          <Wifi className="h-8 w-8" />
        </div>
        <div className="absolute top-1/2 left-1/3 text-bright-blue/15 animate-pulse-slow" style={{ animationDelay: '5s' }}>
          <Activity className="h-12 w-12" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center glass rounded-full px-6 py-3 mb-8 animate-fadeInUp border border-bright-blue/30">
          <div className="flex items-center mr-3">
            <div className="h-2 w-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs text-red-400 font-mono">CLASSIFIED</span>
          </div>
          <div className="h-4 w-px bg-slate-600 mx-2"></div>
          <Fingerprint className="h-4 w-4 text-bright-blue mr-2" />
          <span className="text-sm text-gray-300 font-medium">Perícia Forense Digital | Nível Elite</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {t('hero.headline')}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          {t('hero.subheadline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="group bg-bright-blue hover:bg-blue-600 text-white px-10 py-6 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
          >
            <span className="relative z-10">{t('hero.cta')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-bright-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button 
            onClick={() => scrollToSection('services')}
            variant="outline"
            size="lg"
            className="glass border-2 border-bright-blue/50 text-white hover:bg-bright-blue/20 hover:border-bright-blue px-10 py-6 text-lg rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
          >
            {t('hero.secondary')}
          </Button>
        </div>

        {/* Forensic Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="text-center glass p-6 rounded-xl border border-bright-blue/20">
            <div className="flex items-center justify-center mb-2">
              <Database className="h-6 w-6 text-bright-blue mr-2" />
              <div className="text-3xl md:text-4xl font-bold text-bright-blue font-mono">500+</div>
            </div>
            <div className="text-gray-300 text-sm font-medium">EVIDÊNCIAS ANALISADAS</div>
            <div className="text-xs text-bright-blue/60 font-mono mt-1">CASE STATUS: RESOLVED</div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-bright-blue/20">
            <div className="flex items-center justify-center mb-2">
              <Shield className="h-6 w-6 text-green-400 mr-2" />
              <div className="text-3xl md:text-4xl font-bold text-green-400 font-mono">98%</div>
            </div>
            <div className="text-gray-300 text-sm font-medium">TAXA DE SUCESSO</div>
            <div className="text-xs text-green-400/60 font-mono mt-1">MISSION CRITICAL</div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-bright-blue/20">
            <div className="flex items-center justify-center mb-2">
              <Activity className="h-6 w-6 text-yellow-400 mr-2" />
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 font-mono">24h</div>
            </div>
            <div className="text-gray-300 text-sm font-medium">RESPOSTA RÁPIDA</div>
            <div className="text-xs text-yellow-400/60 font-mono mt-1">PRIORITY ALPHA</div>
          </div>
        </div>
      </div>
    </section>
  );
}

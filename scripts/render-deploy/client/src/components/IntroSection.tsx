import { Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function IntroSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 gradient-section relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z' fill='%23ffffff'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fadeInUp">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-bright-blue/20 to-blue-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/assets/professional-team.jpg" 
                alt="Digital forensics investigation setup" 
                className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-slideInRight">
            <div className="inline-flex items-center glass rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-300">Disponível para consulta</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              <span className="text-bright-blue">{t('intro.title').split(' ')[0]} {t('intro.title').split(' ')[1]}</span>
              <br />
              <span className="text-shadow">{t('intro.title').split(' ').slice(2).join(' ')}</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('intro.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-bright-blue/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Shield className="relative text-bright-blue h-8 w-8 mr-4 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-gray-300 text-lg">{t('intro.certified')}</span>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bright-blue">10+</div>
                    <div className="text-sm text-gray-400">Anos de experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bright-blue">100%</div>
                    <div className="text-sm text-gray-400">Confidencial</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

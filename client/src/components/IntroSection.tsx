import { Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function IntroSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Digital forensics investigation setup" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bright-blue">
              {t('intro.title')}
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {t('intro.description')}
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Shield className="text-bright-blue h-8 w-8 mr-3" />
                <span className="text-gray-300">{t('intro.certified')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

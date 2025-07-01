import { GraduationCap, Award, Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

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
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <GraduationCap className="text-bright-blue h-6 w-6 mr-4" />
                <span className="text-gray-300">{t('about.education')}</span>
              </div>
              <div className="flex items-center">
                <Award className="text-bright-blue h-6 w-6 mr-4" />
                <span className="text-gray-300">{t('about.cert')}</span>
              </div>
              <div className="flex items-center">
                <Scale className="text-bright-blue h-6 w-6 mr-4" />
                <span className="text-gray-300">{t('about.legal')}</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional cybersecurity expert" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-hero">
      <div className="absolute inset-0 bg-black/50"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {t('hero.headline')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {t('hero.subheadline')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-bright-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            {t('hero.cta')}
          </Button>
          <Button 
            onClick={() => scrollToSection('services')}
            variant="outline"
            size="lg"
            className="border-2 border-bright-blue text-bright-blue hover:bg-bright-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition duration-300"
          >
            {t('hero.secondary')}
          </Button>
        </div>
      </div>
    </section>
  );
}

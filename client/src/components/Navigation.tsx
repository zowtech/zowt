import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full glass border-b border-slate-700/50 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-xl font-bold text-bright-blue">Lucas Alberto</span>
            <span className="ml-2 text-sm text-gray-300">Perito Criminal Cibernético</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-300 hover:text-bright-blue transition duration-300"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-300 hover:text-bright-blue transition duration-300"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 hover:text-bright-blue transition duration-300"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('cases')} 
              className="text-gray-300 hover:text-bright-blue transition duration-300"
            >
              {t('nav.cases')}
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="text-gray-300 hover:text-bright-blue transition duration-300"
            >
              {t('nav.blog')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-bright-blue transition duration-300"
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => setLanguage('pt')}
                variant={language === 'pt' ? 'default' : 'outline'}
                size="sm"
                className={language === 'pt' ? 'bg-bright-blue text-white' : 'bg-slate-600 text-gray-300 border-slate-600'}
              >
                PT
              </Button>
              <Button
                onClick={() => setLanguage('en')}
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                className={language === 'en' ? 'bg-bright-blue text-white' : 'bg-slate-600 text-gray-300 border-slate-600'}
              >
                EN
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-bright-blue"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-slate border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block px-3 py-2 text-gray-300 hover:text-bright-blue w-full text-left"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block px-3 py-2 text-gray-300 hover:text-bright-blue w-full text-left"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block px-3 py-2 text-gray-300 hover:text-bright-blue w-full text-left"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('cases')} 
              className="block px-3 py-2 text-gray-300 hover:text-bright-blue w-full text-left"
            >
              {t('nav.cases')}
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="block px-3 py-2 text-gray-300 hover:text-bright-blue w-full text-left"
            >
              {t('nav.blog')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block px-3 py-2 text-gray-300 hover:text-bright-blue w-full text-left"
            >
              {t('nav.contact')}
            </button>
            <div className="flex items-center space-x-2 px-3 py-2">
              <Button
                onClick={() => setLanguage('pt')}
                variant={language === 'pt' ? 'default' : 'outline'}
                size="sm"
                className={language === 'pt' ? 'bg-bright-blue text-white' : 'bg-slate-600 text-gray-300 border-slate-600'}
              >
                PT
              </Button>
              <Button
                onClick={() => setLanguage('en')}
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                className={language === 'en' ? 'bg-bright-blue text-white' : 'bg-slate-600 text-gray-300 border-slate-600'}
              >
                EN
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

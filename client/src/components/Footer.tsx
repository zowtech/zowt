import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-bright-blue">Lucas Alberto</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('footer.services.title')}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-bright-blue transition duration-300">
                  {t('footer.services.forensics')}
                </button>
              </li>
              <li>
                <button className="hover:text-bright-blue transition duration-300">
                  {t('footer.services.fraud')}
                </button>
              </li>
              <li>
                <button className="hover:text-bright-blue transition duration-300">
                  {t('footer.services.reports')}
                </button>
              </li>
              <li>
                <button className="hover:text-bright-blue transition duration-300">
                  {t('footer.services.compliance')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('footer.legal.title')}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-bright-blue transition duration-300">
                  {t('footer.legal.privacy')}
                </button>
              </li>
              <li>
                <button className="hover:text-bright-blue transition duration-300">
                  {t('footer.legal.terms')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

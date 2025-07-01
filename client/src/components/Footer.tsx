import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-dark-slate to-slate-900 py-16 border-t border-slate-700/50 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

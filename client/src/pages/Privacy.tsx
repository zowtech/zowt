import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export default function Privacy() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-dark-slate to-slate-900">
        <div className="container mx-auto px-4 py-20 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16 border-b border-slate-700 pb-12">
            <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">{t('privacy.title')}</h1>
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <div className="w-12 h-px bg-bright-blue"></div>
              <p className="text-sm font-medium uppercase tracking-wider">{t('privacy.lastUpdated')}</p>
              <div className="w-12 h-px bg-bright-blue"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 shadow-2xl">
            <article className="space-y-12">
              <section>
                <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-wide border-l-4 border-bright-blue pl-6">
                  1. {t('privacy.section1.title')}
                </h2>
                <p className="text-slate-200 leading-8 text-lg font-light pl-6">{t('privacy.section1.content')}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-wide border-l-4 border-bright-blue pl-6">
                  2. {t('privacy.section2.title')}
                </h2>
                <p className="text-slate-200 leading-8 text-lg font-light pl-6 mb-6">{t('privacy.section2.content')}</p>
                <div className="pl-6">
                  <ul className="space-y-3 text-slate-200 text-lg font-light">
                    <li className="flex items-start gap-4">
                      <span className="text-bright-blue font-bold mt-1">a)</span>
                      <span>{t('privacy.section2.item1')}</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-bright-blue font-bold mt-1">b)</span>
                      <span>{t('privacy.section2.item2')}</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-bright-blue font-bold mt-1">c)</span>
                      <span>{t('privacy.section2.item3')}</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-bright-blue font-bold mt-1">d)</span>
                      <span>{t('privacy.section2.item4')}</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-wide border-l-4 border-bright-blue pl-6">
                  3. {t('privacy.section3.title')}
                </h2>
                <p className="text-slate-200 leading-8 text-lg font-light pl-6">{t('privacy.section3.content')}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-wide border-l-4 border-bright-blue pl-6">
                  4. {t('privacy.section4.title')}
                </h2>
                <p className="text-slate-200 leading-8 text-lg font-light pl-6">{t('privacy.section4.content')}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-wide border-l-4 border-bright-blue pl-6">
                  5. {t('privacy.section5.title')}
                </h2>
                <p className="text-slate-200 leading-8 text-lg font-light pl-6">{t('privacy.section5.content')}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-wide border-l-4 border-bright-blue pl-6">
                  6. {t('privacy.section6.title')}
                </h2>
                <p className="text-slate-200 leading-8 text-lg font-light pl-6">{t('privacy.section6.content')}</p>
              </section>

              <section className="border-t border-slate-600 pt-8">
                <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-wide border-l-4 border-bright-blue pl-6">
                  {t('privacy.contact.title')}
                </h2>
                <p className="text-slate-200 leading-8 text-lg font-light pl-6 mb-4">{t('privacy.contact.content')}</p>
                <div className="pl-6">
                  <p className="text-bright-blue font-semibold text-xl">contato@zowt.com.br</p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}
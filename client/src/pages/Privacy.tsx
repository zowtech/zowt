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
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-white dark:text-white">{t('privacy.title')}</h1>
        
        <div className="max-w-none">
          <p className="text-lg text-gray-300 dark:text-gray-300 mb-8">{t('privacy.lastUpdated')}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('privacy.section1.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('privacy.section1.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('privacy.section2.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('privacy.section2.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-200 dark:text-gray-200 space-y-2">
              <li>{t('privacy.section2.item1')}</li>
              <li>{t('privacy.section2.item2')}</li>
              <li>{t('privacy.section2.item3')}</li>
              <li>{t('privacy.section2.item4')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('privacy.section3.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('privacy.section3.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('privacy.section4.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('privacy.section4.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('privacy.section5.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('privacy.section5.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('privacy.section6.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('privacy.section6.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('privacy.contact.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('privacy.contact.content')}</p>
            <p className="font-medium text-bright-blue">contato@zowt.com.br</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
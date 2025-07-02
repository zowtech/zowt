import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export default function Terms() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-white dark:text-white">{t('terms.title')}</h1>
        
        <div className="max-w-none">
          <p className="text-lg text-gray-300 dark:text-gray-300 mb-8">{t('terms.lastUpdated')}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('terms.section1.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('terms.section1.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('terms.section2.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('terms.section2.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('terms.section3.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('terms.section3.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-200 dark:text-gray-200 space-y-2">
              <li>{t('terms.section3.item1')}</li>
              <li>{t('terms.section3.item2')}</li>
              <li>{t('terms.section3.item3')}</li>
              <li>{t('terms.section3.item4')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('terms.section4.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('terms.section4.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('terms.section5.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('terms.section5.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('terms.section6.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('terms.section6.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('terms.section7.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('terms.section7.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('terms.section8.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('terms.section8.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">{t('terms.contact.title')}</h2>
            <p className="mb-4 text-gray-200 dark:text-gray-200 leading-relaxed">{t('terms.contact.content')}</p>
            <p className="font-medium text-bright-blue">contato@zowt.com.br</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
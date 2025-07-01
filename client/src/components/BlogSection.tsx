import { useLanguage } from '@/contexts/LanguageContext';

export function BlogSection() {
  const { t } = useLanguage();

  const articles = [
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      titleKey: 'blog.article1.title',
      excerptKey: 'blog.article1.excerpt'
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      titleKey: 'blog.article2.title',
      excerptKey: 'blog.article2.excerpt'
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      titleKey: 'blog.article3.title',
      excerptKey: 'blog.article3.excerpt'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bright-blue">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group card-hover animate-fadeInUp relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-bright-blue/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={t(article.titleKey)} 
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-bright-blue transition-colors duration-300">
                    {t(article.titleKey)}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {t(article.excerptKey)}
                  </p>
                  <button className="inline-flex items-center text-bright-blue hover:text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    {t('blog.readMore')}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

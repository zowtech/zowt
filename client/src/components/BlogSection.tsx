import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { ArrowRight, Calendar, User } from 'lucide-react';

export function BlogSection() {
  const { t } = useLanguage();

  const articles = [
    {
      titleKey: 'blog.article1.title',
      excerptKey: 'blog.article1.excerpt',
      date: '2025-01-01',
      readTime: '5 min'
    },
    {
      titleKey: 'blog.article2.title',
      excerptKey: 'blog.article2.excerpt',
      date: '2024-12-15',
      readTime: '7 min'
    },
    {
      titleKey: 'blog.article3.title',
      excerptKey: 'blog.article3.excerpt',
      date: '2024-11-20',
      readTime: '6 min'
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group card-hover animate-fadeInUp relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative glass rounded-2xl overflow-hidden border border-slate-700/50 hover:border-bright-blue/50 transition-all duration-300 p-6">
                
                {/* Article Date and Time */}
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                
                {/* Article Title */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-bright-blue transition-colors duration-300">
                  {t(article.titleKey)}
                </h3>
                
                {/* Article Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t(article.excerptKey)}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span>Lucas Alberto</span>
                </div>
                
                {/* Read More Link */}
                <Link 
                  href="/artigos" 
                  className="inline-flex items-center text-bright-blue hover:text-blue-300 transition-colors duration-200 group-hover:translate-x-1 transform"
                >
                  <span className="font-medium">{t('blog.readMore')}</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Articles Button */}
        <div className="text-center">
          <Link 
            href="/artigos"
            className="inline-flex items-center px-8 py-4 bg-bright-blue/10 hover:bg-bright-blue/20 text-bright-blue border border-bright-blue/30 rounded-xl transition-all duration-300 group hover:scale-105"
          >
            <span className="font-semibold">Ver Todos os Artigos</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
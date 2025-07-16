import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { ArrowRight, Clock, FileText, ChevronRight } from 'lucide-react';

export function BlogSection() {
  const { t } = useLanguage();

  const articles = [
    {
      titleKey: 'blog.article1.title',
      excerptKey: 'blog.article1.excerpt',
      date: '2025-01-01',
      readTime: '5 min',
      category: 'Email Forensics',
      tags: ['SMTP Analysis', 'Headers', 'SPF/DKIM'],
      featured: true,
      image: '/assets/professional-team.jpg'
    },
    {
      titleKey: 'blog.article2.title',
      excerptKey: 'blog.article2.excerpt',
      date: '2024-12-15',
      readTime: '7 min',
      category: 'Fraud Prevention',
      tags: ['Deepfakes', 'BEC', 'Crypto'],
      featured: false,
      image: '/assets/professional-team.jpg'
    },
    {
      titleKey: 'blog.article3.title',
      excerptKey: 'blog.article3.excerpt',
      date: '2024-11-20',
      readTime: '6 min',
      category: 'Legal Reports',
      tags: ['ISO 27037', 'Chain of Custody', 'Expert Reports'],
      featured: false,
      image: '/assets/professional-team.jpg'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-bright-blue mb-4">
              {t('blog.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              {t('blog.subtitle')}
            </p>
          </div>
          <div className="hidden md:flex items-center">
            <Link 
              href="/artigos"
              className="inline-flex items-center text-bright-blue hover:text-blue-300 transition-colors group"
            >
              <span className="font-medium mr-2">{t('blog.viewall')}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link
              key={index}
              href="/artigos"
              className="block group"
            >
              <div className="glass rounded-2xl border border-slate-700/50 hover:border-bright-blue/30 transition-all duration-300 overflow-hidden h-full">
                
                {/* Featured Badge */}
                {article.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="px-2 py-1 bg-bright-blue/20 text-bright-blue text-xs font-mono rounded border border-bright-blue/30">
                      DESTAQUE
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={t(article.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-slate-800 text-gray-300 text-xs rounded border border-slate-600">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-bright-blue transition-colors duration-300 line-clamp-2">
                    {t(article.titleKey)}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {t(article.excerptKey)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-slate-800/50 text-gray-400 text-xs rounded border border-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
                    <span className="text-gray-400 text-xs">
                      {new Date(article.date).toLocaleDateString('pt-BR')}
                    </span>
                    <div className="flex items-center text-bright-blue text-sm group-hover:text-blue-300 transition-colors">
                      <span className="font-medium">{t('blog.button.readmore')}</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-12 md:hidden">
          <Link 
            href="/artigos"
            className="inline-flex items-center px-8 py-4 bg-bright-blue/10 hover:bg-bright-blue/20 text-bright-blue border border-bright-blue/30 rounded-xl transition-all duration-300 group"
          >
            <span className="font-semibold">{t('blog.button.viewall')}</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
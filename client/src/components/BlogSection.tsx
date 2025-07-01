import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { ArrowRight, Clock, FileText, ChevronRight } from 'lucide-react';

export function BlogSection() {
  const { t } = useLanguage();

  const featuredArticle = {
    titleKey: 'blog.article1.title',
    excerptKey: 'blog.article1.excerpt',
    date: '2025-01-01',
    readTime: '5 min',
    category: 'Análise Forense',
    tags: ['Email Spoofing', 'Headers', 'Perícia'],
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjMUUyOTNiIi8+CjxyZWN0IHg9IjIwIiB5PSI2MCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIxMjAiIHJ4PSI4IiBmaWxsPSIjNDc0RjU5IiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cGF0aCBkPSJNODAgMTEwaDI0MHYyMEg4MHoiIGZpbGw9IiM2M0I0RkYiLz4KPHA8dGggZD0iTTgwIDEzNWgyMDB2MTBIODB6IiBmaWxsPSIjOTCA5NTk2Ii8+CjxwYXRoIGQ9Ik04MCAxNTBoMTYwdjZIODB6IiBmaWxsPSIjOTQ5NTk2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjNCNEZGIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiPkFuw6FsaXNlIEZvcmVuc2U8L3RleHQ+Cjwvc3ZnPgo='
  };

  const recentArticles = [
    {
      titleKey: 'blog.article2.title',
      date: '2024-12-15',
      readTime: '7 min',
      category: 'Cibersegurança',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDMwMCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMTYwIiBmaWxsPSIjMUUyOTNiIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjgwIiByPSI0MCIgc3Ryb2tlPSIjNjNCNEZGIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz4KPHA8YXRoIGQ9Ik0xNDAgNzBsOCAxMCAxMi0yMCIgc3Ryb2tlPSIjNjNCNEZGIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz4KPHA8dGggZD0iTTEyNSAxMTBoNTB2M2gtNTB6IiBmaWxsPSIjOTQ5NTk2Ii8+CjxwYXRoIGQ9Ik0xMzUgMTIwaCAzMHYyaC0zMHoiIGZpbGw9IiM5NDk1OTYiLz4KPHA8dGggZD0iTTE0NSAxMzBoMjB2MmgtMjB6IiBmaWxsPSIjOTQ5NTk2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjNCNEZGIiBmb250LXNpemU9IjEyIiBmb250LWZhbWlseT0iQXJpYWwiPkNpYmVyc2VndXJhbsOnYTwvdGV4dD4KPC9zdmc+Cg=='
    },
    {
      titleKey: 'blog.article3.title',
      date: '2024-11-20',
      readTime: '6 min',
      category: 'Investigação',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDMwMCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMTYwIiBmaWxsPSIjMUUyOTNiIi8+CjxyZWN0IHg9IjUwIiB5PSI0MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI4MCIgcng9IjQiIGZpbGw9IiM0NzRGNTkiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjxjaXJjbGUgY3g9IjIyMCIgY3k9IjYwIiByPSIyMCIgZmlsbD0iIzYzQjRGRiIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPHA8YXRoIGQ9Ik0yMTUgNTVsNSA1IDEwLTEwIiBzdHJva2U9IiM2M0I0RkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNNzAgNzBoMTIwdjRINzB6IiBmaWxsPSIjOTQ5NTk2Ii8+CjxwYXRoIGQ9Ik03MCA4MGgxMDB2M0g3MHoiIGZpbGw9IiM5NDk1OTYiLz4KPHA8dGggZD0iTTcwIDkwaDgwdjJINzB6IiBmaWxsPSIjOTQ5NTk2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTQ1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjNCNEZGIiBmb250LXNpemU9IjEyIiBmb250LWZhbWlseT0iQXJpYWwiPkludmVzdGlnYcOnw6NvPC90ZXh0Pgo8L3N2Zz4K'
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
              <span className="font-medium mr-2">Ver todos</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Featured Article */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/artigos" className="block group">
              <div className="relative glass rounded-2xl border border-bright-blue/20 hover:border-bright-blue/40 transition-all duration-300 overflow-hidden h-full">
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-2 py-1 bg-bright-blue/20 text-bright-blue text-xs font-mono rounded border border-bright-blue/30">
                    DESTAQUE
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={t(featuredArticle.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-slate-800 text-gray-300 text-xs rounded border border-slate-600">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-bright-blue transition-colors duration-300 line-clamp-2">
                    {t(featuredArticle.titleKey)}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {t(featuredArticle.excerptKey)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {featuredArticle.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-800/50 text-gray-400 text-xs rounded border border-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Button */}
                  <div className="flex items-center text-bright-blue text-sm group-hover:text-blue-300 transition-colors">
                    <span className="font-medium">Ler mais</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Recent Articles */}
          {recentArticles.map((article, index) => (
            <Link
              key={index}
              href="/artigos"
              className="block group"
            >
              <div className="glass rounded-2xl border border-slate-700/50 hover:border-bright-blue/30 transition-all duration-300 overflow-hidden h-full">
                
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={t(article.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>

                <div className="p-5">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-slate-800 text-gray-300 text-xs rounded border border-slate-600">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-base font-semibold text-white mb-3 group-hover:text-bright-blue transition-colors duration-300 line-clamp-2">
                    {t(article.titleKey)}
                  </h4>
                  
                  {/* Date and Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">
                      {new Date(article.date).toLocaleDateString('pt-BR')}
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-bright-blue group-hover:translate-x-1 transition-all duration-300" />
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
            <span className="font-semibold">Ver Todos os Artigos</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
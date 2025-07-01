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
    tags: ['Email Spoofing', 'Headers', 'Perícia']
  };

  const recentArticles = [
    {
      titleKey: 'blog.article2.title',
      date: '2024-12-15',
      readTime: '7 min',
      category: 'Cibersegurança'
    },
    {
      titleKey: 'blog.article3.title',
      date: '2024-11-20',
      readTime: '6 min',
      category: 'Investigação'
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

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Featured Article */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/10 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-3xl border border-bright-blue/20 hover:border-bright-blue/40 transition-all duration-500 overflow-hidden">
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="px-3 py-1 bg-bright-blue/20 text-bright-blue text-xs font-mono rounded-full border border-bright-blue/30">
                    DESTAQUE
                  </div>
                </div>

                <div className="p-8 pt-16">
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-slate-800 text-gray-300 text-xs rounded-full border border-slate-600">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-bright-blue transition-colors duration-300">
                    {t(featuredArticle.titleKey)}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {t(featuredArticle.excerptKey)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredArticle.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-800/50 text-gray-400 text-xs rounded border border-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Button */}
                  <Link 
                    href="/artigos"
                    className="inline-flex items-center px-6 py-3 bg-bright-blue/10 hover:bg-bright-blue/20 text-bright-blue border border-bright-blue/30 rounded-xl transition-all duration-300 group"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    <span className="font-medium">Ler Artigo Completo</span>
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Articles Sidebar */}
          <div className="space-y-6">
            <div className="flex items-center mb-8">
              <h4 className="text-xl font-semibold text-white">Artigos Recentes</h4>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent ml-4"></div>
            </div>

            {recentArticles.map((article, index) => (
              <Link
                key={index}
                href="/artigos"
                className="block group"
              >
                <div className="glass rounded-2xl border border-slate-700/50 hover:border-bright-blue/30 transition-all duration-300 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-slate-800 text-gray-300 text-xs rounded-full border border-slate-600">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h5 className="text-lg font-semibold text-white mb-3 group-hover:text-bright-blue transition-colors duration-300">
                    {t(article.titleKey)}
                  </h5>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {new Date(article.date).toLocaleDateString('pt-BR')}
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-bright-blue group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}

            {/* Newsletter CTA */}
            <div className="glass rounded-2xl border border-bright-blue/20 p-6 mt-8">
              <h5 className="text-lg font-semibold text-white mb-3">
                Newsletter Técnica
              </h5>
              <p className="text-gray-300 text-sm mb-4">
                Receba insights exclusivos sobre análise forense e investigação digital.
              </p>
              <Link 
                href="/artigos"
                className="inline-flex items-center text-bright-blue hover:text-blue-300 transition-colors text-sm group"
              >
                <span className="font-medium">Saber mais</span>
                <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
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
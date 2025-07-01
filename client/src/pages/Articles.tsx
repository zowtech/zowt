import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ChevronRight, Bookmark, Share2, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

export default function Articles() {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      title: t('blog.article1.title'),
      excerpt: t('blog.article1.excerpt'),
      date: '2025-01-01',
      category: 'Segurança Digital',
      readTime: '5 min',
      tags: ['Email Spoofing', 'Headers', 'SPF', 'DKIM', 'DMARC'],
      featured: true
    },
    {
      id: 2,
      title: t('blog.article2.title'),
      excerpt: t('blog.article2.excerpt'),
      date: '2024-12-15',
      category: 'Prevenção de Fraudes',
      readTime: '7 min',
      tags: ['Criptomoedas', 'Deepfakes', 'BEC', 'PIX'],
      featured: false
    },
    {
      id: 3,
      title: t('blog.article3.title'),
      excerpt: t('blog.article3.excerpt'),
      date: '2024-11-20',
      category: 'Perícia Judicial',
      readTime: '6 min',
      tags: ['Laudo Pericial', 'Evidências', 'Cadeia de Custódia'],
      featured: false
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-dark-slate">
      {/* Minimal Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-bright-blue hover:text-blue-300 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="font-medium text-sm">Voltar</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Artigos Técnicos
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Insights especializados sobre investigação digital, análise forense e cybersecurity.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="mb-20">
            <div className="relative group overflow-hidden rounded-2xl glass border border-bright-blue/20 hover:border-bright-blue/40 transition-all duration-500">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-bright-blue/20 text-bright-blue text-xs font-mono rounded-full border border-bright-blue/30">
                    ARTIGO EM DESTAQUE
                  </span>
                  <span className="text-gray-400 text-sm">
                    {new Date(featuredArticle.date).toLocaleDateString('pt-BR')} • {featuredArticle.readTime}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-bright-blue transition-colors duration-300">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  {featuredArticle.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-800 text-gray-300 text-xs rounded-full border border-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button className="inline-flex items-center px-6 py-3 bg-bright-blue/10 hover:bg-bright-blue/20 text-bright-blue border border-bright-blue/30 rounded-xl transition-all duration-300 group">
                      <span className="font-medium">Ler Artigo</span>
                      <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-bright-blue transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-bright-blue transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold text-white">Todos os Artigos</h3>
            <div className="h-px flex-1 ml-6 bg-gradient-to-r from-bright-blue/50 to-transparent"></div>
          </div>
          
          <div className="space-y-8">
            {regularArticles.map((article, index) => (
              <article 
                key={article.id} 
                className="group glass rounded-2xl border border-slate-700/50 hover:border-bright-blue/30 transition-all duration-500 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    
                    {/* Article Number & Category */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-bright-blue/10 rounded-xl flex items-center justify-center border border-bright-blue/20 group-hover:bg-bright-blue/20 transition-colors duration-300">
                        <span className="text-bright-blue font-mono font-bold text-lg">
                          {String(index + 2).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Article Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-slate-800 text-gray-300 text-xs rounded-full border border-slate-600">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {new Date(article.date).toLocaleDateString('pt-BR')} • {article.readTime}
                        </span>
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-bright-blue transition-colors duration-300">
                        {article.title}
                      </h4>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        {article.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-slate-800/50 text-gray-400 text-xs rounded border border-slate-700">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex-shrink-0">
                      <button className="inline-flex items-center px-4 py-2 text-bright-blue hover:text-blue-300 transition-colors duration-300 group">
                        <span className="font-medium text-sm">Ler mais</span>
                        <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-20">
          <div className="text-center glass rounded-2xl p-12 border border-bright-blue/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Precisa de Consultoria Especializada?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato para discutir seu caso específico e obter análise técnica personalizada.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-bright-blue hover:bg-blue-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
            >
              <span>Solicitar Consultoria</span>
              <ChevronRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
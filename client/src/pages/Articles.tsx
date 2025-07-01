import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Clock, Eye } from 'lucide-react';
import { Link } from 'wouter';

export default function Articles() {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      title: t('blog.article1.title'),
      excerpt: t('blog.article1.excerpt'),
      date: '2025-01-01',
      author: 'Lucas Alberto',
      category: 'Email Security',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      featured: true
    },
    {
      id: 2,
      title: t('blog.article2.title'),
      excerpt: t('blog.article2.excerpt'),
      date: '2024-12-15',
      author: 'Lucas Alberto',
      category: 'Fraud Prevention',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      featured: false
    },
    {
      id: 3,
      title: t('blog.article3.title'),
      excerpt: t('blog.article3.excerpt'),
      date: '2024-11-20',
      author: 'Lucas Alberto',
      category: 'Legal Tech',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      featured: false
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-dark-slate">
      {/* Header Navigation */}
      <div className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-bright-blue hover:text-blue-300 transition-colors duration-200">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-medium">Voltar ao Site</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/10 via-transparent to-purple-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-bright-blue to-blue-300 bg-clip-text text-transparent">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="relative group">
            <div className="glass rounded-3xl overflow-hidden border border-bright-blue/30 hover:border-bright-blue/50 transition-all duration-500">
              <div className="md:grid md:grid-cols-2 md:gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-bright-blue/90 text-white text-xs font-mono rounded-full">
                      DESTAQUE
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <span className="px-2 py-1 bg-bright-blue/20 text-bright-blue rounded text-xs font-mono mr-3">
                      {featuredArticle.category}
                    </span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredArticle.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(featuredArticle.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-bright-blue transition-colors duration-300">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-8 h-8 bg-bright-blue/20 rounded-full flex items-center justify-center mr-3">
                        <Eye className="h-4 w-4 text-bright-blue" />
                      </div>
                      <span>Por {featuredArticle.author}</span>
                    </div>
                    <button className="px-6 py-3 bg-bright-blue/10 hover:bg-bright-blue/20 text-bright-blue border border-bright-blue/30 rounded-xl transition-all duration-300 hover:scale-105 font-medium">
                      Ler Artigo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">Mais Artigos</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-bright-blue to-blue-300 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {regularArticles.map((article) => (
            <article 
              key={article.id} 
              className="group glass rounded-2xl overflow-hidden border border-slate-700 hover:border-bright-blue/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-mono rounded">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{article.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-bright-blue transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="w-6 h-6 bg-bright-blue/20 rounded-full flex items-center justify-center mr-2">
                      <Eye className="h-3 w-3 text-bright-blue" />
                    </div>
                    <span>{article.author}</span>
                  </div>
                  <button className="text-bright-blue hover:text-blue-300 font-medium text-sm transition-colors duration-300 hover:translate-x-1 transform">
                    Ler mais →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="glass rounded-2xl p-8 md:p-12 border border-bright-blue/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Mantenha-se Atualizado
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Receba insights exclusivos sobre investigação digital e análises de casos reais de cybersecurity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu e-mail profissional"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-bright-blue transition-colors duration-300"
            />
            <button className="px-6 py-3 bg-bright-blue hover:bg-blue-600 text-white rounded-xl transition-colors duration-300 font-medium">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
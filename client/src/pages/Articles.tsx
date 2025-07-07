import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Clock, Calendar, Tag, Shield, Search, FileText, Eye, TrendingUp, Users, Award, ChevronRight, Bookmark, Share2, ExternalLink } from 'lucide-react';
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
      featured: true,
      views: 2847,
      difficulty: 'Intermediário',
      icon: Shield
    },
    {
      id: 2,
      title: t('blog.article2.title'),
      excerpt: t('blog.article2.excerpt'),
      date: '2024-12-15',
      category: 'Prevenção de Fraudes',
      readTime: '7 min',
      tags: ['Criptomoedas', 'Deepfakes', 'BEC', 'PIX'],
      featured: false,
      views: 1923,
      difficulty: 'Avançado',
      icon: Search
    },
    {
      id: 3,
      title: t('blog.article3.title'),
      excerpt: t('blog.article3.excerpt'),
      date: '2024-11-20',
      category: 'Perícia Judicial',
      readTime: '6 min',
      tags: ['Laudo Pericial', 'Evidências', 'Cadeia de Custódia'],
      featured: false,
      views: 3156,
      difficulty: 'Intermediário',
      icon: FileText
    },
    {
      id: 4,
      title: 'Investigação de Ataques DDoS: Metodologia Forense Completa',
      excerpt: 'Análise técnica completa para identificar autores de ataques distribuídos de negação de serviço, incluindo análise de logs Netflow, correlação de timestamps, identificação de botnets e coleta de evidências admissíveis em processos judiciais.',
      date: '2024-10-28',
      category: 'Network Forensics',
      readTime: '8 min',
      tags: ['DDoS', 'Netflow', 'Botnet Analysis', 'PCAP'],
      featured: false,
      views: 1456,
      difficulty: 'Avançado',
      icon: Shield
    },
    {
      id: 5,
      title: 'Rastreamento Bitcoin: Técnicas de Blockchain Intelligence',
      excerpt: 'Metodologia profissional para análise de transações Bitcoin utilizando ferramentas como Chainalysis, Elliptic e técnicas OSINT para identificação de carteiras suspeitas, mixing services e exchanges não-regulamentadas em investigações financeiras.',
      date: '2024-09-15',
      category: 'Blockchain Analysis',
      readTime: '10 min',
      tags: ['Bitcoin', 'Chainalysis', 'UTXO Analysis', 'Mixing'],
      featured: false,
      views: 4289,
      difficulty: 'Expert',
      icon: TrendingUp
    },
    {
      id: 6,
      title: 'Mobile Forensics Android: Extração e Análise Avançada',
      excerpt: 'Guia técnico completo para extração forense de dispositivos Android utilizando Cellebrite UFED, Oxygen Detective e técnicas de bypass de bloqueio, incluindo análise de SQLite databases, recuperação de dados apagados e timeline reconstruction.',
      date: '2024-08-22',
      category: 'Mobile Forensics',
      readTime: '12 min',
      tags: ['Android', 'Cellebrite', 'SQLite', 'Data Recovery'],
      featured: false,
      views: 2134,
      difficulty: 'Intermediário',
      icon: Users
    },
    {
      id: 7,
      title: 'Análise Forense de Malware: Engenharia Reversa e IOCs',
      excerpt: 'Metodologia técnica para análise de malware em ambiente controlado utilizando sandboxes, descompilação, identificação de indicadores de comprometimento (IOCs) e análise comportamental para produção de relatórios forenses.',
      date: '2024-07-10',
      category: 'Malware Analysis',
      readTime: '15 min',
      tags: ['Malware', 'Reverse Engineering', 'IOCs', 'Sandbox'],
      featured: false,
      views: 1876,
      difficulty: 'Expert',
      icon: Shield
    },
    {
      id: 8,
      title: 'OSINT Corporativo: Inteligência em Fontes Abertas',
      excerpt: 'Técnicas avançadas de coleta e análise de inteligência através de fontes abertas para due diligence corporativa, incluindo análise de redes sociais, vazamentos de dados, reputação digital e mapeamento de ativos corporativos.',
      date: '2024-06-18',
      category: 'Open Source Intelligence',
      readTime: '9 min',
      tags: ['OSINT', 'Due Diligence', 'Social Media', 'HUMINT'],
      featured: false,
      views: 2954,
      difficulty: 'Intermediário',
      icon: Search
    },
    {
      id: 9,
      title: 'Recuperação de Dados: Técnicas Forenses Avançadas',
      excerpt: 'Métodos profissionais para recuperação de dados apagados em diferentes sistemas de arquivos (NTFS, ext4, APFS), análise de journaling, carving de arquivos, recuperação de banco de dados e preservação da integridade forense.',
      date: '2024-05-25',
      category: 'Data Recovery',
      readTime: '11 min',
      tags: ['Data Recovery', 'File Carving', 'NTFS', 'Forensic Imaging'],
      featured: false,
      views: 3421,
      difficulty: 'Avançado',
      icon: FileText
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Intermediário': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Avançado': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'Expert': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-green-400 bg-green-400/10 border-green-400/30';
    }
  };

  return (
    <div className="min-h-screen bg-dark-slate">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center text-bright-blue hover:text-blue-300 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">{t('articles.back')}</span>
            </Link>
            
            {/* Stats */}
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>{articles.length} artigos</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{articles.reduce((acc, article) => acc + article.views, 0).toLocaleString()} visualizações</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {t('articles.title')}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('articles.subtitle')}
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center glass p-4 rounded-xl border border-slate-700/50">
              <div className="text-2xl font-bold text-bright-blue mb-1">{articles.length}</div>
              <div className="text-sm text-gray-400">Artigos</div>
            </div>
            <div className="text-center glass p-4 rounded-xl border border-slate-700/50">
              <div className="text-2xl font-bold text-bright-blue mb-1">15K+</div>
              <div className="text-sm text-gray-400">Leitores</div>
            </div>
            <div className="text-center glass p-4 rounded-xl border border-slate-700/50">
              <div className="text-2xl font-bold text-bright-blue mb-1">98%</div>
              <div className="text-sm text-gray-400">Precisão</div>
            </div>
            <div className="text-center glass p-4 rounded-xl border border-slate-700/50">
              <div className="text-2xl font-bold text-bright-blue mb-1">5+</div>
              <div className="text-sm text-gray-400">Categorias</div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const IconComponent = article.icon;
              return (
                <article 
                  key={article.id} 
                  className="group glass rounded-2xl border border-slate-700/50 hover:border-bright-blue/30 transition-all duration-500 overflow-hidden hover:transform hover:scale-[1.02]"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-bright-blue/10 rounded-xl flex items-center justify-center border border-bright-blue/20 group-hover:bg-bright-blue/20 transition-colors duration-300">
                          <IconComponent className="h-6 w-6 text-bright-blue" />
                        </div>
                        {article.featured && (
                          <span className="px-2 py-1 bg-bright-blue/20 text-bright-blue text-xs font-mono rounded border border-bright-blue/30">
                            DESTAQUE
                          </span>
                        )}
                      </div>
                      
                      <button className="p-2 text-gray-400 hover:text-bright-blue transition-colors opacity-0 group-hover:opacity-100">
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-slate-800 text-gray-300 text-xs rounded border border-slate-600">
                        {article.category}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded border ${getDifficultyColor(article.difficulty)}`}>
                        {article.difficulty}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-bright-blue transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-slate-800/50 text-gray-400 text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-800/50 text-gray-400 text-xs rounded">
                          +{article.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <button className="text-bright-blue hover:text-blue-300 transition-colors text-sm font-medium opacity-0 group-hover:opacity-100">
                        Ler →
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Newsletter & CTA */}
        <section className="mt-16">
          <div className="glass rounded-3xl p-8 md:p-12 border border-bright-blue/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/5 to-purple-500/5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-bright-blue/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {t('articles.consultation.title')}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {t('articles.consultation.desc')}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/#contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-bright-blue hover:bg-blue-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
                    >
                      <span>{t('articles.consultation.cta')}</span>
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                    
                    <button className="inline-flex items-center justify-center px-6 py-3 border border-bright-blue/30 text-bright-blue hover:bg-bright-blue/10 rounded-xl transition-all duration-300 font-medium">
                      <span>Receber Atualizações</span>
                      <Tag className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
                
                {/* Right Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <div className="text-2xl font-bold text-bright-blue mb-1">10+</div>
                    <div className="text-sm text-gray-400">Anos de Experiência</div>
                  </div>
                  <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <div className="text-2xl font-bold text-bright-blue mb-1">80+</div>
                    <div className="text-sm text-gray-400">Casos Resolvidos</div>
                  </div>
                  <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <div className="text-2xl font-bold text-bright-blue mb-1">R$ 20M+</div>
                    <div className="text-sm text-gray-400">Valores Rastreados</div>
                  </div>
                  <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <div className="text-2xl font-bold text-bright-blue mb-1">98%</div>
                    <div className="text-sm text-gray-400">Taxa de Sucesso</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
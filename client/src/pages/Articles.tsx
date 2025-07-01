import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
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
      content: `
        <h2>Introdução ao Email Spoofing</h2>
        <p>O spoofing de e-mail é uma técnica de falsificação onde criminosos fazem parecer que uma mensagem foi enviada de uma fonte confiável quando na verdade foi enviada por eles. Esta técnica é amplamente utilizada em ataques de phishing e fraudes corporativas.</p>
        
        <h3>Como Identificar Headers Falsificados</h3>
        <p>Os headers de e-mail contêm informações técnicas cruciais que podem revelar a origem real da mensagem. Analise sempre:</p>
        <ul>
          <li><strong>Return-Path:</strong> Deve corresponder ao domínio do remetente</li>
          <li><strong>Received:</strong> Rastrea o caminho do e-mail pelos servidores</li>
          <li><strong>Authentication-Results:</strong> Mostra resultados de SPF, DKIM e DMARC</li>
        </ul>
        
        <h3>Verificação de SPF, DKIM e DMARC</h3>
        <p>Estes são os três pilares da autenticação de e-mail:</p>
        <ul>
          <li><strong>SPF (Sender Policy Framework):</strong> Lista os servidores autorizados a enviar e-mail em nome do domínio</li>
          <li><strong>DKIM (DomainKeys Identified Mail):</strong> Assinatura criptográfica que garante a integridade da mensagem</li>
          <li><strong>DMARC (Domain-based Message Authentication):</strong> Política que define como tratar e-mails que falham na autenticação</li>
        </ul>
        
        <h3>Sinais de Alerta Técnicos</h3>
        <p>Durante a análise forense, procure por:</p>
        <ul>
          <li>Inconsistências nos timestamps dos headers</li>
          <li>Servidores de origem suspeitos ou não relacionados</li>
          <li>Ausência de registros DKIM válidos</li>
          <li>Políticas DMARC configuradas incorretamente</li>
        </ul>
        
        <h3>Ferramentas Forenses</h3>
        <p>Para análise profissional, utilize:</p>
        <ul>
          <li>MX Toolbox para verificação de registros DNS</li>
          <li>Mail Header Analyzer para análise detalhada</li>
          <li>DMARC Analyzer para monitoramento contínuo</li>
          <li>Ferramentas de threat intelligence para verificar reputação de IPs</li>
        </ul>
      `
    },
    {
      id: 2,
      title: t('blog.article2.title'),
      excerpt: t('blog.article2.excerpt'),
      date: '2024-12-15',
      author: 'Lucas Alberto',
      category: 'Fraud Prevention',
      readTime: '7 min',
      content: `
        <h2>Panorama das Fraudes Digitais em 2025</h2>
        <p>O cenário de fraudes digitais evoluiu significativamente, com criminosos utilizando IA, deepfakes e técnicas sofisticadas de engenharia social. Como especialista em investigação digital, compilei os principais esquemas que empresas e indivíduos enfrentam.</p>
        
        <h3>1. Fraudes com Criptomoedas</h3>
        <p>Com a popularização das moedas digitais, os esquemas fraudulentos se multiplicaram:</p>
        <ul>
          <li><strong>Pig Butchering:</strong> Relacionamentos falsos para atrair vítimas a investimentos fraudulentos</li>
          <li><strong>Rug Pulls:</strong> Projetos DeFi que desaparecem com os fundos dos investidores</li>
          <li><strong>Fake Exchanges:</strong> Plataformas falsas que simulam exchanges legítimas</li>
          <li><strong>Romance Scams:</strong> Golpes românticos com pagamento em crypto</li>
        </ul>
        
        <h3>2. Deepfakes e Manipulação de Mídia</h3>
        <p>A tecnologia de deepfake democratizou-se, criando novos vetores de fraude:</p>
        <ul>
          <li>Chamadas de vídeo falsas com CEOs solicitando transferências</li>
          <li>Clonagem de voz para autorizar transações bancárias</li>
          <li>Evidências falsas em processos judiciais</li>
          <li>Perfis falsos em redes sociais com fotos sintéticas</li>
        </ul>
        
        <h3>3. Business Email Compromise (BEC) 2.0</h3>
        <p>Os ataques BEC evoluíram com técnicas mais sofisticadas:</p>
        <ul>
          <li>Uso de IA para personalizar mensagens de phishing</li>
          <li>Comprometimento de cadeias de fornecedores</li>
          <li>Ataques coordenados com múltiplos vetores</li>
          <li>Exploração de falhas em sistemas ERP</li>
        </ul>
        
        <h3>4. Fraudes em PIX e Pagamentos Instantâneos</h3>
        <p>No Brasil, o PIX tornou-se alvo preferencial:</p>
        <ul>
          <li>Engenharia social via WhatsApp clonado</li>
          <li>QR codes maliciosos em estabelecimentos</li>
          <li>Golpes do "teste do PIX"</li>
          <li>Fraudes em cashback e promoções falsas</li>
        </ul>
        
        <h3>Medidas de Proteção</h3>
        <p>Para organizações e indivíduos:</p>
        <ul>
          <li>Implementar autenticação multifator em todos os sistemas</li>
          <li>Treinar funcionários sobre engenharia social</li>
          <li>Estabelecer workflows de aprovação para transações</li>
          <li>Monitorar continuamente atividades suspeitas</li>
          <li>Manter backup offline de dados críticos</li>
        </ul>
      `
    },
    {
      id: 3,
      title: t('blog.article3.title'),
      excerpt: t('blog.article3.excerpt'),
      date: '2024-11-20',
      author: 'Lucas Alberto',
      category: 'Legal Tech',
      readTime: '6 min',
      content: `
        <h2>A Importância do Laudo Pericial Digital</h2>
        <p>Em um mundo cada vez mais digitalizado, as evidências eletrônicas são fundamentais em processos judiciais. O laudo pericial digital é o documento técnico que transforma dados brutos em evidências juridicamente válidas.</p>
        
        <h3>O que é um Laudo Pericial Digital</h3>
        <p>É um documento técnico-científico elaborado por perito especializado que:</p>
        <ul>
          <li>Analisa evidências digitais de forma metodológica</li>
          <li>Preserva a cadeia de custódia dos dados</li>
          <li>Traduz aspectos técnicos para linguagem jurídica</li>
          <li>Fornece conclusões baseadas em análise científica</li>
        </ul>
        
        <h3>Tipos de Perícias Digitais</h3>
        <p>As perícias podem abranger diversas áreas:</p>
        <ul>
          <li><strong>Perícia em Dispositivos Móveis:</strong> Recuperação de mensagens, localização, chamadas</li>
          <li><strong>Perícia em Sistemas:</strong> Análise de logs, invasões, alterações não autorizadas</li>
          <li><strong>Perícia em Redes:</strong> Análise de tráfego, comunicações, protocolos</li>
          <li><strong>Perícia Contábil Digital:</strong> Fraudes financeiras, transações suspeitas</li>
          <li><strong>Perícia em Mídia:</strong> Autenticidade de áudios, vídeos, imagens</li>
        </ul>
        
        <h3>Processo de Elaboração</h3>
        <p>Um laudo pericial segue metodologia rigorosa:</p>
        <ol>
          <li><strong>Preservação:</strong> Criação de cópias forenses bit-a-bit</li>
          <li><strong>Aquisição:</strong> Extração de dados usando ferramentas certificadas</li>
          <li><strong>Análise:</strong> Exame técnico detalhado das evidências</li>
          <li><strong>Interpretação:</strong> Correlação dos achados com os fatos</li>
          <li><strong>Documentação:</strong> Relatório técnico detalhado</li>
        </ol>
        
        <h3>Ferramentas Utilizadas</h3>
        <p>Peritos utilizam software especializado:</p>
        <ul>
          <li><strong>Cellebrite UFED:</strong> Extração de dados de dispositivos móveis</li>
          <li><strong>EnCase:</strong> Análise forense de computadores</li>
          <li><strong>Autopsy:</strong> Plataforma open source para análise digital</li>
          <li><strong>X-Ways Forensics:</strong> Análise avançada de evidências</li>
          <li><strong>Oxygen Detective:</strong> Análise de dispositivos móveis</li>
        </ul>
        
        <h3>Valor Probatório</h3>
        <p>Para ter valor legal, o laudo deve:</p>
        <ul>
          <li>Ser elaborado por perito qualificado</li>
          <li>Seguir metodologia científica reconhecida</li>
          <li>Preservar a cadeia de custódia</li>
          <li>Ser imparcial e tecnicamente fundamentado</li>
          <li>Permitir reprodução dos resultados</li>
        </ul>
        
        <h3>Quando Solicitar</h3>
        <p>É recomendável em casos de:</p>
        <ul>
          <li>Fraudes financeiras digitais</li>
          <li>Vazamento de informações confidenciais</li>
          <li>Crimes cibernéticos</li>
          <li>Disputas contratuais envolvendo sistemas</li>
          <li>Investigações de compliance</li>
        </ul>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-dark-slate">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="inline-flex items-center text-bright-blue hover:text-blue-300 transition-colors duration-200 mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar ao Início
          </Link>
          <h1 className="text-4xl font-bold text-bright-blue mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {t('blog.subtitle')}
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="glass p-6 rounded-xl border border-slate-700 hover:border-bright-blue/50 transition-all duration-300 group"
            >
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-bright-blue transition-colors duration-300">
                {article.title}
              </h2>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-400">
                  <User className="h-4 w-4 mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center text-sm text-bright-blue">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{article.category}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button 
                  className="w-full bg-bright-blue/10 hover:bg-bright-blue/20 text-bright-blue py-2 px-4 rounded-lg transition-colors duration-300 border border-bright-blue/30"
                  onClick={() => {
                    // Show article content in modal or expand
                    const content = document.createElement('div');
                    content.innerHTML = `
                      <div class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                        <div class="bg-slate-900 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto p-8 border border-bright-blue/30">
                          <div class="flex justify-between items-start mb-6">
                            <h1 class="text-2xl font-bold text-bright-blue">${article.title}</h1>
                            <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
                          </div>
                          <div class="prose prose-invert max-w-none">
                            ${article.content}
                          </div>
                        </div>
                      </div>
                    `;
                    document.body.appendChild(content);
                  }}
                >
                  Ler Artigo Completo
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
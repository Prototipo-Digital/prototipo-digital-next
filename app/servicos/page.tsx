import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ContactModal from '@/components/ContactModal';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Gestão de Redes Sociais, Criação de Conteúdo, Automação com IA, Estratégia Digital, Branding e Publicidade Digital.',
  alternates: { canonical: 'https://prototipodigital.com/servicos' },
};

const services = [
  {
    number: '01',
    title: 'Gestão de Redes Sociais',
    description: 'Presença consistente e estratégica em todas as plataformas. Criamos, publicamos e gerimos o teu conteúdo para gerar engagement real e construir comunidade à volta da tua marca.',
    tags: ['Instagram', 'LinkedIn', 'TikTok', 'Facebook'],
    items: ['Estratégia de conteúdo mensal', 'Criação e publicação de posts', 'Gestão de comentários', 'Relatórios de performance'],
  },
  {
    number: '02',
    title: 'Criação de Conteúdo',
    description: 'Conteúdo visual e textual premium que comunica autoridade. De copywriting a design, cada peça serve um propósito estratégico e é criada para impactar o teu público.',
    tags: ['Copy', 'Design', 'Vídeo', 'Fotografia'],
    items: ['Copywriting estratégico', 'Design gráfico profissional', 'Produção de vídeo', 'Conteúdo para anúncios'],
  },
  {
    number: '03',
    title: 'Automação com IA',
    description: 'Workflows inteligentes que poupam tempo e amplificam resultados. Integração de IA em processos de marketing, vendas e atendimento ao cliente.',
    tags: ['Make', 'n8n', 'ChatGPT', 'Zapier'],
    items: ['Automação de respostas', 'Workflows de marketing', 'Integração de ferramentas', 'Relatórios automáticos'],
    highlight: true,
  },
  {
    number: '04',
    title: 'Estratégia Digital',
    description: 'Análise, planeamento e execução orientados a dados. Definimos metas claras e construímos o caminho para as atingir com precisão e foco em resultados.',
    tags: ['Analytics', 'SEO', 'Growth', 'CRO'],
    items: ['Diagnóstico de marca', 'Plano estratégico 90 dias', 'Análise competitiva', 'KPIs e métricas'],
  },
  {
    number: '05',
    title: 'Branding',
    description: 'Identidade visual coerente que reflecte os teus valores. Desde o logótipo à paleta de cores, criamos uma marca memorável que se distingue no mercado.',
    tags: ['Identidade', 'Guia de Marca', 'UI', 'Naming'],
    items: ['Logótipo e identidade', 'Guia de estilo de marca', 'Templates de conteúdo', 'Brand voice'],
  },
  {
    number: '06',
    title: 'Publicidade Digital',
    description: 'Campanhas pagas com ROI mensurável. Gerimos Meta Ads, Google Ads e LinkedIn com foco em conversão e custo eficiente para o teu negócio.',
    tags: ['Meta Ads', 'Google Ads', 'LinkedIn Ads'],
    items: ['Criação de campanhas', 'Gestão de orçamento', 'A/B testing', 'Relatórios de ROI'],
  },
];

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Logo background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/images/logo.png"
              alt=""
              width={800}
              height={200}
              className="w-[600px] lg:w-[900px] object-contain select-none"
              style={{ opacity: 0.03 }}
              aria-hidden
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#E83030' }}
            >
              O que fazemos
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6"
              style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
            >
              Os nossos{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Serviços
              </span>
            </h1>
            <p className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: '#71717A' }}>
              Do estratégico ao operacional, cobrimos todas as dimensões do marketing digital moderno para fazer a tua marca crescer.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="relative pb-24 lg:pb-32 overflow-hidden">
          {/* Logo background (bottom) */}
          <div className="absolute bottom-0 right-0 pointer-events-none">
            <Image
              src="/images/logo.png"
              alt=""
              width={600}
              height={150}
              className="w-[400px] lg:w-[600px] object-contain select-none"
              style={{ opacity: 0.02 }}
              aria-hidden
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.number}
                  className="group relative p-7 lg:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover-card"
                  style={{
                    background: svc.highlight ? 'rgba(232,48,48,0.04)' : 'rgba(255,255,255,0.02)',
                    borderColor: svc.highlight ? 'rgba(232,48,48,0.2)' : 'rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Number */}
                  <span className="text-xs font-mono mb-5 block" style={{ color: '#3F3F46' }}>{svc.number}</span>

                  {/* Title */}
                  <div className="flex items-start justify-between mb-4">
                    <h2
                      className="text-lg font-bold text-white leading-snug"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {svc.title}
                    </h2>
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                      style={{ color: '#E83030' }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#71717A' }}>
                    {svc.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-1.5 mb-5">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs" style={{ color: '#A1A1AA' }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#E83030' }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-medium"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          color: '#71717A',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <p className="text-sm mb-5" style={{ color: '#71717A' }}>
                Não sabes qual o serviço certo para ti?
              </p>
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: '#E83030', boxShadow: '0 0 30px rgba(232,48,48,0.25)' }}
              >
                Fala connosco
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

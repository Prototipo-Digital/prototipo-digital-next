'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Share2, PenTool, Bot, BarChart3, Palette, Megaphone, ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Share2,
    title: 'Gestão de Redes Sociais',
    description:
      'Presença consistente e estratégica em todas as plataformas. Criamos, publicamos e gerimos o teu conteúdo para gerar engagement real.',
    tags: ['Instagram', 'LinkedIn', 'TikTok'],
  },
  {
    icon: PenTool,
    title: 'Criação de Conteúdo',
    description:
      'Conteúdo visual e textual premium que comunica autoridade. De copywriting a design, cada peça serve um propósito estratégico.',
    tags: ['Copy', 'Design', 'Vídeo'],
  },
  {
    icon: Bot,
    title: 'Automação com IA',
    description:
      'Workflows inteligentes que poupam tempo e amplificam resultados. Integração de IA em processos de marketing, vendas e atendimento.',
    tags: ['Make', 'n8n', 'ChatGPT'],
    highlight: true,
  },
  {
    icon: BarChart3,
    title: 'Estratégia Digital',
    description:
      'Análise, planeamento e execução orientados a dados. Definimos metas claras e construímos o caminho para as atingir.',
    tags: ['Analytics', 'SEO', 'Growth'],
  },
  {
    icon: Palette,
    title: 'Branding',
    description:
      'Identidade visual coerente que reflecte os teus valores. Desde o logótipo à paleta de cores, criamos uma marca memorável.',
    tags: ['Identidade', 'Guia de Marca', 'UI'],
  },
  {
    icon: Megaphone,
    title: 'Publicidade Digital',
    description:
      'Campanhas pagas com ROI mensurável. Gerimos Meta Ads, Google Ads e LinkedIn com foco em conversão e custo eficiente.',
    tags: ['Meta Ads', 'Google Ads', 'LinkedIn'],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="servicos"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Subtle glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px', height: '700px',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(232,48,48,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#E83030' }}
          >
            Serviços
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
          >
            Tudo o que a tua marca precisa{' '}
            <br className="hidden sm:block" />
            para{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              crescer
            </span>
          </h2>
          <p className="text-base lg:text-lg max-w-xl mx-auto" style={{ color: '#71717A' }}>
            Do estratégico ao operacional, cobrimos todas as dimensões do marketing digital moderno.
          </p>
        </motion.div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="hover-card group relative p-6 lg:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  background: svc.highlight ? 'rgba(232,48,48,0.04)' : 'rgba(255,255,255,0.02)',
                  borderColor: svc.highlight ? 'rgba(232,48,48,0.2)' : 'rgba(255,255,255,0.07)',
                }}
              >
                {/* Icon */}
                <div
                  className="inline-flex p-3 rounded-xl mb-5"
                  style={{ background: 'rgba(232,48,48,0.1)' }}
                >
                  <Icon size={20} style={{ color: '#E83030' }} />
                </div>

                {/* Title row */}
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-base font-bold text-white leading-snug"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    {svc.title}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 shrink-0"
                    style={{ color: '#E83030' }}
                  />
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#71717A' }}>
                  {svc.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag, j) => (
                    <span
                      key={j}
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
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm mb-4" style={{ color: '#71717A' }}>
            Não sabes qual o serviço certo para ti?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contacto');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: '#E83030' }}
          >
            Fala connosco e encontramos a solução ideal
            <ArrowUpRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

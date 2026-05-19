'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Ferreira',
    role: 'CEO, Boutique Atelier',
    quote:
      'A Protótipo Digital transformou completamente a presença online da minha marca. Em 3 meses, triplicámos o engagement e as vendas pelo Instagram cresceram 80%. Estratégia que funciona de verdade.',
    stars: 5,
    tag: 'E-commerce',
  },
  {
    name: 'Miguel Santos',
    role: 'Fundador, TechStart Lisboa',
    quote:
      'O que mais me surpreendeu foi a abordagem estratégica. Antes de criar qualquer conteúdo, analisaram o negócio, o mercado e os clientes. O resultado foi uma comunicação muito mais eficaz e profissional.',
    stars: 5,
    tag: 'Tecnologia',
  },
  {
    name: 'Carla Oliveira',
    role: 'Directora de Marketing, MedCare',
    quote:
      'A integração de IA nos processos de marketing foi um game-changer para nós. Poupamos tempo, reduzimos custos e a qualidade do conteúdo melhorou significativamente. Recomendo sem hesitar.',
    stars: 5,
    tag: 'Saúde',
  },
  {
    name: 'Rui Costa',
    role: 'Proprietário, Costa Imobiliária',
    quote:
      'Finalmente uma agência que entende que marketing sem estratégia é desperdício. A equipa da Protótipo Digital criou um plano sólido e executou-o com excelência. Os resultados falam por si.',
    stars: 5,
    tag: 'Imobiliário',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="testemunhos"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
      />

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '800px', height: '600px',
          bottom: '-100px', left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse, rgba(232,48,48,0.06) 0%, rgba(232,48,48,0.01) 55%, transparent 75%)',
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
            Testemunhos
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
          >
            O que dizem{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              os nossos clientes
            </span>
          </h2>
          <p className="text-base lg:text-lg" style={{ color: '#71717A' }}>
            Resultados reais, clientes reais.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-7 lg:p-8 rounded-2xl border"
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
            >
              {/* Quote icon */}
              <Quote
                size={24}
                className="absolute top-7 right-7 opacity-10"
                style={{ color: '#E83030' }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={12} fill="#E83030" style={{ color: '#E83030' }} />
                ))}
              </div>

              {/* Quote text */}
              <p
                className="text-sm lg:text-base leading-relaxed mb-6"
                style={{ color: '#A1A1AA' }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ background: 'linear-gradient(135deg, #E83030, #C42020)' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: '#71717A' }}>{t.role}</div>
                  </div>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-medium border"
                  style={{
                    background: 'rgba(232,48,48,0.07)',
                    borderColor: 'rgba(232,48,48,0.15)',
                    color: '#FF6060',
                  }}
                >
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

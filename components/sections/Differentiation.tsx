'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, FileText, Zap, Star, BarChart2, Cpu } from 'lucide-react';
import Image from 'next/image';

const differentiators = [
  {
    icon: Brain,
    title: 'Estratégia antes de conteúdo',
    description: 'Não criamos conteúdo por criar. Cada peça começa com uma pergunta: serve o objectivo?',
  },
  {
    icon: Cpu,
    title: 'IA integrada no processo',
    description: 'Usamos inteligência artificial para ser mais rápidos, mais precisos e mais escaláveis.',
  },
  {
    icon: Zap,
    title: 'Automação inteligente',
    description: 'Workflows que trabalham 24h por dia. O teu negócio cresce enquanto dormes.',
  },
  {
    icon: FileText,
    title: 'Conteúdo premium',
    description: 'Qualidade acima de quantidade. Cada post, vídeo ou campanha é feito para impactar.',
  },
  {
    icon: BarChart2,
    title: 'Visão orientada a dados',
    description: 'Decisões baseadas em métricas reais, não em opiniões. Medimos tudo o que importa.',
  },
  {
    icon: Star,
    title: 'Execução moderna',
    description: 'Stack de ferramentas actuais, metodologias ágeis e uma equipa que vive a indústria.',
  },
];

export default function Differentiation() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="diferenciacao"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#E83030' }}
            >
              Porquê a Protótipo Digital
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6"
              style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
            >
              Não somos uma agência{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                comum
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base lg:text-lg leading-relaxed mb-10"
              style={{ color: '#71717A' }}
            >
              Enquanto a maioria das agências vende posts, nós vendemos crescimento.
              A diferença está na forma como pensamos, nas ferramentas que usamos e nos
              resultados que entregamos.
            </motion.p>

            {/* Differentiator list */}
            <div className="space-y-5">
              {differentiators.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="flex-shrink-0 p-2 rounded-lg mt-0.5"
                      style={{ background: 'rgba(232,48,48,0.08)' }}
                    >
                      <Icon size={15} style={{ color: '#E83030' }} />
                    </div>
                    <div>
                      <h4
                        className="text-sm font-bold text-white mb-0.5"
                        style={{ fontFamily: "'Satoshi', sans-serif" }}
                      >
                        {d.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>
                        {d.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl -z-10"
              style={{
                background: 'radial-gradient(circle at 50% 60%, rgba(232,48,48,0.14) 0%, rgba(232,48,48,0.04) 55%, transparent 75%)',
                transform: 'scale(1.15)',
              }}
            />

            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'linear-gradient(160deg, #1A1A1A 0%, #0A0A0A 100%)',
              }}
            >
              <Image
                src="/images/founder-1200w.webp"
                alt="Fundador Protótipo Digital"
                width={600}
                height={500}
                className="w-full object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.8) 100%)',
                }}
              />

              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p
                  className="text-base lg:text-lg font-medium text-white leading-snug mb-2"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  "Estratégia sem execução é apenas uma boa ideia."
                </p>
                <p className="text-xs" style={{ color: '#71717A' }}>
                  — Protótipo Digital
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-4 -right-4 lg:-right-6"
            >
              <div
                className="flex flex-col items-center p-4 rounded-2xl border"
                style={{
                  background: 'rgba(10,10,10,0.97)',
                  borderColor: 'rgba(232,48,48,0.3)',
                  boxShadow: '0 0 30px rgba(232,48,48,0.1)',
                }}
              >
                <span
                  className="text-2xl font-black"
                  style={{ fontFamily: "'Satoshi', sans-serif", color: '#E83030' }}
                >
                  +98%
                </span>
                <span className="text-xs mt-1" style={{ color: '#71717A' }}>
                  Satisfação
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

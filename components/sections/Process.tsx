'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Estratégia',
    subtitle: 'Entender antes de agir',
    description:
      'Começamos por analisar a tua marca, o mercado e os teus objectivos. Criamos uma estratégia clara, com metas definidas e um plano de acção.',
    items: ['Diagnóstico de marca', 'Análise competitiva', 'Definição de objectivos', 'Plano estratégico'],
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Implementação',
    subtitle: 'Executar com precisão',
    description:
      'Com a estratégia definida, executamos. Criamos conteúdo, gerimos plataformas, lançamos campanhas e activamos automações com IA.',
    items: ['Criação de conteúdo', 'Gestão de plataformas', 'Campanhas pagas', 'Automações IA'],
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Escala',
    subtitle: 'Crescer com dados',
    description:
      'Analisamos o que funciona, optimizamos o que pode melhorar e escalamos o que está a gerar resultados. Crescimento contínuo e mensurável.',
    items: ['Análise de performance', 'Optimização contínua', 'Relatórios de impacto', 'Escala sustentada'],
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="processo"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#E83030' }}
          >
            Como trabalhamos
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
          >
            Um processo pensado{' '}
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
              resultados reais
            </span>
          </h2>
          <p className="text-base lg:text-lg max-w-xl mx-auto" style={{ color: '#71717A' }}>
            Sem improvisos, sem promessas vazias. Cada passo tem um propósito claro.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-12 left-0 right-0 h-px hidden lg:block pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.06) 30%, rgba(232,48,48,0.2) 50%, rgba(255,255,255,0.06) 70%, transparent 90%)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col"
                >
                  {/* Step indicator */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="relative flex items-center justify-center w-12 h-12 rounded-full border shrink-0"
                      style={{
                        background: 'rgba(232,48,48,0.1)',
                        borderColor: 'rgba(232,48,48,0.3)',
                        boxShadow: '0 0 20px rgba(232,48,48,0.1)',
                      }}
                    >
                      <Icon size={20} style={{ color: '#E83030' }} />
                    </div>
                    <span
                      className="text-xs font-mono"
                      style={{ color: '#3F3F46' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 p-6 rounded-2xl border"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      borderColor: 'rgba(255,255,255,0.07)',
                    }}
                  >
                    <div className="mb-1 text-xs font-medium" style={{ color: '#71717A' }}>
                      {step.subtitle}
                    </div>
                    <h3
                      className="text-xl font-bold text-white mb-3"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#71717A' }}>
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm" style={{ color: '#A1A1AA' }}>
                          <span
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: '#E83030' }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }}
      />
    </section>
  );
}

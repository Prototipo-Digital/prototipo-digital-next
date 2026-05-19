'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Brain, Target, Users } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '+100',
    label: 'Conteúdos criados',
    description: 'Posts, vídeos e campanhas com resultados mensuráveis.',
  },
  {
    icon: Brain,
    value: 'IA',
    label: 'Integrada no processo',
    description: 'Cada projecto utiliza inteligência artificial para maximizar resultados.',
  },
  {
    icon: Target,
    value: '100%',
    label: 'Orientado a crescimento',
    description: 'Estratégia sempre focada em métricas que importam ao negócio.',
  },
  {
    icon: Users,
    value: 'Multi',
    label: 'Sectores de actuação',
    description: 'Experiência em e-commerce, serviços, saúde e tecnologia.',
  },
];

const trust = [
  'Estratégia antes de conteúdo',
  'IA aplicada ao marketing',
  'Resultados mensuráveis',
  'Equipa dedicada',
];

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="prova-social"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,48,48,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {trust.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.08)',
                color: '#A1A1AA',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#E83030' }} />
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="hover-card relative group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="inline-flex p-2.5 rounded-xl mb-4"
                  style={{ background: 'rgba(232,48,48,0.1)' }}
                >
                  <Icon size={18} style={{ color: '#E83030' }} />
                </div>
                <div
                  className="text-3xl font-black mb-1"
                  style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}
                >
                  {m.value}
                </div>
                <div className="text-sm font-semibold text-white mb-2">{m.label}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#71717A' }}>
                  {m.description}
                </p>
              </motion.div>
            );
          })}
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

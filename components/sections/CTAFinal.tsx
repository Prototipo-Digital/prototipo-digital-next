'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useContactModal } from '@/lib/contact-modal-context';

export default function CTAFinal() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { open: openModal } = useContactModal();

  return (
    <section
      ref={ref}
      id="contacto"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,48,48,0.3), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '900px', height: '600px',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(232,48,48,0.08) 0%, rgba(232,48,48,0.02) 50%, transparent 75%)',
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10 text-center">

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: '#E83030' }}
        >
          Vamos conversar
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]"
          style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
        >
          Pronto para elevar{' '}
          a presença digital{' '}
          da tua{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            marca?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base lg:text-lg leading-relaxed mb-8"
          style={{ color: '#71717A' }}
        >
          Preenche o formulário e recebe uma proposta personalizada em 48h.
          Sem compromisso, sem custo.
        </motion.p>

        {/* Promise list */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10"
        >
          {['Resposta em menos de 48h', 'Proposta personalizada', 'Sem compromisso'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm" style={{ color: '#A1A1AA' }}>
              <CheckCircle2 size={14} style={{ color: '#E83030' }} />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={openModal}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: '#E83030', boxShadow: '0 0 40px rgba(232,48,48,0.3)' }}
          >
            Pede o teu orçamento
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

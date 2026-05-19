'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como funciona o processo de trabalho?',
    answer:
      'O nosso processo tem 3 fases: Estratégia, Implementação e Escala. Começamos por analisar a tua marca, mercado e objectivos. Definimos uma estratégia clara, executamos com precisão e optimizamos continuamente com base nos resultados. Cada projecto começa com uma reunião de diagnóstico sem compromisso.',
  },
  {
    question: 'Trabalham com pequenas empresas?',
    answer:
      'Sim. Trabalhamos com empresas de todos os tamanhos, desde freelancers e startups até empresas estabelecidas. O que importa não é o tamanho da empresa, mas a ambição de crescer. Temos pacotes adaptados a diferentes orçamentos e fases de negócio.',
  },
  {
    question: 'Fazem gestão completa das redes sociais?',
    answer:
      'Sim, oferecemos gestão completa: estratégia de conteúdo, criação, publicação, gestão de comentários e relatórios de performance. Podes optar por uma gestão integral ou por um modelo misto onde a tua equipa colabora connosco.',
  },
  {
    question: 'Quanto tempo demora a ver resultados?',
    answer:
      'Depende do objectivo. Em campanhas pagas, os primeiros resultados surgem em dias. Em estratégias orgânicas, o crescimento consistente começa a ser visível entre 30 a 90 dias. Somos transparentes nas expectativas e trabalhamos para resultados sustentáveis a longo prazo.',
  },
  {
    question: 'Como usam a IA no marketing?',
    answer:
      'Utilizamos IA em várias dimensões: geração e optimização de conteúdo, análise de dados e tendências, automação de workflows, personalização de comunicação e atendimento. Não substituímos a criatividade humana — amplificamo-la com tecnologia.',
  },
  {
    question: 'Fazem gestão de anúncios pagos?',
    answer:
      'Sim. Gerimos campanhas em Meta Ads (Facebook/Instagram), Google Ads e LinkedIn Ads. O nosso foco está sempre no ROI — cada euro investido deve gerar resultados mensuráveis. Trabalhamos com orçamentos a partir de €300/mês em publicidade.',
  },
];

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="faq"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#E83030' }}
          >
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
          >
            Perguntas{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              frequentes
            </span>
          </h2>
          <p className="text-base lg:text-lg" style={{ color: '#71717A' }}>
            Tudo o que precisas de saber antes de começarmos.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border px-6 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <AccordionTrigger
                  className="py-5 text-sm font-semibold text-white hover:no-underline hover:text-white text-left"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5 text-sm leading-relaxed"
                  style={{ color: '#A1A1AA' }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-sm" style={{ color: '#71717A' }}>
            Tens mais perguntas?{' '}
            <button
              onClick={() => {
                const el = document.querySelector('#contacto');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: '#E83030' }}
            >
              Fala connosco
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

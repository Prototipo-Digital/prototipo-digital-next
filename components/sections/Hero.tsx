'use client';

import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: '+100',  label: 'Conteúdos criados' },
  { value: 'IA',    label: 'Integrada' },
  { value: '100%',  label: 'Orientado a resultados' },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20"
      style={{ background: '#0A0A0A' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red glow — top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '900px', height: '900px',
          top: '-350px', left: '-250px',
          background: 'radial-gradient(circle, rgba(232,48,48,0.10) 0%, rgba(232,48,48,0.03) 45%, transparent 70%)',
        }}
      />

      {/* Red glow — bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px', height: '700px',
          bottom: '-250px', right: '-150px',
          background: 'radial-gradient(circle, rgba(232,48,48,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">

          {/* Left — copy */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center py-8 lg:py-0">
            {/* Badge */}
            <div className="mb-8 hero-fade-up">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border"
                style={{
                  background: 'rgba(232,48,48,0.08)',
                  borderColor: 'rgba(232,48,48,0.2)',
                  color: '#FF6060',
                }}
              >
                <Sparkles size={11} />
                Marketing Digital com IA
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6 hero-fade-up"
              style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", animationDelay: '0.1s' }}
            >
              Marketing Digital{' '}
              <br className="hidden sm:block" />
              com{' '}
              <span
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Estratégia,
              </span>
              <br />
              IA e Performance
            </h1>

            {/* Subheadline */}
            <p
              className="text-base lg:text-lg text-[#A1A1AA] leading-relaxed max-w-xl mb-10 hero-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              A Protótipo Digital ajuda marcas e negócios a crescer através de{' '}
              <span className="text-white font-medium">estratégia digital</span>,{' '}
              <span className="text-white font-medium">conteúdos premium</span> e{' '}
              <span className="text-white font-medium">automação inteligente</span>.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14 hero-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <button
                onClick={() => scrollTo('#contacto')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: '#E83030', boxShadow: '0 0 30px rgba(232,48,48,0.3)' }}
              >
                Pede o teu orçamento
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('#servicos')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white border transition-all duration-200 hover:bg-white/[0.05]"
                style={{ borderColor: 'rgba(255,255,255,0.12)' }}
              >
                Ver serviços
                <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>

            {/* Stats */}
            <div
              className="flex items-center gap-8 flex-wrap hero-fade-up"
              style={{ animationDelay: '0.45s' }}
            >
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-2xl font-black"
                    style={{ fontFamily: "'Satoshi', sans-serif", color: '#E83030' }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs text-[#71717A] mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="relative hero-scale-up"
              style={{ animationDelay: '0.2s' }}
            >
              {/* Glow behind portrait */}
              <div
                className="absolute inset-0 -z-10 rounded-3xl"
                style={{
                  background: 'radial-gradient(circle at 50% 80%, rgba(232,48,48,0.18) 0%, rgba(232,48,48,0.05) 50%, transparent 75%)',
                  transform: 'scale(1.15)',
                }}
              />

              {/* Portrait */}
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)',
                }}
              >
                <Image
                  src="/images/founder.webp"
                  alt="Fundador da Protótipo Digital"
                  width={480}
                  height={580}
                  className="w-full max-w-[320px] lg:max-w-[420px] object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 320px, 420px"
                />

                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32"
                  style={{
                    background: 'linear-gradient(to top, #0A0A0A 0%, transparent 100%)',
                  }}
                />

                {/* Floating badge */}
                <div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap hero-fade-up"
                  style={{ animationDelay: '0.8s' }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border"
                    style={{
                      background: 'rgba(10,10,10,0.95)',
                      borderColor: 'rgba(232,48,48,0.3)',
                      color: '#FF6060',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: '#E83030' }}
                    />
                    Disponível para novos projectos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#prova-social')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3F3F46] hover:text-[#71717A] transition-colors hero-fade-up"
        style={{ animationDelay: '1.5s' }}
        aria-label="Scroll down"
      >
        <div className="scroll-bounce">
          <ArrowDown size={16} />
        </div>
      </button>
    </section>
  );
}

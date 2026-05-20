import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { Brain, FileText, Zap, Star, BarChart2, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Não somos uma agência comum. Estratégia, IA e execução moderna para fazer a tua marca crescer.',
  alternates: { canonical: 'https://prototipodigital.com/sobre' },
};

const differentiators = [
  { icon: Brain, title: 'Estratégia antes de conteúdo', description: 'Não criamos conteúdo por criar. Cada peça começa com uma pergunta: serve o objectivo?' },
  { icon: Cpu, title: 'IA integrada no processo', description: 'Usamos inteligência artificial para ser mais rápidos, mais precisos e mais escaláveis.' },
  { icon: Zap, title: 'Automação inteligente', description: 'Workflows que trabalham 24h por dia. O teu negócio cresce enquanto dormes.' },
  { icon: FileText, title: 'Conteúdo premium', description: 'Qualidade acima de quantidade. Cada post, vídeo ou campanha é feito para impactar.' },
  { icon: BarChart2, title: 'Visão orientada a dados', description: 'Decisões baseadas em métricas reais, não em opiniões. Medimos tudo o que importa.' },
  { icon: Star, title: 'Execução moderna', description: 'Stack de ferramentas actuais, metodologias ágeis e uma equipa que vive a indústria.' },
];

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
        <section className="relative pt-32 pb-24 lg:pb-32 overflow-hidden">

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

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              {/* Left */}
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#E83030' }}>
                  Porquê a Protótipo Digital
                </span>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.05]"
                  style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
                >
                  Não somos uma agência{' '}
                  <span style={{ background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    comum
                  </span>
                </h1>
                <p className="text-base lg:text-lg leading-relaxed mb-10" style={{ color: '#71717A' }}>
                  Enquanto a maioria das agências vende posts, nós vendemos crescimento.
                  A diferença está na forma como pensamos, nas ferramentas que usamos e nos resultados que entregamos.
                </p>

                <div className="space-y-5">
                  {differentiators.map((d) => {
                    const Icon = d.icon;
                    return (
                      <div key={d.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 rounded-lg mt-0.5" style={{ background: 'rgba(232,48,48,0.08)' }}>
                          <Icon size={15} style={{ color: '#E83030' }} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white mb-0.5" style={{ fontFamily: "'Satoshi', sans-serif" }}>{d.title}</h3>
                          <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{d.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl -z-10" style={{ background: 'radial-gradient(circle at 50% 60%, rgba(232,48,48,0.14) 0%, transparent 75%)', transform: 'scale(1.15)' }} />
                <div className="relative rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(160deg, #1A1A1A 0%, #0A0A0A 100%)' }}>
                  <Image
                    src="/images/founder-1200w.webp"
                    alt="Fundador Protótipo Digital"
                    width={600}
                    height={500}
                    className="w-full object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.8) 100%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p className="text-base lg:text-lg font-medium text-white leading-snug mb-2" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                      "Estratégia sem execução é apenas uma boa ideia."
                    </p>
                    <p className="text-xs" style={{ color: '#71717A' }}>— Protótipo Digital</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 lg:-right-6">
                  <div className="flex flex-col items-center p-4 rounded-2xl border" style={{ background: 'rgba(10,10,10,0.97)', borderColor: 'rgba(232,48,48,0.3)', boxShadow: '0 0 30px rgba(232,48,48,0.1)' }}>
                    <span className="text-2xl font-black" style={{ fontFamily: "'Satoshi', sans-serif", color: '#E83030' }}>+98%</span>
                    <span className="text-xs mt-1" style={{ color: '#71717A' }}>Satisfação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

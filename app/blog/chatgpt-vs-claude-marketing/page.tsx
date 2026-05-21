import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ModalTriggerButton from '@/components/ui/ModalTriggerButton';
import { ArrowLeft, Clock, Tag, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ChatGPT vs Claude: Qual Usar para Marketing Digital?',
  description: 'Comparação direta entre os dois melhores modelos de IA para tarefas de marketing — copy, estratégia, análise e criação de conteúdo.',
  alternates: { canonical: 'https://prototipodigital.com/blog/chatgpt-vs-claude-marketing' },
};

const comparison = [
  { task: 'Copywriting criativo', chatgpt: '★★★★☆', claude: '★★★★★', winner: 'claude', note: 'Claude mantém melhor o tom de voz ao longo de textos longos.' },
  { task: 'Posts de redes sociais', chatgpt: '★★★★★', claude: '★★★★☆', winner: 'chatgpt', note: 'ChatGPT é mais rápido e variado para formatos curtos.' },
  { task: 'Análise de concorrência', chatgpt: '★★★☆☆', claude: '★★★★★', winner: 'claude', note: 'Claude é superior em raciocínio analítico e síntese.' },
  { task: 'Estratégia de conteúdo', chatgpt: '★★★★☆', claude: '★★★★★', winner: 'claude', note: 'Claude estrutura planos mais coerentes e detalhados.' },
  { task: 'Email marketing', chatgpt: '★★★★☆', claude: '★★★★★', winner: 'claude', note: 'Claude escreve emails com melhor estrutura persuasiva.' },
  { task: 'Geração de ideias em massa', chatgpt: '★★★★★', claude: '★★★★☆', winner: 'chatgpt', note: 'ChatGPT é imbatível para brainstorming de volumes altos.' },
  { task: 'SEO e meta descriptions', chatgpt: '★★★★★', claude: '★★★★☆', winner: 'chatgpt', note: 'ChatGPT tem melhor "instinto" para keywords naturais.' },
  { task: 'Seguir instruções complexas', chatgpt: '★★★☆☆', claude: '★★★★★', winner: 'claude', note: 'Claude cumpre prompts longos e detalhados com mais precisão.' },
];

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
        <div className="pt-28 pb-0 max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#52525B' }}>
            <ArrowLeft size={14} />Voltar ao Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto px-6 lg:px-8 pt-8 pb-24">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
              style={{ background: 'rgba(232,48,48,0.12)', color: '#E83030', border: '1px solid rgba(232,48,48,0.2)' }}>
              <Tag size={10} />Ferramentas IA
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{ color: '#52525B' }}>
              <Clock size={12} />8 min leitura
            </span>
            <span className="text-xs" style={{ color: '#3F3F46' }}>21 Mai 2025</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}>
            ChatGPT vs Claude:{' '}
            <span style={{ background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Qual Usar para Marketing Digital?
            </span>
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: '#A1A1AA' }}>
            Com tantas ferramentas de IA disponíveis, a pergunta que mais ouvimos é: "qual devo usar?". Testámos ambos extensivamente em tarefas de marketing real e aqui estão os resultados honestos.
          </p>

          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-14 border" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <Image src="https://images.unsplash.com/photo-1676573040366-a80d97c82c16?w=1200&q=80"
              alt="ChatGPT vs Claude para marketing digital" fill className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px" priority />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.6) 100%)' }} />
          </div>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>O que diferencia os dois?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'ChatGPT (OpenAI)', desc: 'Mais popular, interface intuitiva, plugin ecosystem vasto. Melhor para tarefas rápidas, variadas e alto volume. GPT-4o é o modelo de referência para marketing de conteúdo.', color: '#10A37F' },
                  { name: 'Claude (Anthropic)', desc: 'Raciocínio mais sofisticado, melhor a seguir instruções complexas. Excele em textos longos, análise estratégica e tarefas que exigem consistência de tom.', color: '#CC785C' },
                ].map(tool => (
                  <div key={tool.name} className="p-5 rounded-xl border" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: tool.color }} />
                      <span className="text-sm font-bold text-white">{tool.name}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{tool.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Comparação por Tarefa
              </h2>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div className="grid grid-cols-4 px-4 py-3 border-b text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)', color: '#52525B' }}>
                  <span className="col-span-2">Tarefa</span>
                  <span className="text-center">ChatGPT</span>
                  <span className="text-center">Claude</span>
                </div>
                {comparison.map((row, i) => (
                  <div key={i} className="border-b last:border-b-0" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="grid grid-cols-4 px-4 py-3.5 items-center">
                      <div className="col-span-2">
                        <p className="text-sm font-medium text-white">{row.task}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#52525B' }}>{row.note}</p>
                      </div>
                      <p className="text-center text-sm"
                        style={{ color: row.winner === 'chatgpt' ? '#22C55E' : '#A1A1AA' }}>{row.chatgpt}</p>
                      <p className="text-center text-sm"
                        style={{ color: row.winner === 'claude' ? '#22C55E' : '#A1A1AA' }}>{row.claude}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>A Recomendação Prática</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#A1A1AA' }}>
                Não escolhas um — usa os dois. A abordagem mais eficaz é ter <strong className="text-white">ChatGPT para volume e velocidade</strong> (posts rápidos, listas de ideias, variações de copy curto) e <strong className="text-white">Claude para qualidade e profundidade</strong> (estratégia, textos longos, análise de mercado).
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
                Se tiveres de escolher apenas um, e o foco for marketing de conteúdo profissional com consistência de marca, o Claude tem vantagem. Se precisares de volume e versatilidade, o ChatGPT ganha.
              </p>
            </section>

            <div className="rounded-2xl p-8 lg:p-10 text-center border"
              style={{ background: 'rgba(232,48,48,0.04)', borderColor: 'rgba(232,48,48,0.15)' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#E83030' }}>
                Preferes não te preocupar com isto?
              </p>
              <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Nós gerimos a IA por ti
              </h3>
              <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#71717A' }}>
                Integramos as melhores ferramentas de IA no teu processo de marketing — sem curva de aprendizagem da tua parte.
              </p>
              <ModalTriggerButton
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: '#E83030', boxShadow: '0 0 30px rgba(232,48,48,0.25)' }}>
                Fala connosco <ArrowUpRight size={15} />
              </ModalTriggerButton>
            </div>

            <Link href="/blog" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#52525B' }}>
              <ArrowLeft size={14} />Ver todos os artigos
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

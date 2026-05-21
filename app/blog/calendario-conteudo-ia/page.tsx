import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ModalTriggerButton from '@/components/ui/ModalTriggerButton';
import { ArrowLeft, Clock, Tag, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Criar um Calendário de Conteúdo com IA em 30 Minutos',
  description: 'Guia passo a passo para usar IA e criar um mês inteiro de conteúdo estratégico para as tuas redes sociais.',
  alternates: { canonical: 'https://prototipodigital.com/blog/calendario-conteudo-ia' },
};

const steps = [
  {
    step: '01',
    title: 'Define o contexto da marca (5 min)',
    prompt: `Vou criar um calendário de conteúdo para [marca]. Aqui está o contexto:
— Sector: [ex. imobiliário, saúde, tecnologia]
— Público-alvo: [ex. empresários 35-50 anos]
— Tom de voz: [ex. profissional e direto]
— Objetivo principal: [ex. gerar leads, aumentar notoriedade]
— Plataformas: [Instagram, LinkedIn, etc.]
— Frequência: [ex. 4 posts por semana]

Confirma que entendeste e pede-me qualquer informação em falta.`,
    note: 'Este passo "treina" a IA com o contexto da marca antes de começar a gerar.',
  },
  {
    step: '02',
    title: 'Gera os pilares de conteúdo (5 min)',
    prompt: `Com base no contexto que te dei, sugere 4 pilares de conteúdo para [marca] com:
— Nome do pilar
— Objetivo (o que queremos comunicar)
— 2 exemplos de temas
— Proporção recomendada (% do total de posts)

Formato: tabela.`,
    note: 'Os pilares são as categorias temáticas que garantem variedade e estratégia no feed.',
  },
  {
    step: '03',
    title: 'Gera o calendário do mês (10 min)',
    prompt: `Cria um calendário de conteúdo para [Mês] com [N] posts por semana, distribuídos pelos 4 pilares definidos.

Para cada post inclui:
— Data e dia da semana
— Pilar
— Formato (carrossel, reels, imagem estática, texto)
— Título/tema do post
— Melhor hora de publicação

Apresenta em formato de tabela.`,
    note: 'Pede sempre o formato de tabela — é mais fácil de copiar para o teu gestor de tarefas.',
  },
  {
    step: '04',
    title: 'Escreve os posts em lote (10 min)',
    prompt: `Escreve o copy completo para os posts da semana 1:
[lista os 4 posts da semana 1 da tabela anterior]

Para cada post:
— Caption completo
— Call-to-action
— 5 hashtags relevantes

Tom de voz: [repete o tom definido no passo 1]`,
    note: 'Ao gerar por semana (não por mês inteiro), os outputs são mais focados e de maior qualidade.',
  },
];

const tools = [
  { name: 'Notion / ClickUp', use: 'Organizar o calendário e acompanhar o estado de cada post.' },
  { name: 'ChatGPT / Claude', use: 'Gerar os textos com os prompts deste guia.' },
  { name: 'Canva', use: 'Criar os visuais com os textos gerados.' },
  { name: 'Buffer / Later', use: 'Agendar e publicar automaticamente nas plataformas.' },
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
              <Tag size={10} />Estratégia
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{ color: '#52525B' }}>
              <Clock size={12} />7 min leitura
            </span>
            <span className="text-xs" style={{ color: '#3F3F46' }}>22 Mai 2025</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}>
            Como Criar um Calendário de Conteúdo com IA{' '}
            <span style={{ background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              em 30 Minutos
            </span>
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: '#A1A1AA' }}>
            Planear um mês de conteúdo costumava levar meio dia. Com a abordagem certa de prompting, podes fazê-lo em 30 minutos — com mais consistência estratégica e menos bloqueios criativos.
          </p>

          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-14 border" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <Image src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80"
              alt="Planeamento de calendário de conteúdo" fill className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px" priority />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.6) 100%)' }} />
          </div>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                O problema do calendário de conteúdo tradicional
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#A1A1AA' }}>
                A maioria das equipas gasta mais tempo a planear do que a executar. Reuniões de brainstorming, discussões de aprovação, revisões intermináveis — tudo antes de uma única linha ser escrita.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
                Com IA, o processo inverte-se: em 30 minutos tens o esqueleto do mês completo. Depois é só refinar e aprovar. O segredo está em fazer os prompts certos, na ordem certa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                O Processo em 4 Passos
              </h2>
              <div className="space-y-6">
                {steps.map((s) => (
                  <div key={s.step} className="rounded-2xl overflow-hidden border"
                    style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                    <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                      <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: '#E83030', color: '#fff' }}>{s.step}</span>
                      <span className="text-sm font-bold text-white">{s.title}</span>
                    </div>
                    <pre className="p-5 text-sm leading-relaxed whitespace-pre-wrap font-mono" style={{ color: '#A1A1AA' }}>
                      {s.prompt}
                    </pre>
                    <div className="px-5 pb-4">
                      <p className="text-xs italic" style={{ color: '#52525B' }}>💡 {s.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Stack de Ferramentas Recomendado
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tools.map(t => (
                  <div key={t.name} className="flex gap-3 p-4 rounded-xl border"
                    style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#E83030' }} />
                    <div>
                      <p className="text-sm font-bold text-white">{t.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#71717A' }}>{t.use}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="rounded-2xl p-8 lg:p-10 text-center border"
              style={{ background: 'rgba(232,48,48,0.04)', borderColor: 'rgba(232,48,48,0.15)' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#E83030' }}>
                Preferes delegar?
              </p>
              <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Criamos o teu calendário por ti
              </h3>
              <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#71717A' }}>
                Estratégia, planeamento e criação de conteúdo — tudo incluído. Tu aprovAs, nós executamos.
              </p>
              <ModalTriggerButton
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: '#E83030', boxShadow: '0 0 30px rgba(232,48,48,0.25)' }}>
                Pede o teu orçamento <ArrowUpRight size={15} />
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

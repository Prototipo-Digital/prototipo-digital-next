import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ModalTriggerButton from '@/components/ui/ModalTriggerButton';
import { ArrowLeft, Clock, Tag, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prompts para Redes Sociais: 10 Fórmulas que Funcionam',
  description: 'Fórmulas de prompts testadas para criar posts de Instagram, LinkedIn e TikTok que geram engagement real.',
  alternates: { canonical: 'https://prototipodigital.com/blog/prompts-redes-sociais' },
};

const formulas = [
  {
    platform: 'Instagram',
    color: '#E1306C',
    prompts: [
      { label: 'Post de autoridade', prompt: 'Escreve um post de Instagram que posicione [marca] como especialista em [área]. Tom: confiante mas acessível. Começa com uma afirmação surpreendente. 3 parágrafos + 5 hashtags.' },
      { label: 'Post de storytelling', prompt: 'Cria um post de Instagram em formato história sobre [situação/desafio]. A narrativa deve ter: problema → solução → resultado. Termina com pergunta ao público. Máximo 300 palavras.' },
      { label: 'Post educativo (carrossel)', prompt: 'Gera o texto para um carrossel de 6 slides sobre [tema]. Slide 1: gancho. Slides 2-5: um ensinamento por slide (max 30 palavras cada). Slide 6: CTA.' },
    ],
  },
  {
    platform: 'LinkedIn',
    color: '#0077B5',
    prompts: [
      { label: 'Post de opinião', prompt: 'Escreve um post de LinkedIn com a minha opinião sobre [tendência/tema]. Tom: direto, baseado em experiência, sem buzzwords corporativos. Começa sem "Hoje quero partilhar". Máx 1500 caracteres.' },
      { label: 'Caso de sucesso', prompt: 'Cria um post de LinkedIn a partilhar um resultado que obtivemos com [cliente/projeto]: [resultado específico]. Estrutura: contexto → desafio → solução → resultado. Tom profissional mas humano.' },
    ],
  },
  {
    platform: 'TikTok / Reels',
    color: '#FF0050',
    prompts: [
      { label: 'Script de vídeo curto', prompt: 'Escreve um script de 30 segundos para um Reel sobre [tema]. Estrutura: 0-3s gancho visual, 3-20s conteúdo principal em 3 pontos rápidos, 20-30s CTA. Inclui indicações de texto overlay.' },
      { label: 'Hook irresistível', prompt: 'Dá-me 5 hooks de abertura para um vídeo sobre [tema] que parem o scroll nos primeiros 2 segundos. Cada hook máximo 10 palavras. Tom [informal/formal].' },
    ],
  },
];

const tips = [
  'Especifica sempre o tom — "profissional", "descontraído", "urgente" dão resultados completamente diferentes.',
  'Inclui o nome da marca e o sector no prompt — evita respostas genéricas.',
  'Pede sempre variações: "dá-me 3 versões diferentes" e escolhe a melhor.',
  'Define o comprimento máximo — a IA tende a ser verbosa sem esta restrição.',
  'Após o primeiro output, pede: "torna o gancho mais forte" para refinar.',
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
              <Tag size={10} />Redes Sociais
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{ color: '#52525B' }}>
              <Clock size={12} />6 min leitura
            </span>
            <span className="text-xs" style={{ color: '#3F3F46' }}>21 Mai 2025</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}>
            Prompts para Redes Sociais:{' '}
            <span style={{ background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              10 Fórmulas que Funcionam
            </span>
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: '#A1A1AA' }}>
            Criar conteúdo consistente para múltiplas plataformas é um dos maiores desafios de qualquer equipa de marketing. Com os prompts certos, podes reduzir o tempo de criação de horas para minutos — sem perder qualidade.
          </p>

          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-14 border" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80"
              alt="Redes sociais e criação de conteúdo" fill className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px" priority />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.6) 100%)' }} />
          </div>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Porque é que a maioria dos prompts para social media falha?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#A1A1AA' }}>
                O erro mais comum é pedir à IA "escreve um post de Instagram". O resultado é sempre genérico, sem personalidade e sem estratégia. A IA não sabe quem és, para quem escreves, ou o que queres que as pessoas façam a seguir.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
                Um bom prompt para redes sociais precisa de: plataforma, tom de voz, objetivo do post, comprimento máximo e — idealmente — um exemplo de referência. Com esses elementos, o output passa de "aceitável" para "pronto a publicar".
              </p>
            </section>

            {formulas.map(f => (
              <section key={f.platform}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-6 rounded-full" style={{ background: f.color }} />
                  <h2 className="text-2xl font-black" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                    {f.platform}
                  </h2>
                </div>
                <div className="space-y-4">
                  {f.prompts.map(p => (
                    <div key={p.label} className="rounded-2xl overflow-hidden border"
                      style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                        <CheckCircle2 size={13} style={{ color: '#22C55E' }} />
                        <span className="text-xs font-semibold text-white">{p.label}</span>
                      </div>
                      <pre className="p-4 text-sm leading-relaxed whitespace-pre-wrap font-mono" style={{ color: '#A1A1AA' }}>
                        {p.prompt}
                      </pre>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                5 Regras para Prompts de Social Media
              </h2>
              <div className="space-y-3">
                {tips.map((tip, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border"
                    style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: '#E83030', color: '#fff' }}>{i + 1}</span>
                    <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="rounded-2xl p-8 lg:p-10 text-center border"
              style={{ background: 'rgba(232,48,48,0.04)', borderColor: 'rgba(232,48,48,0.15)' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#E83030' }}>
                Quer que façamos isto por ti?
              </p>
              <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Gestão de Redes Sociais com IA
              </h3>
              <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#71717A' }}>
                Tratamos de toda a criação e publicação de conteúdo — com estratégia, IA e resultados mensuráveis.
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

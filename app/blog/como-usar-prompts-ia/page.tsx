import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ModalTriggerButton from '@/components/ui/ModalTriggerButton';
import { ArrowLeft, Clock, Tag, ArrowUpRight, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Usar Prompts com IA: Do Input ao Resultado Final',
  description: 'Aprende a construir prompts eficazes para obter resultados profissionais com ferramentas de IA como ChatGPT, Claude e Gemini.',
  alternates: { canonical: 'https://prototipodigital.com/blog/como-usar-prompts-ia' },
  openGraph: {
    title: 'Como Usar Prompts com IA: Do Input ao Resultado Final',
    description: 'Aprende a construir prompts eficazes para obter resultados profissionais com ferramentas de IA.',
    images: [{ url: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80', width: 1200, height: 630 }],
  },
};

const promptComponents = [
  { label: 'Papel', description: 'Define quem a IA deve "ser". Ex: "És um copywriter sénior especializado em marcas de luxo."' },
  { label: 'Contexto', description: 'Dá o máximo de contexto relevante. Produto, público-alvo, canal, tom de voz.' },
  { label: 'Tarefa', description: 'Descreve exatamente o que queres que a IA faça. Seja específico.' },
  { label: 'Formato', description: 'Indica como quer o resultado. Ex: "em 3 parágrafos", "em lista com bullets", "máximo 280 caracteres".' },
  { label: 'Restrições', description: 'O que deve evitar. Palavras proibidas, tom a não usar, limites de comprimento.' },
];

const badPrompt = `Escreve um post para Instagram sobre a minha empresa de marketing digital.`;

const goodPrompt = `És um copywriter especializado em marketing digital para PMEs portuguesas.

Contexto: A Protótipo Digital é uma agência de marketing digital que combina estratégia, IA e criação de conteúdo premium para fazer marcas crescer. O nosso tom é confiante, direto e moderno — nunca corporativo.

Tarefa: Escreve um post para Instagram que anuncie o nosso serviço de Automação com IA. O post deve gerar curiosidade e terminar com uma chamada à ação.

Formato: 3 parágrafos curtos + 5 hashtags relevantes. Máximo 300 caracteres por parágrafo.

Restrições: Não uses palavras como "incrível", "revolucionário" ou "game-changer". Evita linguagem técnica — o público são empresários, não programadores.`;

const resultPrompt = `🤖 E se o teu negócio trabalhasse enquanto dormes?

Com automação inteligente, os teus workflows fazem-se sozinhos — desde respostas a clientes até relatórios de vendas. Tudo conectado, tudo automático.

Na Protótipo Digital configuramos o sistema por ti. Tu só colhes os resultados. 👇 Fala connosco hoje.

#AutomaçãoDigital #MarketingDigital #InteligênciaArtificial #PME #Protótipo Digital`;

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* Back link */}
        <div className="pt-28 pb-0 max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: '#52525B' }}
          >
            <ArrowLeft size={14} />
            Voltar ao Blog
          </Link>
        </div>

        {/* Article header */}
        <article className="max-w-4xl mx-auto px-6 lg:px-8 pt-8 pb-24">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
              style={{ background: 'rgba(232,48,48,0.12)', color: '#E83030', border: '1px solid rgba(232,48,48,0.2)' }}
            >
              <Tag size={10} />
              Inteligência Artificial
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{ color: '#52525B' }}>
              <Clock size={12} />
              7 min leitura
            </span>
            <span className="text-xs" style={{ color: '#3F3F46' }}>20 Maio 2025</span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
          >
            Como Usar Prompts com IA:{' '}
            <span style={{ background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Do Input ao Resultado Final
            </span>
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: '#A1A1AA' }}>
            A diferença entre um resultado medíocre e um resultado profissional com IA está quase sempre na qualidade do prompt. Neste artigo mostramos-te como estruturar os teus inputs para obter outputs que realmente servem o teu negócio.
          </p>

          {/* Hero image */}
          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-14 border" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <Image
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80"
              alt="Interface de IA com prompts"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.6) 100%)' }} />
          </div>

          {/* Section divider helper */}
          <div className="prose-section space-y-14">

            {/* ── 1. O que é um prompt ── */}
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                O que é um Prompt?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#A1A1AA' }}>
                Um <strong className="text-white">prompt</strong> é a instrução que dás a uma ferramenta de IA — seja o ChatGPT, Claude, Gemini ou qualquer outro modelo. É a diferença entre pedir "faz um bolo" e deixar uma receita detalhada com ingredientes, temperaturas e timings.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
                As ferramentas de IA são incrivelmente capazes, mas precisam de contexto. Quanto mais preciso for o teu input, mais útil e personalizável será o output. A arte de escrever bons prompts chama-se <strong className="text-white">Prompt Engineering</strong> — e é uma competência que qualquer profissional de marketing deveria dominar.
              </p>
            </section>

            {/* ── 2. Anatomia ── */}
            <section>
              <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Anatomia de um Prompt Eficaz
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#A1A1AA' }}>
                Um prompt bem construído tem geralmente 5 componentes. Não precisas de usar todos em cada situação, mas quanto mais presentes estiverem, melhor o resultado:
              </p>
              <div className="space-y-3">
                {promptComponents.map((c, i) => (
                  <div
                    key={c.label}
                    className="flex gap-4 p-4 rounded-xl border"
                    style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                      style={{ background: 'rgba(232,48,48,0.12)', color: '#E83030' }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white">{c.label} — </span>
                      <span className="text-sm" style={{ color: '#71717A' }}>{c.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 3. Antes / Depois ── */}
            <section>
              <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Prompt Básico vs. Prompt Otimizado
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#A1A1AA' }}>
                Vamos usar um exemplo concreto: criar um post de Instagram para uma agência de marketing digital.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                {/* Bad */}
                <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.04)' }}>
                  <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(239,68,68,0.15)' }}>
                    <XCircle size={14} style={{ color: '#EF4444' }} />
                    <span className="text-xs font-semibold" style={{ color: '#EF4444' }}>Prompt básico</span>
                  </div>
                  <pre className="p-4 text-sm leading-relaxed whitespace-pre-wrap font-mono" style={{ color: '#A1A1AA' }}>
                    {badPrompt}
                  </pre>
                </div>

                {/* Good */}
                <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.04)' }}>
                  <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(34,197,94,0.15)' }}>
                    <CheckCircle2 size={14} style={{ color: '#22C55E' }} />
                    <span className="text-xs font-semibold" style={{ color: '#22C55E' }}>Prompt otimizado</span>
                  </div>
                  <pre className="p-4 text-sm leading-relaxed whitespace-pre-wrap font-mono" style={{ color: '#A1A1AA' }}>
                    {goodPrompt}
                  </pre>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>
                O prompt básico vai produzir um resultado genérico que poderia servir qualquer empresa. O otimizado gera conteúdo específico, com o tom certo, para o canal certo — pronto a publicar ou com mínimas edições.
              </p>
            </section>

            {/* ── 4. Resultado Final ── */}
            <section>
              <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Resultado Final
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#A1A1AA' }}>
                Aqui está o output real gerado com o prompt otimizado acima. Sem edições adicionais:
              </p>

              <div
                className="relative rounded-2xl p-6 lg:p-8 border"
                style={{ background: 'rgba(232,48,48,0.03)', borderColor: 'rgba(232,48,48,0.15)' }}
              >
                {/* Label */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold mb-5"
                  style={{ background: 'rgba(232,48,48,0.12)', color: '#E83030', border: '1px solid rgba(232,48,48,0.2)' }}
                >
                  Output da IA
                </div>

                <pre
                  className="text-sm leading-relaxed whitespace-pre-wrap"
                  style={{ color: '#D4D4D8', fontFamily: "'Satoshi', sans-serif" }}
                >
                  {resultPrompt}
                </pre>
              </div>

              <p className="text-sm leading-relaxed mt-4" style={{ color: '#71717A' }}>
                Em menos de 10 segundos, tens um post profissional, no tom da marca, com hashtags relevantes e uma CTA clara. Compara isto com o que um prompt vago produziria e a diferença é evidente.
              </p>
            </section>

            {/* ── 5. Dicas ── */}
            <section>
              <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                5 Dicas para Escrever Melhores Prompts
              </h2>
              <div className="space-y-4">
                {[
                  { tip: 'Itera sempre', desc: 'Raramente o primeiro output é o final. Pede variações, ajustes de tom, ou versões mais curtas. A conversa com a IA é um processo.' },
                  { tip: 'Usa exemplos', desc: 'Se tens um post que gostaste, inclui-o como referência. "Escreve algo com este estilo:" + exemplo = resultados muito mais precisos.' },
                  { tip: 'Define o público explicitamente', desc: '"Para empresários portugueses entre 35-50 anos" é muito mais útil do que "para o meu público". A IA calibra o vocabulário, complexidade e tom.' },
                  { tip: 'Pede autocrítica', desc: 'Depois de geres o resultado, adiciona: "O que podias melhorar neste post?". A IA vai apontar fraquezas que te ajudam a refinar.' },
                  { tip: 'Guarda os teus melhores prompts', desc: 'Cria uma biblioteca de prompts que funcionam para o teu negócio. É um ativo que cresce ao longo do tempo e acelera a tua produção de conteúdo.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 rounded-xl border"
                    style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: '#E83030', color: '#fff' }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">{item.tip}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Conclusão ── */}
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Conclusão
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#A1A1AA' }}>
                O Prompt Engineering não é uma competência técnica reservada a programadores. É uma forma de comunicar melhor com as ferramentas que já tens acesso. E como qualquer skill, melhora com prática.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
                Na Protótipo Digital integramos IA em todas as camadas do nosso processo — desde a criação de conteúdo à automação de workflows. Se quiseres levar a eficiência do teu negócio a outro nível, fala connosco.
              </p>
            </section>

            {/* ── CTA ── */}
            <div
              className="rounded-2xl p-8 lg:p-10 text-center border"
              style={{ background: 'rgba(232,48,48,0.04)', borderColor: 'rgba(232,48,48,0.15)' }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#E83030' }}>
                Pronto para automatizar o teu marketing?
              </p>
              <h3
                className="text-2xl font-black mb-3"
                style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}
              >
                Faz mais em menos tempo com IA
              </h3>
              <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#71717A' }}>
                Implementamos automações e estratégias com IA para o teu negócio. Proposta personalizada em 48h.
              </p>
              <ModalTriggerButton
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: '#E83030', boxShadow: '0 0 30px rgba(232,48,48,0.25)' }}
              >
                Pede o teu orçamento
                <ArrowUpRight size={15} />
              </ModalTriggerButton>
            </div>

            {/* Back */}
            <div className="pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: '#52525B' }}
              >
                <ArrowLeft size={14} />
                Ver todos os artigos
              </Link>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

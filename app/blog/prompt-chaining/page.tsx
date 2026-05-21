import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ModalTriggerButton from '@/components/ui/ModalTriggerButton';
import { ArrowLeft, Clock, Tag, ArrowUpRight, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prompt Chaining: A Técnica Avançada que Multiplica os Resultados',
  description: 'Aprende a encadear prompts em sequência para obter outputs de qualidade profissional que um único prompt nunca conseguiria.',
  alternates: { canonical: 'https://prototipodigital.com/blog/prompt-chaining' },
};

const chain = [
  { step: 1, label: 'Pesquisa', prompt: 'Analisa o mercado de [produto/serviço] em Portugal. Identifica: 3 dores principais do público-alvo, 3 objeções comuns à compra, linguagem que o público usa para descrever os seus problemas.' },
  { step: 2, label: 'Posicionamento', prompt: 'Com base na análise anterior, escreve uma proposta de valor para [marca] que: aborda a dor #1 identificada, se diferencia dos concorrentes, usa a linguagem do público. Máximo 2 frases.' },
  { step: 3, label: 'Copy', prompt: 'Usa a proposta de valor que criaste para escrever um anúncio de Facebook/Instagram com: headline (máx 8 palavras), corpo (3 parágrafos), CTA. O tom deve ressoar com o público identificado.' },
  { step: 4, label: 'Variações', prompt: 'Cria 3 variações do anúncio acima, cada uma explorando um ângulo diferente: emoção, lógica/números, e urgência. Mantém o posicionamento definido.' },
  { step: 5, label: 'A/B Test', prompt: 'De todas as versões criadas, qual recomendas para testar primeiro e porquê? Que elemento testarias em segundo lugar (headline vs CTA vs imagem)?' },
];

const useCases = [
  { title: 'Campanha de email completa', desc: 'Pesquisa → segmentação → subject lines → corpo → CTA → sequência de follow-up' },
  { title: 'Estratégia de conteúdo', desc: 'Análise de concorrência → pilares → temas → títulos → copy → hashtags' },
  { title: 'Lançamento de produto', desc: 'Posicionamento → mensagem → landing page → anúncios → emails → posts' },
  { title: 'Relatório de marketing', desc: 'Recolha de dados → análise → conclusões → recomendações → apresentação executiva' },
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
              <Tag size={10} />Técnicas Avançadas
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{ color: '#52525B' }}>
              <Clock size={12} />9 min leitura
            </span>
            <span className="text-xs" style={{ color: '#3F3F46' }}>22 Mai 2025</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}>
            Prompt Chaining:{' '}
            <span style={{ background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              A Técnica que Multiplica os Resultados
            </span>
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: '#A1A1AA' }}>
            A maioria das pessoas usa IA como uma calculadora — uma pergunta, uma resposta. O Prompt Chaining trata a IA como um colaborador: cada output alimenta o próximo prompt, construindo resultados progressivamente mais sofisticados.
          </p>

          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-14 border" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80"
              alt="Prompt chaining e técnicas avançadas de IA" fill className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px" priority />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.6) 100%)' }} />
          </div>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                O que é Prompt Chaining?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#A1A1AA' }}>
                Prompt Chaining é a técnica de dividir uma tarefa complexa em etapas sequenciais, onde o output de cada prompt se torna parte do input do seguinte. Em vez de pedir tudo de uma vez, guias a IA passo a passo — como um diretor criativo a trabalhar com um copy júnior.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.04)' }}>
                  <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(239,68,68,0.15)' }}>
                    <XCircle size={14} style={{ color: '#EF4444' }} />
                    <span className="text-xs font-semibold" style={{ color: '#EF4444' }}>Prompt único</span>
                  </div>
                  <p className="p-4 text-sm font-mono leading-relaxed" style={{ color: '#A1A1AA' }}>
                    "Cria uma campanha de marketing completa para o meu produto de software B2B."
                  </p>
                  <p className="px-4 pb-4 text-xs" style={{ color: '#71717A' }}>→ Resultado: genérico, sem profundidade estratégica.</p>
                </div>
                <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.04)' }}>
                  <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(34,197,94,0.15)' }}>
                    <CheckCircle2 size={14} style={{ color: '#22C55E' }} />
                    <span className="text-xs font-semibold" style={{ color: '#22C55E' }}>Prompt chaining</span>
                  </div>
                  <p className="p-4 text-sm font-mono leading-relaxed" style={{ color: '#A1A1AA' }}>
                    Análise → Posicionamento → Copy → Variações → Seleção
                  </p>
                  <p className="px-4 pb-4 text-xs" style={{ color: '#71717A' }}>→ Resultado: campanha coerente, estratégica e pronta a lançar.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Exemplo Real: Campanha de Anúncio em 5 Passos
              </h2>
              <div className="relative">
                <div className="absolute left-[22px] top-8 bottom-8 w-px" style={{ background: 'rgba(232,48,48,0.2)' }} />
                <div className="space-y-4">
                  {chain.map((c, i) => (
                    <div key={c.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-xs font-black z-10"
                        style={{ background: '#E83030', color: '#fff' }}>{c.step}</div>
                      <div className="flex-1 rounded-2xl overflow-hidden border mb-0"
                        style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                        <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                          <span className="text-xs font-bold text-white">{c.label}</span>
                          {i < chain.length - 1 && <ArrowRight size={12} style={{ color: '#E83030' }} />}
                        </div>
                        <pre className="p-4 text-xs leading-relaxed whitespace-pre-wrap font-mono" style={{ color: '#A1A1AA' }}>
                          {c.prompt}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Onde Aplicar Prompt Chaining
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {useCases.map(u => (
                  <div key={u.title} className="p-4 rounded-xl border" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
                    <p className="text-sm font-bold text-white mb-1">{u.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#71717A' }}>{u.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>A Regra de Ouro</h2>
              <p className="text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
                Cada prompt numa cadeia deve ter <strong className="text-white">um único objetivo</strong>. Se encontras que precisas de dois parágrafos para descrever o que queres num só prompt, é sinal de que deves dividi-lo em dois. A simplicidade de cada etapa é o que garante a qualidade do output final.
              </p>
            </section>

            <div className="rounded-2xl p-8 lg:p-10 text-center border"
              style={{ background: 'rgba(232,48,48,0.04)', borderColor: 'rgba(232,48,48,0.15)' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#E83030' }}>
                Automatiza o teu marketing
              </p>
              <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                IA integrada no teu processo
              </h3>
              <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#71717A' }}>
                Construímos workflows de IA personalizados para o teu negócio — da estratégia à execução automatizada.
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

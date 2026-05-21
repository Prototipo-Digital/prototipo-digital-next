import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ModalTriggerButton from '@/components/ui/ModalTriggerButton';
import { ArrowLeft, Clock, Tag, ArrowUpRight, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '10 Prompts Prontos para Email Marketing que Convertem',
  description: 'De boas-vindas a reativação de clientes — prompts completos para cada tipo de email com estrutura, tom e call-to-action incluídos.',
  alternates: { canonical: 'https://prototipodigital.com/blog/prompts-email-marketing' },
};

const emails = [
  {
    type: 'Email de boas-vindas',
    goal: 'Criar primeira impressão forte e definir expectativas',
    prompt: `Escreve um email de boas-vindas para novos subscritores de [marca], uma [tipo de empresa].

Tom: [caloroso/profissional/direto]
Deve incluir:
— Agradecimento genuíno (sem clichés)
— O que vão receber nos próximos emails
— Um primeiro valor imediato (dica, recurso ou desconto)
— CTA suave (não de venda)

Assunto do email: máx 45 caracteres, sem emojis.`,
  },
  {
    type: 'Email de nurturing (conteúdo)',
    goal: 'Educar e construir autoridade sem vender',
    prompt: `Escreve um email de conteúdo para a lista de [marca] sobre [tema].

Estrutura:
— Abertura com uma pergunta ou afirmação disruptiva
— Corpo: 3 insights práticos sobre [tema] (máx 2 linhas cada)
— Fecho: tease do próximo email
— PS: opcional, mais pessoal

Tom: [tom da marca]. Comprimento: 200-300 palavras. Sem imagens descritas.`,
  },
  {
    type: 'Email promocional',
    goal: 'Converter com urgência e valor claro',
    prompt: `Escreve um email promocional para [produto/serviço] com desconto de [X]% válido até [data].

Público: [descrição do segmento]
Estrutura:
— Assunto: urgência sem clickbait (máx 50 chars)
— Abertura: problema que o produto resolve
— Oferta: clara, com benefício principal destacado
— Prova social: 1 frase de cliente/resultado
— CTA: botão com texto ativo (não "clica aqui")
— Urgência: lembra o prazo naturalmente`,
  },
  {
    type: 'Email de carrinho abandonado',
    goal: 'Recuperar conversões perdidas',
    prompt: `Escreve uma sequência de 3 emails de carrinho abandonado para [loja/produto].

Email 1 (1h depois): gentil lembrete, sem pressão
Email 2 (24h depois): aborda objeção principal + prova social
Email 3 (72h depois): urgência + incentivo final (desconto ou bónus)

Para cada email: assunto + corpo (máx 150 palavras) + CTA.
Tom: humano, não automatizado.`,
  },
  {
    type: 'Email de reativação',
    goal: 'Recuperar subscritores inativos',
    prompt: `Escreve um email de reativação para subscritores que não abriram emails nos últimos 90 dias.

Não uses linguagem de culpa. Abordagens a testar (cria as 3 versões):
A) Curiosidade: algo mudou / novidade
B) Humor autodepreciativo: "sabemos que nos afastámos..."
C) Direto: pergunta se querem continuar na lista

Cada versão: assunto + máx 100 palavras + CTA (ficar ou sair graciosamente).`,
  },
  {
    type: 'Email pós-compra',
    goal: 'Fidelizar e gerar recomendação',
    prompt: `Escreve um email pós-compra para clientes que adquiriram [produto/serviço].

Enviado: [X] dias após a compra
Objetivo: garantir satisfação + plantar semente de recomendação
Inclui:
— Confirmação de que fizeram boa escolha (sem exageros)
— Dica de como tirar máximo partido do produto
— Pedido subtil de feedback ou review
— Referral: se tiverem programa de referência

Tom: genuíno, como se viesse do fundador.`,
  },
  {
    type: 'Newsletter semanal',
    goal: 'Manter engagement consistente',
    prompt: `Cria a estrutura de uma newsletter semanal para [marca] com o tema desta semana: [tema].

Secções fixas:
1. Intro curta e pessoal (3-4 linhas, algo atual)
2. "Esta semana em [sector]": 3 notícias/tendências comentadas
3. Dica da semana: acionável em <5 min
4. Recomendação: ferramenta, livro ou recurso
5. Fecho + CTA principal da semana

Comprimento total: 400-500 palavras.`,
  },
  {
    type: 'Email de anúncio de produto',
    goal: 'Lançar algo novo com impacto',
    prompt: `Escreve um email de lançamento para [novo produto/feature/serviço] de [marca].

O produto resolve: [problema principal]
Diferencial: [o que o torna único]
Público: [segmento]

Estrutura AIDA:
— Atenção: headline + primeiro parágrafo que cria antecipação
— Interesse: o que é e porque importa
— Desejo: benefícios concretos (3 bullets)
— Ação: CTA principal + urgência se aplicável`,
  },
  {
    type: 'Email de testemunho/caso de sucesso',
    goal: 'Usar prova social para converter',
    prompt: `Escreve um email centrado no caso de sucesso de [cliente/persona] que usou [produto/serviço].

Estrutura storytelling:
— Situação antes: problema/dor que tinha
— Momento de viragem: como encontrou [marca]
— Resultado: número/impacto específico
— Quote do cliente: 1-2 frases
— Transição para CTA: "se [condição similar], [resultado similar] é possível para ti"

Tom: narrativo, não corporativo.`,
  },
  {
    type: 'Email de urgência (last call)',
    goal: 'Maximizar conversões no último momento',
    prompt: `Escreve o email final de uma campanha — o "last call" — para [oferta] que termina em [prazo].

Regras:
— Assunto: urgência real, sem manipulação
— Abertura: lembra o que está em jogo (benefício, não desconto)
— Corpo: máx 3 parágrafos, direto ao ponto
— CTA: único, claro, com prazo visível
— PS: resumo ultra-conciso da oferta

Este email é para quem já viu os anteriores — não precisas de reintroduzir a oferta.`,
  },
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
              <Tag size={10} />Email Marketing
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{ color: '#52525B' }}>
              <Clock size={12} />6 min leitura
            </span>
            <span className="text-xs" style={{ color: '#3F3F46' }}>23 Mai 2025</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}>
            10 Prompts Prontos para{' '}
            <span style={{ background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Email Marketing que Convertem
            </span>
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: '#A1A1AA' }}>
            O email marketing ainda tem o maior ROI de qualquer canal digital. O problema é que escrever emails que as pessoas realmente abrem e clicam é uma arte. Com estes prompts, tens um ponto de partida profissional para cada situação.
          </p>

          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-14 border" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <Image src="https://images.unsplash.com/photo-1596526131083-e8c633564a1?w=1200&q=80"
              alt="Email marketing com IA" fill className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px" priority />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.6) 100%)' }} />
          </div>

          <div className="space-y-6">
            {emails.map((e, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border"
                style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                <div className="flex items-start justify-between gap-3 px-5 py-4 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 p-1.5 rounded-lg" style={{ background: 'rgba(232,48,48,0.1)' }}>
                      <Mail size={13} style={{ color: '#E83030' }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{i + 1}. {e.type}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#52525B' }}>{e.goal}</p>
                    </div>
                  </div>
                </div>
                <pre className="p-5 text-sm leading-relaxed whitespace-pre-wrap font-mono" style={{ color: '#A1A1AA' }}>
                  {e.prompt}
                </pre>
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-14">
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Como usar estes prompts
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#A1A1AA' }}>
                Substitui os campos entre <strong className="text-white">[parêntesis retos]</strong> com a informação da tua marca antes de enviar o prompt à IA. Quanto mais específico fores nesses campos, melhor o resultado.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
                Após o primeiro output, pede sempre: <em className="text-white">"torna o assunto mais intrigante"</em> ou <em className="text-white">"o CTA está demasiado genérico, melhora-o"</em>. A iteração é onde está o valor real.
              </p>
            </section>

            <div className="rounded-2xl p-8 lg:p-10 text-center border"
              style={{ background: 'rgba(232,48,48,0.04)', borderColor: 'rgba(232,48,48,0.15)' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#E83030' }}>
                Quer uma estratégia de email completa?
              </p>
              <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}>
                Criamos e gerimos por ti
              </h3>
              <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#71717A' }}>
                Fluxos de automação, newsletters e campanhas de email — do copy ao envio, tudo incluído.
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

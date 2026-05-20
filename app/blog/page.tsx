import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artigos sobre marketing digital, inteligência artificial, automação e estratégia de conteúdo.',
  alternates: { canonical: 'https://prototipodigital.com/blog' },
};

const posts = [
  {
    slug: 'como-usar-prompts-ia',
    title: 'Como Usar Prompts com IA: Do Input ao Resultado Final',
    excerpt:
      'Aprende a construir prompts eficazes para obter resultados profissionais com ferramentas de IA como ChatGPT, Claude e Gemini. Com exemplos reais e antes/depois.',
    category: 'Inteligência Artificial',
    readTime: '7 min',
    date: '20 Mai 2025',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    featured: true,
  },
];

export default function BlogPage() {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
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
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#E83030' }}>
              Conhecimento
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6"
              style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
            >
              Blog &{' '}
              <span style={{ background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Recursos
              </span>
            </h1>
            <p className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: '#71717A' }}>
              Artigos sobre marketing digital, IA aplicada e estratégias para fazer a tua marca crescer.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Featured post */}
            {featured && (
              <Link href={`/blog/${featured.slug}`} className="group block mb-12">
                <article
                  className="relative rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto lg:min-h-[380px]">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, #0A0A0A)' }} />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-5">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                          style={{ background: 'rgba(232,48,48,0.12)', color: '#E83030', border: '1px solid rgba(232,48,48,0.2)' }}
                        >
                          <Tag size={10} />
                          {featured.category}
                        </span>
                        <span className="text-xs flex items-center gap-1" style={{ color: '#52525B' }}>
                          <Clock size={11} />
                          {featured.readTime} leitura
                        </span>
                      </div>
                      <h2
                        className="text-2xl lg:text-3xl font-black tracking-tight mb-4 leading-snug group-hover:text-white transition-colors"
                        style={{ fontFamily: "'Satoshi', sans-serif", color: '#F5F5F5' }}
                      >
                        {featured.title}
                      </h2>
                      <p className="text-sm lg:text-base leading-relaxed mb-6" style={{ color: '#71717A' }}>
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#E83030' }}>
                        Ler artigo
                        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )}

            {/* Rest of posts */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map(post => (
                  <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                    <article
                      className="rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
                      style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
                    >
                      <div className="relative h-48">
                        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="400px" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(232,48,48,0.1)', color: '#E83030' }}>
                            {post.category}
                          </span>
                        </div>
                        <h2 className="text-base font-bold text-white mb-2 group-hover:text-[#E83030] transition-colors" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                          {post.title}
                        </h2>
                        <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{post.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

'use client';

import Image from 'next/image';

const navLinks = [
  { label: 'Início',    href: '#inicio' },
  { label: 'Serviços',  href: '#servicos' },
  { label: 'Processo',  href: '#processo' },
  { label: 'Sobre',     href: '#diferenciacao' },
  { label: 'FAQ',       href: '#faq' },
  { label: 'Contacto',  href: '#contacto' },
];

const services = [
  'Gestão de Redes Sociais',
  'Criação de Conteúdo',
  'Automação com IA',
  'Estratégia Digital',
  'Branding',
  'Publicidade Digital',
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/prototipo.digital',
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/prototipo-digital',
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@protodipodigital',
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{ background: '#080808', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main footer content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo-white.png"
              alt="Protótipo Digital"
              width={160}
              height={40}
              className="h-7 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#71717A' }}>
              Marketing Digital com Inteligência. Estratégia, tecnologia e criatividade para fazer a tua marca crescer.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg border transition-all duration-200 hover:border-[#E83030]/40 hover:bg-[#E83030]/10"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', color: '#71717A' }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#F5F5F5' }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#71717A' }}
                    onClick={e => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#F5F5F5' }}
            >
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <span className="text-sm" style={{ color: '#71717A' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#F5F5F5' }}
            >
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:geral@prototipo.digital"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: '#71717A' }}
                >
                  geral@prototipo.digital
                </a>
              </li>
              <li>
                <span className="text-sm" style={{ color: '#71717A' }}>Portugal</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                style={{ color: '#E83030' }}
                onClick={e => {
                  e.preventDefault();
                  document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Pede o teu orçamento →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: '#3F3F46' }}>
            © {year} Protótipo Digital. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#E83030' }}
            />
            <p className="text-xs" style={{ color: '#3F3F46' }}>
              Marketing com Inteligência
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

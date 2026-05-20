'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useContactModal } from '@/lib/contact-modal-context';

const navLinks = [
  { label: 'Início',   href: '#inicio',    type: 'scroll' as const },
  { label: 'Serviços', href: '/servicos',  type: 'page'   as const },
  { label: 'Processo', href: '#processo',  type: 'scroll' as const },
  { label: 'Sobre',    href: '/sobre',     type: 'page'   as const },
  { label: 'FAQ',      href: '#faq',       type: 'scroll' as const },
  { label: 'Contacto', href: '#contacto',  type: 'modal'  as const },
];

export default function Navbar() {
  const [scrolled, setScrolled]    = useState(false);
  const [menuOpen, setMenuOpen]    = useState(false);
  const [activeSection, setActive] = useState('inicio');
  const { open: openModal }        = useContactModal();
  const pathname                   = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (link: typeof navLinks[number]) => {
    setMenuOpen(false);
    if (link.type === 'modal') { openModal(); return; }
    if (link.type === 'page') return; // handled by Link
    // scroll
    if (pathname !== '/') { window.location.href = '/' + link.href; return; }
    const el = document.querySelector(link.href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`navbar-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/[0.06]' : ''
        }`}
        style={{ background: scrolled ? 'rgba(10,10,10,0.96)' : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Mobile: flex justify-between | Desktop: 3-col grid for true centering */}
          <div className="flex items-center justify-between h-16 lg:h-20 lg:grid lg:grid-cols-3">

            {/* Logo — left */}
            <button onClick={() => scrollTo('#inicio')} className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Protótipo Digital"
                width={160}
                height={40}
                className="h-7 lg:h-8 w-auto object-contain"
                priority
              />
            </button>

            {/* Desktop nav — center */}
            <nav className="hidden lg:flex items-center justify-center gap-1">
              {navLinks.map(link => {
                const isActive = link.type === 'page'
                  ? pathname === link.href
                  : activeSection === link.href.slice(1);
                const cls = `px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive ? 'text-white bg-white/[0.06]' : 'text-[#A1A1AA] hover:text-white'}`;
                if (link.type === 'page') {
                  return <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>{link.label}</Link>;
                }
                return (
                  <button key={link.href} onClick={() => handleNav(link)} className={cls}>
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA — right */}
            <div className="hidden lg:flex items-center justify-end">
              <button
                onClick={openModal}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: '#E83030' }}
              >
                Pede o teu orçamento
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden p-2 text-[#A1A1AA] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — CSS opacity transition, no JS animation library */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-200 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10,10,10,0.97)', paddingTop: '4rem' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2">
          {navLinks.map(link => {
            const cls = "text-2xl font-semibold text-[#A1A1AA] hover:text-white transition-colors py-3";
            if (link.type === 'page') {
              return (
                <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              );
            }
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link)}
                className={cls}
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => { setMenuOpen(false); openModal(); }}
            className="mt-6 px-8 py-3 rounded-lg text-base font-semibold text-white"
            style={{ background: '#E83030' }}
          >
            Pede o teu orçamento
          </button>
        </div>
      </div>
    </>
  );
}

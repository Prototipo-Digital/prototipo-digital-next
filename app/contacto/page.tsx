'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { Send, CheckCircle2 } from 'lucide-react';

const services = [
  'Gestão de Redes Sociais',
  'Criação de Conteúdo',
  'Automação com IA',
  'Estratégia Digital',
  'Branding',
  'Publicidade Digital',
  'Outro',
];

export default function ContactoPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xpqnzazy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#52525B] outline-none transition-all duration-200 focus:ring-1 focus:ring-[#E83030]/50';
  const inputStyle = { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' };

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

              {/* Left — copy */}
              <div className="pt-4">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#E83030' }}>
                  Fala connosco
                </span>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.05]"
                  style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
                >
                  Pronto para{' '}
                  <span style={{ background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    crescer?
                  </span>
                </h1>
                <p className="text-base lg:text-lg leading-relaxed mb-10" style={{ color: '#71717A' }}>
                  Conta-nos o teu projeto e entraremos em contacto em menos de 24 horas com uma proposta personalizada.
                </p>

                <div className="space-y-5">
                  {[
                    { title: 'Resposta em 24h', desc: 'Garantimos resposta no próximo dia útil com uma proposta à tua medida.' },
                    { title: 'Sem compromisso', desc: 'A primeira conversa é gratuita e sem obrigação de contratar.' },
                    { title: 'Proposta personalizada', desc: 'Nada de pacotes genéricos — cada cliente tem uma estratégia própria.' },
                  ].map(item => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: '#E83030' }} />
                      <div>
                        <p className="text-sm font-bold text-white mb-0.5">{item.title}</p>
                        <p className="text-sm" style={{ color: '#71717A' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — form */}
              <div
                className="rounded-2xl p-8 lg:p-10 border"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                    <div className="p-4 rounded-full" style={{ background: 'rgba(232,48,48,0.1)' }}>
                      <CheckCircle2 size={32} style={{ color: '#E83030' }} />
                    </div>
                    <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                      Mensagem enviada!
                    </h2>
                    <p className="text-sm max-w-xs" style={{ color: '#71717A' }}>
                      Recebemos o teu pedido. Entraremos em contacto em menos de 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-xl font-black text-white mb-6" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                      Pede o teu orçamento
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Nome *"
                        value={form.name}
                        onChange={handleChange}
                        className={inputCls}
                        style={inputStyle}
                      />
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email *"
                        value={form.email}
                        onChange={handleChange}
                        className={inputCls}
                        style={inputStyle}
                      />
                    </div>

                    <input
                      name="company"
                      type="text"
                      placeholder="Empresa"
                      value={form.company}
                      onChange={handleChange}
                      className={inputCls}
                      style={inputStyle}
                    />

                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputCls}
                      style={{ ...inputStyle, color: form.service ? '#fff' : '#52525B' }}
                    >
                      <option value="" disabled>Serviço de interesse</option>
                      {services.map(s => (
                        <option key={s} value={s} style={{ background: '#1A1A1A', color: '#fff' }}>{s}</option>
                      ))}
                    </select>

                    <textarea
                      name="message"
                      required
                      placeholder="Conta-nos o teu projeto *"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputCls} resize-none`}
                      style={inputStyle}
                    />

                    {status === 'error' && (
                      <p className="text-xs text-center" style={{ color: '#EF4444' }}>
                        Algo correu mal. Tenta novamente ou envia email para geral@prototipo.digital
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-60"
                      style={{ background: '#E83030', boxShadow: '0 0 25px rgba(232,48,48,0.25)' }}
                    >
                      {status === 'loading' ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Enviar pedido
                          <Send size={14} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center" style={{ color: '#3F3F46' }}>
                      Os teus dados são tratados com confidencialidade.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useContactModal } from '@/lib/contact-modal-context';

const serviceOptions = [
  'Gestão de Redes Sociais',
  'Criação de Conteúdo',
  'Automação com IA',
  'Estratégia Digital',
  'Branding',
  'Publicidade Digital',
  'Outro / Não sei ainda',
];

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  if (!isOpen) return null;

  const handleChange = (field: keyof FormData, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xpqnzazy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      setForm({ name: '', email: '', company: '', service: '', message: '' });
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border"
        style={{ background: '#111111', borderColor: 'rgba(255,255,255,0.08)' }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b"
          style={{ background: '#111111', borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <div>
            <h2 className="text-base font-bold text-white" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Pede o teu orçamento
            </h2>
            <p className="text-xs mt-0.5" style={{ color: '#71717A' }}>
              Resposta em menos de 48h, sem compromisso
            </p>
          </div>
          <button
            onClick={close}
            className="p-2 rounded-lg transition-colors hover:bg-white/[0.06]"
            style={{ color: '#71717A' }}
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
              <CheckCircle2 size={48} style={{ color: '#E83030' }} />
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                Mensagem enviada!
              </h3>
              <p className="text-sm" style={{ color: '#71717A' }}>
                Entraremos em contacto nas próximas 48h.
              </p>
              <button
                onClick={close}
                className="mt-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white"
                style={{ background: '#E83030' }}
              >
                Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium" style={{ color: '#A1A1AA' }}>Nome *</label>
                  <input
                    required
                    placeholder="O teu nome"
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-[#3F3F46] outline-none transition-colors"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,48,48,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium" style={{ color: '#A1A1AA' }}>Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="o.teu@email.com"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-[#3F3F46] outline-none transition-colors"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,48,48,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium" style={{ color: '#A1A1AA' }}>Empresa</label>
                <input
                  placeholder="Nome da empresa (opcional)"
                  value={form.company}
                  onChange={e => handleChange('company', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-[#3F3F46] outline-none transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,48,48,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium" style={{ color: '#A1A1AA' }}>Serviço de interesse</label>
                <select
                  value={form.service}
                  onChange={e => handleChange('service', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors appearance-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: form.service ? '#F5F5F5' : '#3F3F46',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,48,48,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                >
                  <option value="" disabled style={{ background: '#1A1A1A' }}>Selecciona um serviço</option>
                  {serviceOptions.map(opt => (
                    <option key={opt} value={opt} style={{ background: '#1A1A1A', color: '#F5F5F5' }}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium" style={{ color: '#A1A1AA' }}>Mensagem *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Conta-nos sobre o teu projecto..."
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-[#3F3F46] outline-none transition-colors resize-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,48,48,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              {status === 'error' && (
                <p className="text-xs text-center" style={{ color: '#E83030' }}>
                  Ocorreu um erro. Tenta novamente.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: '#E83030', boxShadow: '0 0 30px rgba(232,48,48,0.25)' }}
              >
                {status === 'loading' ? (
                  <><Loader2 size={15} className="animate-spin" />A enviar...</>
                ) : (
                  <>Enviar mensagem<ArrowRight size={15} /></>
                )}
              </button>

              <p className="text-center text-[10px]" style={{ color: '#3F3F46' }}>
                Os teus dados são tratados com total confidencialidade.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

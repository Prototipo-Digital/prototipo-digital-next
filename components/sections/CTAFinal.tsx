'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const serviceOptions = [
  'Gestão de Redes Sociais',
  'Criação de Conteúdo',
  'Automação com IA',
  'Estratégia Digital',
  'Branding',
  'Publicidade Digital',
  'Outro / Não sei ainda',
];

export default function CTAFinal() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', company: '', service: '', message: '' });
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      ref={ref}
      id="contacto"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,48,48,0.3), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '900px', height: '600px',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(232,48,48,0.08) 0%, rgba(232,48,48,0.02) 50%, transparent 75%)',
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — headline */}
          <div className="lg:sticky lg:top-28">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#E83030' }}
            >
              Vamos conversar
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", color: '#F5F5F5' }}
            >
              Pronto para elevar{' '}
              <br className="hidden sm:block" />
              a presença digital{' '}
              <br className="hidden sm:block" />
              da tua{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E83030 0%, #FF6060 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                marca?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base lg:text-lg leading-relaxed mb-8"
              style={{ color: '#71717A' }}
            >
              Preenche o formulário e recebe uma proposta personalizada em 48h.
              Sem compromisso, sem custo.
            </motion.p>

            {/* Promise list */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-3"
            >
              {[
                'Resposta em menos de 48h',
                'Proposta personalizada ao teu negócio',
                'Sem compromisso',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: '#A1A1AA' }}>
                  <CheckCircle2 size={14} style={{ color: '#E83030' }} />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === 'success' ? (
              <div
                className="flex flex-col items-center justify-center text-center p-10 rounded-2xl border min-h-[400px]"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(232,48,48,0.2)' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CheckCircle2 size={48} style={{ color: '#E83030' }} className="mb-4" />
                </motion.div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  Mensagem enviada!
                </h3>
                <p className="text-sm" style={{ color: '#71717A' }}>
                  Entraremos em contacto nas próximas 48h.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-7 lg:p-8 rounded-2xl border space-y-5"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-medium" style={{ color: '#A1A1AA' }}>
                      Nome *
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="O teu nome"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      className="border-white/[0.08] bg-white/[0.04] text-white placeholder:text-[#3F3F46] focus-visible:ring-[#E83030] focus-visible:border-[#E83030]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-medium" style={{ color: '#A1A1AA' }}>
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="o.teu@email.com"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                      className="border-white/[0.08] bg-white/[0.04] text-white placeholder:text-[#3F3F46] focus-visible:ring-[#E83030] focus-visible:border-[#E83030]/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs font-medium" style={{ color: '#A1A1AA' }}>
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    placeholder="Nome da empresa (opcional)"
                    value={form.company}
                    onChange={e => handleChange('company', e.target.value)}
                    className="border-white/[0.08] bg-white/[0.04] text-white placeholder:text-[#3F3F46] focus-visible:ring-[#E83030] focus-visible:border-[#E83030]/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-medium" style={{ color: '#A1A1AA' }}>
                    Serviço de interesse
                  </Label>
                  <Select value={form.service} onValueChange={v => handleChange('service', v ?? '')}>
                    <SelectTrigger className="border-white/[0.08] bg-white/[0.04] text-white focus:ring-[#E83030]">
                      <SelectValue placeholder="Selecciona um serviço" className="text-[#3F3F46]" />
                    </SelectTrigger>
                    <SelectContent
                      style={{ background: '#1A1A1A', borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      {serviceOptions.map(opt => (
                        <SelectItem key={opt} value={opt} className="text-white focus:bg-white/[0.08] focus:text-white">
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-medium" style={{ color: '#A1A1AA' }}>
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Conta-nos um pouco sobre o teu projecto e o que precisas..."
                    rows={4}
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    className="border-white/[0.08] bg-white/[0.04] text-white placeholder:text-[#3F3F46] focus-visible:ring-[#E83030] focus-visible:border-[#E83030]/50 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-center" style={{ color: '#E83030' }}>
                    Ocorreu um erro. Tenta novamente ou contacta-nos directamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: '#E83030', boxShadow: '0 0 30px rgba(232,48,48,0.25)' }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      A enviar...
                    </>
                  ) : (
                    <>
                      Falar com a Protótipo Digital
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px]" style={{ color: '#3F3F46' }}>
                  Os teus dados são tratados com total confidencialidade.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

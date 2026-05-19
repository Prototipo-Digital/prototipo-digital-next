import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
};

function validate(payload: ContactPayload): string | null {
  if (!payload.name?.trim())    return 'Nome obrigatório';
  if (!payload.email?.trim())   return 'Email obrigatório';
  if (!payload.message?.trim()) return 'Mensagem obrigatória';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return 'Email inválido';
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    const error = validate(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail      = process.env.CONTACT_EMAIL ?? 'geral@prototipo.digital';

    /* ── Supabase: store lead ── */
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      await supabase.from('leads').insert({
        name:    body.name.trim(),
        email:   body.email.trim().toLowerCase(),
        company: body.company?.trim() ?? null,
        service: body.service ?? null,
        message: body.message.trim(),
      });
    }

    /* ── Resend: send notification email ── */
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from:    'Protótipo Digital <noreply@prototipo.digital>',
        to:      [toEmail],
        replyTo: body.email,
        subject: `Novo lead: ${body.name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #E83030; margin-bottom: 16px;">Novo contacto via landing page</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 120px;">Nome</td><td style="padding: 8px 0; font-weight: 600;">${body.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
              ${body.company ? `<tr><td style="padding: 8px 0; color: #666;">Empresa</td><td style="padding: 8px 0;">${body.company}</td></tr>` : ''}
              ${body.service ? `<tr><td style="padding: 8px 0; color: #666;">Serviço</td><td style="padding: 8px 0;">${body.service}</td></tr>` : ''}
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
              <strong>Mensagem:</strong>
              <p style="margin-top: 8px;">${body.message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        `,
      });

      /* Confirmation to sender */
      await resend.emails.send({
        from:    'Protótipo Digital <noreply@prototipo.digital>',
        to:      [body.email],
        subject: 'Recebemos a tua mensagem — Protótipo Digital',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #E83030;">Olá, ${body.name}!</h2>
            <p>Recebemos a tua mensagem e entraremos em contacto em menos de 48h.</p>
            <p style="color: #666;">Enquanto isso, podes seguir-nos nas redes sociais para ficares a par das últimas novidades.</p>
            <br>
            <p>Cumprimentos,<br><strong>Equipa Protótipo Digital</strong></p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}

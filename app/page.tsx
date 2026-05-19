import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import BelowFoldSections from '@/components/BelowFoldSections';

export const metadata: Metadata = {
  title: 'Protótipo Digital — Marketing com Inteligência',
  description:
    'Agência de Marketing Digital especializada em estratégia, IA aplicada, gestão de redes sociais, criação de conteúdo e automação. Fazemos marcas crescer.',
  alternates: { canonical: 'https://prototipo.digital' },
};

export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://prototipo.digital/#organization',
                name: 'Protótipo Digital',
                url: 'https://prototipo.digital',
                logo: 'https://prototipo.digital/images/logo.png',
                description: 'Agência de Marketing Digital com IA — Marketing com Inteligência',
                sameAs: [
                  'https://instagram.com/prototipo.digital',
                  'https://linkedin.com/company/prototipo-digital',
                ],
              },
              {
                '@type': 'LocalBusiness',
                '@id': 'https://prototipo.digital/#business',
                name: 'Protótipo Digital',
                url: 'https://prototipo.digital',
                description: 'Agência de Marketing Digital especializada em estratégia, IA e automação.',
                priceRange: '€€',
                areaServed: { '@type': 'Country', name: 'Portugal' },
                serviceType: 'Marketing Digital',
              },
              {
                '@type': 'Service',
                serviceType: 'Marketing Digital',
                provider: { '@id': 'https://prototipo.digital/#organization' },
                name: 'Serviços de Marketing Digital',
                description:
                  'Gestão de redes sociais, criação de conteúdo, automação com IA, estratégia digital, branding e publicidade digital.',
                offers: {
                  '@type': 'Offer',
                  availability: 'https://schema.org/InStock',
                  areaServed: 'Portugal',
                },
              },
            ],
          }),
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <BelowFoldSections />
      </main>
    </>
  );
}

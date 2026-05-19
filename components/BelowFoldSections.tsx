'use client';

import dynamic from 'next/dynamic';

// Code-split for smaller initial JS bundle, but SSR enabled so HTML
// is pre-rendered — content is visible without JS, no CLS, no blank flash.
const SocialProof     = dynamic(() => import('./sections/SocialProof'));
const Services        = dynamic(() => import('./sections/Services'));
const Process         = dynamic(() => import('./sections/Process'));
const Differentiation = dynamic(() => import('./sections/Differentiation'));
const Testimonials    = dynamic(() => import('./sections/Testimonials'));
const FAQ             = dynamic(() => import('./sections/FAQ'));
const CTAFinal        = dynamic(() => import('./sections/CTAFinal'));
const Footer          = dynamic(() => import('./sections/Footer'));

export default function BelowFoldSections() {
  return (
    <>
      <SocialProof />
      <Services />
      <Process />
      <Differentiation />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  );
}

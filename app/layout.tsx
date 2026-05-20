import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ContactModalProvider } from "@/lib/contact-modal-context";
import ContactModal from "@/components/ContactModal";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "./fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prototipodigital.com"),
  icons: { icon: '/icon.png' },
  title: {
    default: "Protótipo Digital — Marketing com Inteligência",
    template: "%s | Protótipo Digital",
  },
  description:
    "Agência de Marketing Digital especializada em estratégia, IA aplicada, gestão de redes sociais, criação de conteúdo e automação. Fazemos marcas crescer.",
  keywords: [
    "marketing digital",
    "inteligência artificial",
    "gestão redes sociais",
    "criação conteúdo",
    "automação marketing",
    "estratégia digital",
    "agência marketing portugal",
  ],
  authors: [{ name: "Protótipo Digital" }],
  creator: "Protótipo Digital",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://prototipodigital.com",
    siteName: "Protótipo Digital",
    title: "Protótipo Digital — Marketing com Inteligência",
    description:
      "Agência de Marketing Digital especializada em estratégia, IA aplicada, gestão de redes sociais e automação inteligente.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Protótipo Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protótipo Digital — Marketing com Inteligência",
    description:
      "Agência de Marketing Digital especializada em estratégia, IA aplicada, gestão de redes sociais e automação inteligente.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${satoshi.variable}`}>
      <body className="min-h-screen antialiased overflow-x-hidden">
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      {/* Google Ads */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18170157954"
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18170157954');
        `}
      </Script>
    </html>
  );
}

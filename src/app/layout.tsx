import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/providers/theme-provider';
import { ToastProvider } from '@/providers/toast-provider';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Nexvora Tech | Enterprise Software Engineering & AI Architectures',
    template: '%s | Nexvora Tech',
  },
  description:
    'Nexvora Tech designs and constructs high-performance cloud architectures, custom AI agent telemetry systems, and audited zero-trust cybersecurity shields.',
  keywords: [
    'Software Architecture',
    'AI Integrations',
    'Cybersecurity Auditing',
    'Kubernetes Engineering',
    'Nexvora Tech',
    'Next.js 16 Portfolio',
  ],
  authors: [{ name: 'Nexvora Tech Engineering Team' }],
  creator: 'Nexvora Tech',
  metadataBase: new URL('https://nexvora.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexvora.tech',
    title: 'Nexvora Tech | Enterprise Software Engineering & AI Architectures',
    description:
      'We construct high-frequency cloud architectures, automated AI agent workflows, and audited zero-trust cybersecurity shields.',
    siteName: 'Nexvora Tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexvora Tech Enterprise Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexvora Tech | Enterprise Software Engineering & AI Architectures',
    description:
      'We construct high-frequency cloud architectures, automated AI agent workflows, and audited zero-trust cybersecurity shields.',
    creator: '@nexvoratech',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="bg-slate-955 text-slate-105 flex min-h-full flex-col font-sans transition-colors duration-250">
        <ThemeProvider>
          <ToastProvider>
            {children}
            {/* <FloatingCTA /> */}
          </ToastProvider>
        </ThemeProvider>
        
        {/* Move Script outside of body or keep it in head for better performance */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
        >
          {`
            (function() {
              try {
                var theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch (e) {}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
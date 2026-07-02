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
    default: 'Akshay Khot | Full Stack Developer',
    template: '%s | Akshay Khot',
  },
  description:
    'Portfolio of Akshay Khot, a Full Stack Developer specializing in MERN, REST APIs, JWT authentication, and responsive UI design.',
  keywords: [
    'Full Stack Developer',
    'MERN',
    'React',
    'Node.js',
    'MongoDB',
    'JWT',
    'TailwindCSS',
    'Akshay Khot',
  ],
  authors: [{ name: 'Akshay Khot' }],
  creator: 'Akshay Khot',
  metadataBase: new URL('https://akshay-khot-portfolio'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akshay-khot-portfolio',
    title: 'Akshay Khot | Full Stack Developer',
    description:
      'Portfolio of Akshay Khot, a Full Stack Developer specializing in MERN, REST APIs, JWT authentication, and responsive UI design.',
    siteName: 'Akshay Khot',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Akshay Khot Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshay Khot | Full Stack Developer',
    description:
      'Portfolio of Akshay Khot, a Full Stack Developer specializing in MERN, REST APIs, JWT authentication, and responsive UI design.',
    creator: '@akshaykhot',
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
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>

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

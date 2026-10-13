'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';
import axios from 'axios';
import Image from 'next/image';
import { apiService } from '@/services/api';

import { useToast } from '@/providers/toast-provider';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/providers/theme-provider';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { theme } = useTheme();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await apiService.submitLead({ email, source: 'newsletter_footer' });
      if (response.success) {
        toast(response.message, 'success');
        setEmail('');
      } else {
        toast(response.error || 'Subscription failed', 'error');
      }
    } catch (err: unknown) {
      let errMsg = 'Failed to subscribe. Please try again.';
      if (axios.isAxiosError(err)) {
        errMsg = err.response?.data?.error || errMsg;
      }
      toast(errMsg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-slate-955 relative z-10 w-full border-t border-slate-900/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 text-left md:grid-cols-4 md:py-24">
        {/* Branding Col */}
        <div className="flex flex-col gap-6 md:col-span-1">
          <Link href="/" className="group flex items-center">
            <span className="inline-flex items-center justify-center rounded-2xl border border-slate-800/70 bg-slate-900/80 px-3 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100 shadow-sm shadow-slate-950/20 transition duration-300 group-hover:bg-slate-800/90">
              AK
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Architecting next-generation digital platforms for forward-thinking enterprises.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="transition-colors hover:text-slate-100" aria-label="Twitter">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/akshay-khot-developer/" target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-slate-100" aria-label="LinkedIn">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://github.com/Akshay5899" target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-slate-100" aria-label="GitHub">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Cols */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
            Services
          </span>
          <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
            <li>
              <Link href="/services" className="transition-colors hover:text-slate-100">
                Custom Architecture
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors hover:text-slate-100">
                AI Integrations
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors hover:text-slate-100">
                Cybersecurity Auditing
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors hover:text-slate-100">
                Cloud Orchestration
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
            Company
          </span>
          <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
            <li>
              <Link href="/about" className="transition-colors hover:text-slate-100">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="transition-colors hover:text-slate-100">
                Projects Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-slate-100">
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Col */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold font-semibold tracking-widest text-slate-200 uppercase">
            Subscribe to Insights
          </span>
          <p className="text-slate-450 text-sm leading-relaxed">
            Get the latest technical analyses on AI, cybersecurity, and cloud orchestration.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute top-3.5 left-3 h-4 w-4 text-slate-500" />
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2.5 pr-4 pl-9 text-sm text-slate-200 focus:border-slate-700 focus:outline-none"
              />
            </div>
            <Button type="submit" variant="primary" size="sm" disabled={loading}>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </Button>
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-800/40 px-6 py-8 text-xs text-slate-500 md:flex-row dark:border-slate-900/60">
        <span>© {new Date().getFullYear()} Akshay Khot. All rights reserved.</span>
        <span>Made with ❤️ for modern engineering.</span>
      </div>
    </footer>
  );
};


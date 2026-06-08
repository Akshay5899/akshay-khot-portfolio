'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '@/constants';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/providers/theme-provider';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2 rounded-2xl border transition-all duration-300 ${
        scrolled
          ? 'border-slate-800/80 bg-slate-900/80 px-6 py-3.5 shadow-2xl backdrop-blur-md'
          : 'border-transparent bg-transparent px-6 py-5'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Brand Logo NV - Official SVG switcher */}
        <Link href="/" className="group flex items-center">
          <Image
            src={
              theme === 'dark'
                ? '/Assets/images/nv_logo_white.svg'
                : '/Assets/images/nv_logo_black.svg'
            }
            alt="Nexvora Logo"
            width={140}
            height={28}
            className="h-7 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <nav className="relative hidden items-center gap-8 md:flex">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname
              ? link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname.startsWith(link.href + '/')
              : false;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:text-slate-100 ${
                  isActive ? 'text-slate-100' : 'text-slate-350'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="bg-indigo-650/10 absolute inset-0 -z-10 rounded-lg border border-indigo-500/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons (Theme Toggle + Consultation) */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggleTheme}
            className="text-slate-350 cursor-pointer rounded-xl border border-slate-800 bg-slate-900/40 p-2 transition-all duration-200 hover:bg-slate-800/40 hover:text-slate-100"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600" />
            )}
          </button>

          <Link href="/contact">
            <Button variant="glass" size="sm" className="group !px-4 !py-2">
              <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase">
                Consultation
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Theme Switcher + Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-slate-350 cursor-pointer rounded-xl border border-slate-800 bg-slate-900/40 p-2 transition-all hover:text-slate-100"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-slate-400 transition-colors hover:text-slate-100 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 overflow-hidden rounded-xl border-t border-slate-800/60 bg-slate-900 md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8 text-left">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = pathname
                  ? link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href || pathname.startsWith(link.href + '/')
                  : false;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-bold tracking-wider uppercase transition-colors ${
                      isActive ? 'text-indigo-400' : 'text-slate-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button
                  variant="primary"
                  className="w-full py-3 text-xs font-bold tracking-wider uppercase"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const FloatingCTA = () => {
  const pathname = usePathname();

  // Hide the floating CTA on the contact page to prevent redundancy
  if (pathname === '/contact') return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link href="/contact" aria-label="Book Consultation">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-indigo-650 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-2xl shadow-indigo-600/30 cursor-pointer border border-indigo-500/25 transition-all group overflow-hidden"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>

          <MessageSquare className="h-4.5 w-4.5 shrink-0" />
          <span className="text-[10px] font-bold uppercase tracking-wider hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
            Book Consultation
          </span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </motion.div>
      </Link>
    </div>
  );
};

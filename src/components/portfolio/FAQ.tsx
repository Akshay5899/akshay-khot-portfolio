'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Card } from '@/components/ui/Card';
import { FAQS } from '@/constants';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  const filteredFAQs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SectionContainer id="faq" className="border-t border-slate-900/60 py-20 md:py-28 bg-slate-955">
      <div className="text-center flex flex-col items-center gap-4 mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Technical Support</span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight uppercase font-display">
          Frequently Answered Queries
        </h2>
        <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
          Overcome standard integration hesitations and review the structural and security specifications of our agency workflows.
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-lg mx-auto mb-12 relative w-full px-6 md:px-0">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search queries, capabilities, or pricing..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-slate-700 text-slate-200 transition-colors"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-4 w-full text-left">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <Card
                key={idx}
                className="p-0 overflow-hidden hover:border-indigo-500/20 border border-slate-800 bg-slate-900/40 transition-colors cursor-pointer select-none"
                hoverEffect={false}
                onClick={() => toggleFAQ(idx)}
              >
                {/* Question Bar */}
                <div className="p-6 md:p-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                    <h3 className="text-sm md:text-base font-bold text-slate-100 font-display">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="h-8 w-8 rounded-lg bg-slate-955 border border-slate-800/40 dark:border-slate-900/60 flex items-center justify-center text-slate-450 shrink-0"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-7 pb-7 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-slate-800/40 dark:border-slate-900/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })
        ) : (
          <div className="text-center py-12 text-slate-500 text-xs">
            No query matches &ldquo;{searchQuery}&rdquo;. Try another search term.
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

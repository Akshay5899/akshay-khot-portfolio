'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Card } from '@/components/ui/Card';
import { TESTIMONIALS } from '@/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const Testimonials = () => {
  return (
    <SectionContainer id="testimonials" className="border-t border-slate-900/60">
      <div className="text-center flex flex-col items-center gap-4 mb-20">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Social Proof</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
          Trusted by Engineering Leaders
        </h2>
        <p className="text-slate-400 max-w-xl text-sm md:text-base leading-relaxed">
          See how we deploy robust software, secure frameworks, and high-frequency clusters for leading technology platforms.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      >
        {TESTIMONIALS.map((testimonial, idx) => (
          <motion.div key={testimonial.name} variants={fadeInUp} custom={idx} className="h-full">
            <Card className="h-full flex flex-col justify-between p-8 hover:border-indigo-500/20">
              {/* Rating stars & Quote icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-indigo-500 text-indigo-500" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-slate-700/60 shrink-0" />
              </div>

              {/* Quote details */}
              <p className="text-sm text-slate-300 leading-relaxed font-sans mb-8 relative border-l-2 border-indigo-500/30 pl-4 py-0.5">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Meta details */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800/40 dark:border-slate-900/60 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden border border-slate-800 bg-slate-900">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">{testimonial.name}</h4>
                    <p className="text-[10px] text-slate-450">
                      {testimonial.role} at <span className="text-indigo-400 font-semibold">{testimonial.company}</span>
                    </p>
                  </div>
                </div>

                {testimonial.verified && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] uppercase font-bold tracking-widest text-emerald-400 select-none">
                    <CheckCircle className="h-2.5 w-2.5" /> Verified
                  </span>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

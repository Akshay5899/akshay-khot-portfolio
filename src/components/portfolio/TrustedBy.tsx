'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Globe, Database, Network } from 'lucide-react';

const PARTNERS = [
  { name: 'Aether Systems', icon: Network, color: 'text-indigo-400' },
  { name: 'Nova AI Labs', icon: Brain, color: 'text-blue-400' },
  { name: 'Vortex Health', icon: Shield, color: 'text-emerald-400' },
  { name: 'Zenith Cloud', icon: Globe, color: 'text-violet-400' },
  { name: 'Quantum Dyn', icon: Zap, color: 'text-amber-400' },
  { name: 'Matrix DevOps', icon: Database, color: 'text-rose-400' },
  { name: 'Atlas Security', icon: Shield, color: 'text-cyan-400' },
  { name: 'Nexus AI', icon: Brain, color: 'text-purple-400' },
];

export const TrustedBy = () => {
  return (
    <section className="relative py-12 overflow-hidden border-y border-slate-800/30">
      {/* Gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-slate-950 z-10 pointer-events-none" />
      
      <div className="mb-8 px-6">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-6 bg-gradient-to-r from-transparent to-indigo-500/30" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Trusted by innovative teams worldwide
          </span>
          <div className="h-px w-6 bg-gradient-to-l from-transparent to-indigo-500/30" />
        </div>
      </div>

      {/* Single seamless marquee */}
      <div className="flex overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex gap-8 pr-8"
          style={{ width: 'fit-content' }}
        >
          {/* First set */}
          {PARTNERS.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={`first-${partner.name}-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/20 border border-slate-800/20 hover:border-slate-700/40 hover:bg-slate-900/40 transition-all duration-300 cursor-default group shrink-0"
              >
                <Icon className={`h-5 w-5 ${partner.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            );
          })}
          
          {/* Seamless separator dot */}
          <div className="flex items-center shrink-0">
            <div className="w-2 h-2 rounded-full bg-indigo-500/30" />
          </div>
          
          {/* Duplicate set for seamless loop */}
          {PARTNERS.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={`second-${partner.name}-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/20 border border-slate-800/20 hover:border-slate-700/40 hover:bg-slate-900/40 transition-all duration-300 cursor-default group shrink-0"
              >
                <Icon className={`h-5 w-5 ${partner.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm font-semibold text-slate-300 group-hover:text-purple-700 transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

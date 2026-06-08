'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap } from 'lucide-react';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Card } from '@/components/ui/Card';
import { FEATURES } from '@/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const Features = () => {
  return (
    <SectionContainer id="features" className="py-24 border-t border-slate-900/60 bg-slate-955 relative">
      {/* Glow spots */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />
      
      <div className="text-center flex flex-col items-center gap-4 mb-20">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">ENGINEERING EXCELLENCE</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tight uppercase font-display">
          Hardened Architecture Principles
        </h2>
        <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
          We go beyond standard setups. We build bulletproof database schemas and custom enclaves optimized for high transaction loads.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">
        
        {/* Left Col: Core values card & SVG Architectural Blueprint */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md relative overflow-hidden shadow-2xl">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none" />
            
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-4 font-mono">
              [SECURE_NODE_TELEMETRY]
            </span>
            <h3 className="text-2xl font-black text-slate-100 mb-6 tracking-tight leading-snug font-display uppercase">
              Zero-Trust Shield & SLA Guard
            </h3>
            
            {/* Architectural Zero-Trust SVG Blueprint */}
            <div className="w-full h-40 rounded-xl bg-slate-900/60 dark:bg-slate-950/80 border border-slate-800/40 dark:border-slate-900/60 flex items-center justify-center p-4 mb-6 relative overflow-hidden">
              <svg className="w-full h-full text-indigo-500/20" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blueprint-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7E22CE" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* Central secure enclave */}
                <circle cx="100" cy="50" r="18" stroke="url(#blueprint-grad)" strokeWidth="1.5" fill="rgba(17, 18, 27, 0.9)" strokeDasharray="3 3" className="animate-spin duration-[20s]" />
                <circle cx="100" cy="50" r="8" fill="url(#blueprint-grad)" />
                
                {/* Connecting nodes */}
                <circle cx="30" cy="30" r="4" fill="#3B82F6" />
                <circle cx="30" cy="70" r="4" fill="#3B82F6" />
                <circle cx="170" cy="30" r="4" fill="#7E22CE" />
                <circle cx="170" cy="70" r="4" fill="#7E22CE" />
                
                {/* Connector paths */}
                <path d="M34 30 L82 50" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                <path d="M34 70 L82 50" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                <path d="M166 30 L118 50" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                <path d="M166 70 L118 50" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              </svg>
              <div className="absolute bottom-2 left-3 text-[8px] font-mono text-slate-500 uppercase tracking-wider">
                Shield Status: Hardened
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm text-slate-350">
                <ShieldCheck className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-200 uppercase text-xs">Zero-Trust Protocol</h4>
                  <p className="text-[11px] text-slate-450 leading-relaxed">Guaranteed secure enclave operations and encrypted datastores.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-350">
                <Award className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-200 uppercase text-xs">SLA Enforcement</h4>
                  <p className="text-[11px] text-slate-450 leading-relaxed">We guarantee rapid system responses and reliable scaling.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-350">
                <Zap className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-200 uppercase text-xs">Low Latency Pipelines</h4>
                  <p className="text-[11px] text-slate-450 leading-relaxed">Custom database schemas structured to eliminate runtime lags.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Features grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
        >
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            
            // Setup mock telemetry sub-attributes based on feature cards
            const subAttributes = [
              { label: 'Uptime', value: '99.999%' },
              { label: 'Latency Target', value: '<2.5ms' },
            ];
            if (idx === 1) {
              subAttributes[0] = { label: 'Auth Enclave', value: 'OAuth/JWT' };
              subAttributes[1] = { label: 'Compliance Level', value: 'SOC2 Ready' };
            } else if (idx === 2) {
              subAttributes[0] = { label: 'Cache Hit Rate', value: '98.4%' };
              subAttributes[1] = { label: 'Index Optimization', value: 'Mongoose' };
            } else if (idx === 3) {
              subAttributes[0] = { label: 'Failover Rate', value: '0.00%' };
              subAttributes[1] = { label: 'Sync Time', value: 'Real-Time' };
            }

            return (
              <motion.div key={feature.title} variants={fadeInUp} custom={idx} className="h-full">
                <Card className="h-full flex flex-col gap-6 p-8 bg-slate-900/40 border border-slate-800/40 dark:border-slate-900/60 hover:border-indigo-500/25 transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="h-12 w-12 rounded-xl bg-slate-900/20 dark:bg-slate-955/20 border border-slate-800/40 dark:border-slate-900/60 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300 shadow-inner">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-slate-100 font-display group-hover:text-slate-100 transition-colors duration-250">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Telemetry sub attributes for outstanding design detailing */}
                  <div className="border-t border-slate-800/40 pt-4 flex gap-4 mt-auto">
                    {subAttributes.map((attr) => (
                      <div key={attr.label} className="flex flex-col gap-0.5">
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">{attr.label}</span>
                        <span className="text-[10px] font-mono text-slate-350 font-bold">{attr.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

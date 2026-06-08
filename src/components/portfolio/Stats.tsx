'use client';

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Shield, Cpu, Zap, Activity, Database, Lock, Bot } from 'lucide-react';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const STATS_ITEMS = [
  {
    icon: Activity,
    value: '99.999%',
    label: 'Uptime Guarantee SLA',
    description: 'Ensuring absolute resilience for high-transaction API environments.',
    glow: 'rgba(99, 102, 241, 0.12)',
    glowBorder: 'rgba(99, 102, 241, 0.35)',
    iconColor: 'text-indigo-400',
    params: [
      ['Transit Time', '0.04ms'],
      ['Loss Factor', '0.000%'],
      ['Audit Rate', 'Continuous'],
    ]
  },
  {
    icon: Zap,
    value: '1.2B+',
    label: 'Daily Telemetry Events',
    description: 'Processed through high-frequency cloud queue backends.',
    glow: 'rgba(59, 130, 246, 0.12)',
    glowBorder: 'rgba(59, 130, 246, 0.35)',
    iconColor: 'text-blue-400',
    params: [
      ['Active Nodes', '150+'],
      ['Availability', '99.999%'],
      ['Deployment', 'Kubernetes'],
    ]
  },
  {
    icon: Lock,
    value: '450+',
    label: 'Security Audits Executed',
    description: 'Thoroughly scanned, hardened, and compliance-certified systems.',
    glow: 'rgba(16, 185, 129, 0.12)',
    glowBorder: 'rgba(16, 185, 129, 0.35)',
    iconColor: 'text-emerald-400',
    params: [
      ['Audit Standard', 'SOC2 / ISO'],
      ['Compliance', 'GDPR / HIPAA'],
      ['Enclave Crypt', 'SHA-256'],
    ]
  },
  {
    icon: Bot,
    value: '85+',
    label: 'AI Agents In Production',
    description: 'Custom fine-tuned cognitive workflows driving business processes.',
    glow: 'rgba(139, 92, 246, 0.12)',
    glowBorder: 'rgba(139, 92, 246, 0.35)',
    iconColor: 'text-violet-400',
    params: [
      ['Agency Rating', '100% / A+'],
      ['NPS Score', '82+'],
      ['Telemetry Level', 'SOC2 Enclave'],
    ]
  },
];

interface StatsCardProps {
  item: typeof STATS_ITEMS[0];
  idx: number;
}

const StatsCard = ({ item, idx }: StatsCardProps) => {
  const Icon = item.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(
    280px circle at ${mouseX}px ${mouseY}px,
    ${item.glow},
    transparent 80%
  )`;
  const borderHighlight = useMotionTemplate`radial-gradient(
    140px circle at ${mouseX}px ${mouseY}px,
    ${item.glowBorder},
    transparent 70%
  )`;

  return (
    <motion.div variants={fadeInUp} custom={idx} className="h-full">
      <div
        onMouseMove={handleMouseMove}
        className="group relative h-full rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/20 backdrop-blur-sm p-7 hover:bg-slate-900/40 hover:border-slate-700/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
      >
        {/* Corner Bracket Accents */}
        <div className="sc-tl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="sc-tr opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="sc-bl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="sc-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Spotlights */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
          style={{ background: spotlightBg }}
        />
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
          style={{ background: borderHighlight }}
        />

        {/* Header telemetry info */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="h-10 w-10 rounded-xl bg-slate-950/60 flex items-center justify-center border border-slate-800 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-105 transition-all duration-300 shrink-0">
              <Icon className={`h-5 w-5 ${item.iconColor}`} />
            </div>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">
              NODE_0{idx + 1}
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-100 font-display mb-2">
            {item.value}
          </h3>
        </div>

        {/* Labels */}
        <div className="flex flex-col gap-1 mt-3">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider group-hover:text-indigo-400 transition-colors">
            {item.label}
          </h4>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-5">
            {item.description}
          </p>
        </div>

        {/* Mock telemetry parameter monitoring logs */}
        <div className="border-t border-slate-800/80 pt-4 flex flex-col gap-2 mt-auto">
          {item.params.map(([key, val]) => (
            <div key={key} className="flex justify-between items-center text-[9px] font-mono">
              <span className="text-slate-500">{key}</span>
              <span className="text-slate-300 font-semibold">{val}</span>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export const Stats = () => {
  return (
    <SectionContainer id="stats" className="pt-12 pb-24 bg-slate-955/50 relative overflow-hidden border-t border-slate-900/60">
      {/* Background glow radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-650/4 blur-[120px] pointer-events-none -z-10" />

      {/* Telemetry alert indicator */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/40 dark:bg-slate-950/80 border border-slate-800/60 dark:border-slate-800/80 text-[9px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 select-none shadow-md font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
          ACTIVE CLUSTER TELEMETRY ONLINE
        </div>
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10 max-w-7xl mx-auto px-6"
      >
        {STATS_ITEMS.map((item, idx) => (
          <StatsCard key={item.label} item={item} idx={idx} />
        ))}
      </motion.div>
    </SectionContainer>
  );
};

'use client';

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Terminal, Layout, Database, Cloud } from 'lucide-react';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const TECH_CATEGORIES = [
  {
    icon: Terminal,
    title: 'Languages & Core',
    badge: 'RUNTIME',
    items: ['Go / Golang', 'TypeScript', 'Rust', 'Python'],
    color: 'text-indigo-400',
    glow: 'rgba(99, 102, 241, 0.15)',
    glowBorder: 'rgba(99, 102, 241, 0.4)',
    dotColor: 'bg-indigo-500',
    tagBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
  },
  {
    icon: Layout,
    title: 'Frontend Frameworks',
    badge: 'INTERFACE',
    items: ['Next.js (App Router)', 'React 19', 'Tailwind CSS v4', 'GraphQL'],
    color: 'text-blue-400',
    glow: 'rgba(59, 130, 246, 0.15)',
    glowBorder: 'rgba(59, 130, 246, 0.4)',
    dotColor: 'bg-blue-500',
    tagBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    badge: 'DEVOPS',
    items: ['Kubernetes Orchestration', 'AWS Ecosystem', 'HashiCorp Terraform', 'Docker / Containerization'],
    color: 'text-violet-400',
    glow: 'rgba(139, 92, 246, 0.15)',
    glowBorder: 'rgba(139, 92, 246, 0.4)',
    dotColor: 'bg-violet-500',
    tagBg: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
  },
  {
    icon: Database,
    title: 'Databases & Ingestion',
    badge: 'DATA LAYER',
    items: ['PostgreSQL', 'MongoDB', 'Redis Caching', 'Apache Kafka Streams'],
    color: 'text-emerald-400',
    glow: 'rgba(16, 185, 129, 0.15)',
    glowBorder: 'rgba(16, 185, 129, 0.4)',
    dotColor: 'bg-emerald-500',
    tagBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  },
];

/* ── Glowing card with mouse-tracking spotlight ────────────────────────── */
interface GlowCardProps {
  category: typeof TECH_CATEGORIES[0];
  idx: number;
}

const TechCard = ({ category, idx }: GlowCardProps) => {
  const Icon = category.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(
    300px circle at ${mouseX}px ${mouseY}px,
    ${category.glow},
    transparent 80%
  )`;
  const borderHighlight = useMotionTemplate`radial-gradient(
    140px circle at ${mouseX}px ${mouseY}px,
    ${category.glowBorder},
    transparent 70%
  )`;

  return (
    <motion.div variants={fadeInUp} custom={idx} className="h-full">
      <div
        onMouseMove={handleMouseMove}
        className="group relative h-full rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-slate-700/60 flex flex-col"
      >
        {/* Mouse-tracking spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
          style={{ background: spotlightBg }}
        />
        {/* Mouse-tracking border shimmer */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
          style={{ background: borderHighlight }}
        />

        {/* Top corner gradient accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.03] via-transparent to-transparent pointer-events-none" />

        {/* Corner bracket accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-xl border-transparent group-hover:border-indigo-500/40 transition-all duration-300" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-xl border-transparent group-hover:border-indigo-500/40 transition-all duration-300" />

        <div className="relative z-10 flex flex-col h-full p-7 gap-5">

          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div className={`h-11 w-11 rounded-xl bg-slate-955 flex items-center justify-center border border-slate-800/40 dark:border-slate-900/60 group-hover:border-slate-700/60 transition-colors duration-300 shrink-0`}>
              <Icon className={`h-5 w-5 ${category.color}`} />
            </div>
            <span className={`px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest border ${category.tagBg} font-mono`}>
              {category.badge}
            </span>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-sm font-black text-slate-700 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 uppercase tracking-widest transition-colors duration-300 font-display">
              {category.title}
            </h3>
            <div className="mt-2 h-px w-full bg-gradient-to-r from-slate-800/60 via-slate-700/20 to-transparent group-hover:from-indigo-500/30 transition-all duration-500" />
          </div>

          {/* Tech items */}
          <div className="flex flex-col gap-2 mt-auto">
            {category.items.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/20 dark:bg-slate-950/40 border border-slate-800/30 dark:border-slate-900/50 hover:border-slate-700/60 transition-all duration-200 group/item"
              >
                <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${category.dotColor} shadow-[0_0_6px_1px] opacity-70 group-hover/item:opacity-100`}
                  style={{ boxShadow: `0 0 6px 1px ${category.glow.replace('0.15', '0.8')}` }}
                />
                <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400 group-hover/item:text-black dark:group-hover/item:text-slate-200 transition-colors">
                  {item}
                </span>
                {/* Faint index */}
                <span className="ml-auto font-mono text-[8px] text-slate-700/40 dark:text-slate-600/50">0{i + 1}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

/* ── Section ───────────────────────────────────────────────────────────── */
export const TechStack = () => {
  return (
    <SectionContainer id="techstack" className="pt-16 pb-24 bg-slate-955 relative border-t border-slate-900/60">
      {/* Background glows */}
      <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] bg-indigo-600/4 blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center flex flex-col items-center gap-4 mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">TELEMETRY MATRIX</span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight font-display uppercase">
          Our Technology Stack
        </h2>
        <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
          We employ modern, performant, and memory-safe tools configured for high scaling.
        </p>
      </div>

      {/* Cards grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      >
        {TECH_CATEGORIES.map((category, idx) => (
          <TechCard key={category.title} category={category} idx={idx} />
        ))}
      </motion.div>
    </SectionContainer>
  );
};

'use client';

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Shield, Cpu, Zap, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const BENEFITS = [
  {
    icon: Zap,
    title: 'MERN Stack Expertise',
    description: 'Build responsive, high-performance web applications using React, Node.js, Express, and MongoDB.',
    badge: 'STACK',
    glow: 'rgba(99, 102, 241, 0.12)',
    glowBorder: 'rgba(99, 102, 241, 0.35)',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Shield,
    title: 'Secure API Development',
    description: 'Design and implement RESTful APIs with JWT authentication and robust backend security safeguards.',
    badge: 'SECURITY',
    glow: 'rgba(16, 185, 129, 0.12)',
    glowBorder: 'rgba(16, 185, 129, 0.35)',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Cpu,
    title: 'Clean Code & Maintainability',
    description: 'Deliver maintainable project architecture with scalable components, reusable patterns, and performance optimization.',
    badge: 'QUALITY',
    glow: 'rgba(59, 130, 246, 0.12)',
    glowBorder: 'rgba(59, 130, 246, 0.35)',
    iconColor: 'text-blue-400',
  },
  {
    icon: Users,
    title: 'Collaborative Delivery',
    description: 'Work closely with teams and clients to ship reliable solutions on time, with clear communication and agile execution.',
    badge: 'DELIVERY',
    glow: 'rgba(139, 92, 246, 0.12)',
    glowBorder: 'rgba(139, 92, 246, 0.35)',
    iconColor: 'text-violet-400',
  },
];

interface BenefitCardProps {
  benefit: typeof BENEFITS[0];
  idx: number;
}

const BenefitCard = ({ benefit, idx }: BenefitCardProps) => {
  const Icon = benefit.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(
    260px circle at ${mouseX}px ${mouseY}px,
    ${benefit.glow},
    transparent 80%
  )`;
  const borderHighlight = useMotionTemplate`radial-gradient(
    130px circle at ${mouseX}px ${mouseY}px,
    ${benefit.glowBorder},
    transparent 70%
  )`;

  return (
    <motion.div variants={fadeInUp} custom={idx} className="h-full">
      <div
        onMouseMove={handleMouseMove}
        className="group relative h-full rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/20 backdrop-blur-sm p-7 hover:bg-slate-900/40 hover:border-slate-700/60 transition-all duration-300 flex flex-col gap-5 overflow-hidden"
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

        {/* Header row */}
        <div className="flex items-start justify-between">
          <div className="h-10 w-10 rounded-xl bg-slate-950/60 flex items-center justify-center border border-slate-800 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-105 transition-all duration-300 shrink-0">
            <Icon className={`h-5 w-5 ${benefit.iconColor}`} />
          </div>
          <span className="px-2 py-0.5 rounded-md text-[8px] font-bold tracking-widest text-slate-500 border border-slate-800/60 font-mono">
            {benefit.badge}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold text-slate-200 tracking-wide font-display group-hover:text-indigo-400 transition-colors uppercase">
            {benefit.title}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-350 transition-colors">
            {benefit.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const WhyAkshay = () => {
  return (
    <section className="py-24 bg-slate-955 relative overflow-hidden border-t border-slate-900/60">
      {/* Background glow radial */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] pointer-events-none -z-10 animate-pulse duration-[8s]" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-600/4 blur-[120px] pointer-events-none -z-10 animate-pulse duration-[10s]" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <div className="inline-flex items-center gap-2.5">
            <div className="w-6 h-px bg-gradient-to-r from-transparent to-indigo-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-400">
              Why Work With Me
            </span>
            <div className="w-6 h-px bg-gradient-to-r from-indigo-500/60 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight font-display uppercase">
            Built for Reliability, <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">Designed for Growth</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
            I build scalable MERN applications, secure REST APIs, and responsive interfaces with an emphasis on clean code, performance, and business value.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10"
        >
          {BENEFITS.map((benefit, idx) => (
            <BenefitCard key={benefit.title} benefit={benefit} idx={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


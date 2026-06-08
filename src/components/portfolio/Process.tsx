'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { SectionContainer } from '@/components/shared/SectionContainer';

const PROCESS_STEPS_LIST = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description: 'Deep-dive audits into your legacy systems, user requirements, and technical boundaries to map out a clear roadmap.',
  },
  {
    step: '02',
    title: 'UI/UX Design Systems',
    description: 'We construct high-fidelity interactive wireframes, UX funnels, and component-driven Figma systems.',
  },
  {
    step: '03',
    title: 'Precision Coding',
    description: 'AI-accelerated sprints with modular architecture, strict static typing, and automated GitOps CI/CD pipelines.',
  },
  {
    step: '04',
    title: 'QA Hardening & Auditing',
    description: 'Stress testing, vulnerability scanning, pen-tests, and browser compatibility checks across all edge cases.',
  },
  {
    step: '05',
    title: 'Zero-Downtime Launch',
    description: 'Zero-downtime cluster orchestration deployments with performance fine-tuning and scale parameters.',
  },
  {
    step: '06',
    title: 'Observability & Growth',
    description: 'Ongoing performance telemetry monitoring, telemetry loop optimizations, and incremental scaling updates.',
  },
];

/* ── Timeline Node component ── */
interface NodeProps {
  idx: number;
  step: typeof PROCESS_STEPS_LIST[0];
  activeStep: number | null;
  hoveredNode: number | null;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
}

const TimelineNode = ({ idx, step, activeStep, hoveredNode, onHoverEnter, onHoverLeave }: NodeProps) => {
  const isActive = activeStep === idx;
  const isHovered = hoveredNode === idx;

  return (
    <motion.div
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      className="relative flex items-center justify-center cursor-pointer z-20"
    >
      {/* Rotating status outer ring */}
      <motion.div
        animate={{
          rotate: isHovered || isActive ? 360 : 0,
          scale: isHovered || isActive ? 1.15 : 1,
        }}
        transition={{
          rotate: { duration: 4, repeat: isHovered || isActive ? Infinity : 0, ease: 'linear' },
          scale: { duration: 0.3 },
        }}
        className="w-14 h-14 rounded-full border border-slate-700/60 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      >
        {/* Inner glow dot */}
        <div className={`w-3.5 h-3.5 rounded-full transition-all duration-350 ${
          isActive
            ? 'bg-indigo-400 shadow-[0_0_20px_6px_rgba(99,102,241,0.7)]'
            : 'bg-indigo-600 shadow-[0_0_10px_2px_rgba(99,102,241,0.3)]'
        }`} />
      </motion.div>

      {/* Mini step index badge */}
      <div className="absolute -top-1 -right-1 w-5.5 h-5.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center z-30 shadow-md">
        <span className="text-[9px] font-black text-indigo-400 font-mono">{step.step}</span>
      </div>

      {/* Ripple ring */}
      <motion.div
        animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: idx * 0.3 }}
        className="absolute w-14 h-14 rounded-full border border-indigo-500/30 pointer-events-none z-0"
      />
    </motion.div>
  );
};

/* ── Step Card component ── */
interface StepCardProps {
  step: typeof PROCESS_STEPS_LIST[0];
  idx: number;
  activeStep: number | null;
}

const StepCard = ({ step, idx, activeStep }: StepCardProps) => {
  const isActive = activeStep === idx;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(
    280px circle at ${mouseX}px ${mouseY}px,
    rgba(123, 58, 235, 0.12),
    rgba(59, 130, 246, 0.05) 50%,
    transparent 80%
  )`;
  const borderHighlight = useMotionTemplate`radial-gradient(
    140px circle at ${mouseX}px ${mouseY}px,
    rgba(168, 85, 247, 0.35),
    transparent 70%
  )`;

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative p-6 md:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-400 overflow-hidden ${
        isActive
          ? 'bg-slate-900/90 border-indigo-500/30 shadow-2xl shadow-indigo-500/10'
          : 'bg-slate-900/30 border-slate-800/40 hover:border-slate-700/60 hover:bg-slate-900/40'
      }`}
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

      {/* Floating step index watermark */}
      <div className="absolute top-2 right-4 text-7xl font-black text-slate-800/15 dark:text-slate-700/15 select-none leading-none font-display">
        {step.step}
      </div>

      {/* Card Body */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold border transition-all duration-300 font-mono ${
            isActive
              ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
              : 'bg-slate-950/40 text-slate-400 border-slate-850'
          }`}>
            {step.step}
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent" />
        </div>

        <h3 className="text-lg font-bold mb-2 transition-colors duration-300 text-slate-200 group-hover:text-indigo-400 font-display uppercase tracking-wide">
          {step.title}
        </h3>
        <p className="text-xs sm:text-[13px] leading-relaxed text-slate-400 group-hover:text-slate-350 transition-colors duration-300">
          {step.description}
        </p>

        {/* Telemetry Dots */}
        <div className="mt-5 flex items-center gap-1.5">
          {PROCESS_STEPS_LIST.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i < idx
                  ? 'w-1.5 h-1.5 bg-indigo-500/50'
                  : i === idx
                    ? `w-3.5 h-1.5 ${isActive ? 'bg-indigo-400 shadow-[0_0_8px_#6366f1]' : 'bg-indigo-500'}`
                    : 'w-1.5 h-1.5 bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Process = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.15'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <SectionContainer id="process" className="py-24 bg-slate-955 relative overflow-hidden border-t border-slate-900/60">
      {/* Background glow radial */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(123,58,235,0.04)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center flex flex-col items-center gap-4"
        >
          <div className="inline-flex items-center gap-2.5">
            <div className="w-6 h-px bg-gradient-to-r from-transparent to-indigo-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-400">
              How We Work
            </span>
            <div className="w-6 h-px bg-gradient-to-r from-indigo-500/60 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight font-display uppercase">
            From Idea to <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">Launch in 6 Steps</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
            Our battle-tested engineering pipeline ensures highly predictable outcomes, absolute security audits, and continuous scaling parameters.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* Vertical Track Base Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-800/40" />

          {/* Dynamic Scroll Fill Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px overflow-hidden" style={{ height: '100%' }}>
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 shadow-[0_0_12px_2px_rgba(99,102,241,0.4)]"
            />
          </div>

          {/* Moving telemetric dashed lines (simulating packet flows) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[4px] pointer-events-none select-none overflow-hidden opacity-30 z-10">
            <svg width="4" height="100%" className="w-full h-full" style={{ overflow: 'visible' }}>
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="100%"
                stroke="#818cf8"
                strokeWidth="1.5"
                strokeDasharray="12 12"
                style={{
                  animation: 'flow 4s linear infinite',
                }}
              />
            </svg>
          </div>

          {/* Steps Loop */}
          {PROCESS_STEPS_LIST.map((step, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                className="relative mb-14 md:mb-20"
              >
                {/* Desktop layout: 3-column layout */}
                <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] md:items-center">
                  
                  {/* Left Column card or empty space */}
                  <div className="pr-10">
                    {isLeft ? (
                      <StepCard step={step} idx={idx} activeStep={activeStep} />
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>

                  {/* Timeline Center Node */}
                  <div className="flex items-center justify-center">
                    <TimelineNode
                      idx={idx}
                      step={step}
                      activeStep={activeStep}
                      hoveredNode={hoveredNode}
                      onHoverEnter={() => setHoveredNode(idx)}
                      onHoverLeave={() => setHoveredNode(null)}
                    />
                  </div>

                  {/* Right Column card or empty space */}
                  <div className="pl-10">
                    {!isLeft ? (
                      <StepCard step={step} idx={idx} activeStep={activeStep} />
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>
                </div>

                {/* Mobile / Tablet layout (strictly vertical) */}
                <div className="md:hidden flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-indigo-500/50 bg-slate-950 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#6366f1]" />
                    </div>
                    <div className="h-px flex-1 bg-slate-800/60" />
                    <span className="text-[10px] font-bold text-slate-500 font-mono">STEP_0{step.step}</span>
                  </div>
                  <StepCard step={step} idx={idx} activeStep={activeStep} />
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>

      {/* Keyframe utility for telemetric stream dashes */}
      <style jsx>{`
        @keyframes flow {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </SectionContainer>
  );
};

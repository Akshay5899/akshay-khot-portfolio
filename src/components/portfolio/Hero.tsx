'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowRight,
  Shield,
  Terminal,
  Globe,
  Cpu,
  Cloud,
  MessageSquare,
  Palette,
  Database,
  Clock,
  Play,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

/* ── STARS definition for premium canvas background ── */
const STARS = [
  { top: '8%', left: '12%', width: '1.5px', height: '1.5px', d: '4s', dl: '0s', lo: 0.1, hi: 0.6 },
  { top: '15%', left: '72%', width: '2px', height: '2px', d: '3s', dl: '0.8s', lo: 0.15, hi: 0.8 },
  { top: '28%', left: '88%', width: '1px', height: '1px', d: '5s', dl: '1.2s', lo: 0.1, hi: 0.5 },
  { top: '5%', left: '42%', width: '1.5px', height: '1.5px', d: '3.5s', dl: '0.3s', lo: 0.2, hi: 0.7 },
  { top: '40%', left: '6%', width: '1px', height: '1px', d: '6s', dl: '2s', lo: 0.1, hi: 0.4 },
  { top: '52%', left: '93%', width: '1.5px', height: '1.5px', d: '4.5s', dl: '1.5s', lo: 0.1, hi: 0.6 },
  { top: '22%', left: '55%', width: '1px', height: '1px', d: '7s', dl: '0.6s', lo: 0.05, hi: 0.4 },
  { top: '35%', left: '78%', width: '1.5px', height: '1.5px', d: '4.2s', dl: '0.9s', lo: 0.15, hi: 0.65 },
];

/* ── Nodes ─────────────────────────────────────────────────────────── */
const NODES = [
  { id: 0, label: 'Web Apps', sub: 'React & Next.js', icon: Globe, color: '#6366f1', angle: 315 },
  { id: 1, label: 'DevOps', sub: 'K8s & Terraform', icon: Cloud, color: '#3b82f6', angle: 0 },
  { id: 2, label: 'AI / ML', sub: 'TensorFlow & PyTorch', icon: Cpu, color: '#8b5cf6', angle: 45 },
  { id: 3, label: 'Mobile', sub: 'React Native', icon: Terminal, color: '#06b6d4', angle: 90 },
  {
    id: 4,
    label: 'Security',
    sub: 'Zero-Trust & SOC2',
    icon: Shield,
    color: '#10b981',
    angle: 135,
  },
  {
    id: 5,
    label: 'Databases',
    sub: 'Postgres & Mongo',
    icon: Database,
    color: '#f59e0b',
    angle: 180,
  },
  {
    id: 6,
    label: 'Chatbots',
    sub: 'OpenAI & LangChain',
    icon: MessageSquare,
    color: '#ec4899',
    angle: 225,
  },
  { id: 7, label: 'UI / UX', sub: 'Figma & Tailwind', icon: Palette, color: '#a78bfa', angle: 270 },
];

/**
 * Convert polar coords (angle in degrees, radius in %) to x/y % from top-left.
 * angle=0 → top, goes clockwise.
 */
const polar = (angleDeg: number, r: number) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: 50 + r * Math.cos(rad), y: 50 + r * Math.sin(rad) };
};

/* ── Orbital diagram ────────────────────────────────────────────────── */
interface DiagramProps {
  activeId: number;
  onHover: (id: number) => void;
  onLeave: () => void;
}

const OrbitalDiagram = ({ activeId, onHover, onLeave }: DiagramProps) => {
  const CENTER = { x: 50, y: 50 };
  const RADIUS = 37; // slightly larger
  const activeNode = NODES[activeId];

  return (
    /*
     * Key design principle:
     * - The container is a square with overflow:visible so labels peek out
     * - Nodes are positioned with left/top % + translate(-50%,-50%)
     * - The WRAPPER div is NEVER scaled — only the inner icon tile scales
     * - Labels are absolute children of the node wrapper, so they move with the node
     *   but never shift its orbit position
     */
    <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
      {/* ── Background dot grid ── */}
      <div
        className="absolute inset-0 rounded-2xl opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── Outer dashed orbit ring ── */}
      <div
        className="absolute rounded-full border border-dashed border-slate-700/20"
        style={{ inset: `${50 - RADIUS - 1}%` }}
      />

      {/* ── SVG connector lines ── */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ overflow: 'visible', zIndex: 0 }}
      >
        {NODES.map((node) => {
          const pos = polar(node.angle, RADIUS);
          const isActive = node.id === activeId;
          return (
            <g key={node.id}>
              {/* Glow layer: wide + blurred via opacity, works for all orientations */}
              {isActive && (
                <line
                  x1={`${CENTER.x}%`}
                  y1={`${CENTER.y}%`}
                  x2={`${pos.x}%`}
                  y2={`${pos.y}%`}
                  stroke={node.color}
                  strokeWidth={6}
                  strokeOpacity={0.3}
                  strokeLinecap="round"
                />
              )}
              {/* Sharp foreground line */}
              <line
                x1={`${CENTER.x}%`}
                y1={`${CENTER.y}%`}
                x2={`${pos.x}%`}
                y2={`${pos.y}%`}
                stroke={isActive ? node.color : 'rgba(99,102,241,0.12)'}
                strokeWidth={isActive ? 1.5 : 1}
                strokeDasharray={isActive ? undefined : '4 4'}
                strokeLinecap="round"
                style={{ transition: 'stroke 0.5s, stroke-width 0.4s' }}
              />
            </g>
          );
        })}
      </svg>

      {/* ── Center logo ── */}
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        {/* Rotating outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-5 rounded-full border border-dashed"
          style={{ borderColor: `${activeNode.color}25` }}
        />
        {/* Pulsing inner glow */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-2 rounded-2xl"
          style={{
            background: `radial-gradient(circle, ${activeNode.color}20 0%, transparent 70%)`,
          }}
        />
        {/* Logo tile */}
        <div
          className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border bg-white transition-all duration-700 dark:bg-[#060812f5]"
          style={{
            borderColor: `${activeNode.color}35`,
            boxShadow: `0 0 36px 10px ${activeNode.color}18`,
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/Assets/images/ntv_icon.png"
              alt="Nexvora"
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        </div>
        {/* Active label below center */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-1/2 mt-3 -translate-x-1/2 whitespace-nowrap"
          >
            <span
              className="text-[9px] font-bold tracking-widest uppercase"
              style={{ color: activeNode.color }}
            >
              {activeNode.label}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Orbital nodes ── */}
      {NODES.map((node) => {
        const pos = polar(node.angle, RADIUS);
        const Icon = node.icon;
        const isActive = node.id === activeId;
        return (
          <div
            key={node.id}
            onMouseEnter={() => onHover(node.id)}
            onMouseLeave={onLeave}
            className="absolute cursor-pointer"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: isActive ? 20 : 5,
              width: 48,
              height: 48,
            }}
          >
            {/* Sub-label — floats above, never affects node position */}
            <AnimatePresence>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.25 }}
                  className="pointer-events-none absolute rounded px-1.5 py-0.5 text-[7px] font-bold tracking-widest whitespace-nowrap uppercase"
                  style={{
                    color: node.color,
                    background: `${node.color}15`,
                    border: `1px solid ${node.color}35`,
                    bottom: 'calc(100% + 5px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  {node.sub}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Pulse ring — positioned behind icon */}
            {isActive && (
              <motion.div
                animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute inset-0 rounded-xl"
                style={{ border: `2px solid ${node.color}60` }}
              />
            )}

            {/* Icon tile — only this element scales on active */}
            <motion.div
              animate={{ scale: isActive ? 1.15 : 1 }}
              transition={{ duration: 0.35 }}
              className={`flex h-full w-full items-center justify-center rounded-xl border-2 transition-colors duration-400 ${
                isActive ? '' : 'bg-white dark:bg-[#080a14e0]'
              }`}
              style={{
                background: isActive ? `${node.color}18` : undefined,
                borderColor: isActive ? node.color : 'rgba(99,102,241,0.18)',
                boxShadow: isActive ? `0 0 20px 5px ${node.color}35` : 'none',
                backdropFilter: 'blur(16px)',
              }}
            >
              <Icon
                className="h-5 w-5 transition-all duration-400"
                style={{
                  color: isActive ? node.color : 'rgba(99,102,241,0.38)',
                  filter: isActive ? `drop-shadow(0 0 5px ${node.color})` : 'none',
                }}
              />
            </motion.div>

            {/* Label below — never shifts node */}
            <span
              className="pointer-events-none absolute text-[8px] font-bold tracking-wider whitespace-nowrap uppercase transition-colors duration-400"
              style={{
                color: isActive ? node.color : '#475569',
                top: 'calc(100% + 5px)',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {node.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/* ── Hero ───────────────────────────────────────────────────────────── */
export const Hero = () => {
  const [activeId, setActiveId] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => setActiveId((p) => (p + 1) % NODES.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(advance, 1800);
    return () => clearInterval(t);
  }, [paused, advance]);

  const handleHover = (id: number) => {
    setPaused(true);
    setActiveId(id);
  };
  const handleLeave = () => setPaused(false);
  const activeNode = NODES[activeId];

  return (
    <section
      id="home"
      className="bg-slate-955 relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-36 pb-24 border-b border-slate-900/40"
    >
      {/* ── Premium Canvas Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Nebulas */}
        <div className="absolute top-[-120px] left-[-80px] w-[700px] h-[600px] bg-[radial-gradient(ellipse_at_35%_40%,rgba(123,58,235,0.22)_0%,rgba(36,99,233,0.1)_38%,transparent_68%)]" />
        <div className="absolute top-[100px] right-[-100px] w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_60%_30%,rgba(15,166,228,0.12)_0%,rgba(36,99,233,0.06)_45%,transparent_70%)]" />
        <div className="absolute bottom-[-50px] left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_50%_70%,rgba(123,58,235,0.06)_0%,transparent_60%)]" />
        
        {/* Dynamic moving grid */}
        <div className="absolute inset-0 bg-grid-pattern-moving opacity-30" />
        
        {/* Twinkling Stars */}
        {STARS.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.width,
              height: star.height,
              animationDelay: star.dl || '0s',
              // inline styling variables matching globals.css requirements
              // @ts-ignore
              '--d': star.d,
              '--lo': star.lo,
              '--hi': star.hi,
            } as React.CSSProperties}
          />
        ))}

        {/* Vector laser lines */}
        <svg className="absolute bottom-0 left-0 w-full h-[280px] pointer-events-none opacity-40" viewBox="0 0 680 280" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="340" y1="0" x2="0" y2="280" stroke="rgba(123,58,235,0.06)" strokeWidth="1"/>
          <line x1="340" y1="0" x2="100" y2="280" stroke="rgba(123,58,235,0.05)" strokeWidth="1"/>
          <line x1="340" y1="0" x2="200" y2="280" stroke="rgba(123,58,235,0.04)" strokeWidth="1"/>
          <line x1="340" y1="0" x2="680" y2="280" stroke="rgba(15,166,228,0.06)" strokeWidth="1"/>
          <line x1="340" y1="0" x2="580" y2="280" stroke="rgba(15,166,228,0.05)" strokeWidth="1"/>
          <line x1="340" y1="0" x2="480" y2="280" stroke="rgba(15,166,228,0.04)" strokeWidth="1"/>
        </svg>

        {/* Scan line sweep */}
        <div className="scanline" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
        {/* Left Info Column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-8 text-left lg:col-span-7"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2.5"
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-indigo-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              AI-Driven Product Engineering
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-transparent" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="font-display text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] font-extrabold tracking-tight text-slate-100 uppercase"
          >
            We Engineer <br />
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Digital Products
            </span>{" "}
            <br />
            <span className="font-light text-slate-350 capitalize tracking-normal text-3xl sm:text-5xl lg:text-[52px]">
              That Perform Beyond Limits
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="max-w-xl text-xs sm:text-sm leading-relaxed text-slate-400"
          >
            From ambitious startups to enterprise systems — Nexvora builds intelligent, scalable digital products with AI-powered precision, modern architecture, and pixel-perfect design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="flex w-full flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="group w-full sm:w-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 blur-md group-hover:scale-110 transition-transform" />
                <span className="flex items-center justify-center gap-2 font-bold tracking-wider uppercase relative z-10">
                  <Clock className="h-4 w-4 shrink-0" />
                  Schedule Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                variant="glass"
                size="lg"
                className="w-full sm:w-auto font-bold tracking-wider uppercase group"
              >
                <span className="flex items-center justify-center gap-2">
                  <Play className="h-3.5 w-3.5 fill-current shrink-0" />
                  Explore Our Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right orbital diagram column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mx-auto w-full max-w-lg lg:col-span-5"
        >
          {/* Outer color glow that shifts with active node */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full opacity-15 blur-3xl transition-all duration-1000"
            style={{
              background: `radial-gradient(circle, ${activeNode.color} 0%, transparent 65%)`,
            }}
          />
          <OrbitalDiagram activeId={activeId} onHover={handleHover} onLeave={handleLeave} />
        </motion.div>
      </div>
    </section>
  );
};


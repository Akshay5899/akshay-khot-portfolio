'use client';

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Palette,
  Cpu,
  Cloud,
  Database,
} from 'lucide-react';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const SERVICES_LIST = [
  // LEFT COLUMN
  {
    icon: Globe,
    title: 'Web Development',
    description: 'SaaS platforms, portals & custom web apps built with React, Next.js and Node.js at enterprise scale.',
    tags: ['React', 'Next.js', 'Node.js', 'GraphQL'],
    link: '/services?tab=web-development',
    column: 'left',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native-performance iOS & Android apps using React Native and Flutter with App Store optimisation.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    link: '/services?tab=mobile-apps',
    column: 'left',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Research-led UX, Figma design systems and pixel-perfect handoff — wireframe to live product.',
    tags: ['Figma', 'Design Systems', 'UX Research'],
    link: '/services?tab=ui-ux-design',
    column: 'left',
  },
  // RIGHT COLUMN
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'LLM integration, custom ML models and intelligent automation pipelines that drive real business impact.',
    tags: ['OpenAI', 'LangChain', 'Python', 'PyTorch'],
    link: '/services?tab=ai-automation',
    column: 'right',
  },
  {
    icon: Cloud,
    title: 'SaaS Development',
    description: 'Multi-tenant SaaS products with billing, auth and analytics — architected for scale from day one.',
    tags: ['Multi-tenant', 'Stripe', 'AWS', 'Serverless'],
    link: '/services?tab=saas-development',
    column: 'right',
  },
  {
    icon: Database,
    title: 'ERP & CRM Solutions',
    description: 'SAP, Odoo and Salesforce implementation with custom integrations and seamless data migration.',
    tags: ['SAP', 'Odoo', 'Salesforce', 'Migration'],
    link: '/services?tab=erp-crm-solutions',
    column: 'right',
  },
];

interface GlowingCardProps {
  service: typeof SERVICES_LIST[0];
  idx: number;
}

const GlowingServiceCard = ({ service, idx }: GlowingCardProps) => {
  const Icon = service.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  return (
    <motion.div
      variants={fadeInUp}
      custom={idx}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        className="group relative rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/20 backdrop-blur-sm p-6 hover:bg-slate-900/40 dark:hover:bg-indigo-950/5 hover:border-indigo-500/25 transition-all duration-300 flex flex-col gap-4 overflow-hidden h-full"
      >
        {/* Corner Bracket Accents (defined in globals.css) */}
        <div className="sc-tl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="sc-tr opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="sc-bl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="sc-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Dynamic spotlight background */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                rgba(123, 58, 235, 0.12),
                rgba(36, 99, 233, 0.04) 50%,
                transparent 80%
              )
            `,
          }}
        />

        {/* Service Icon with subtle grow */}
        <div className="h-11 w-11 rounded-xl bg-slate-950/60 flex items-center justify-center border border-slate-800 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-105 transition-all duration-300 shrink-0">
          <Icon className="h-5.5 w-5.5" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold text-slate-200 tracking-wide font-display group-hover:text-indigo-400 transition-colors duration-200 uppercase">
            {service.title}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-slate-950/60 border border-slate-800/80 text-[8px] uppercase font-bold tracking-wider text-slate-400 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <Link
          href={service.link}
          className="text-[9px] font-bold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-all flex items-center gap-1 mt-2 group/btn shrink-0"
        >
          Explore Service
          <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const leftServices = SERVICES_LIST.filter(s => s.column === 'left');
  const rightServices = SERVICES_LIST.filter(s => s.column === 'right');

  return (
    <SectionContainer id="services" className="pt-24 pb-24 bg-slate-955 relative overflow-hidden border-t border-slate-900/60">
      {/* Background glow nebulas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(123,58,235,0.06)_0%,transparent_60%)] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center flex flex-col items-center gap-4 mb-20">
        <div className="inline-flex items-center gap-2.5">
          <div className="w-6 h-px bg-gradient-to-r from-transparent to-indigo-500/60" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-400">
            What We Build
          </span>
          <div className="w-6 h-px bg-gradient-to-r from-indigo-500/60 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight font-display uppercase">
          Full-Spectrum Digital <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">Engineering Services</span>
        </h2>
        <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
          From idea to deployment — we cover every layer of the stack with AI-powered speed, precision engineering, and enterprise-grade quality.
        </p>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr_1fr] xl:grid-cols-[500px_1fr_1fr] gap-8 items-center relative z-10 max-w-7xl mx-auto w-full px-6">
        
        {/* LEFT COLUMN: 3D System Architecture Core (order-1 on tablet/mobile for top placement, order-1 on desktop) */}
        <div className="srv-3d flex items-center justify-center order-1 lg:order-1 relative h-[420px] lg:h-[500px] w-full">
          <div className="relative w-full max-w-[480px] h-full min-h-[380px] flex items-center justify-center">
            
            {/* AI Data Stream Connection Lines */}
            <div className="absolute inset-0 pointer-events-none select-none z-5 hidden sm:block">
              <svg width="100%" height="100%" viewBox="0 0 480 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible opacity-50">
                {/* Connection wires from center logo position to each tag */}
                <path d="M 240 220 Q 120 180 80 80" stroke="url(#aiFlowGrad)" strokeWidth="1" strokeDasharray="6 6" style={{ animation: 'aiFlow 5s linear infinite' }} />
                <path d="M 240 220 Q 340 200 405 160" stroke="url(#aiFlowGrad)" strokeWidth="1" strokeDasharray="6 6" style={{ animation: 'aiFlow 4s linear infinite reverse' }} />
                <path d="M 240 220 Q 240 110 220 50" stroke="url(#aiFlowGrad)" strokeWidth="1.2" strokeDasharray="8 8" style={{ animation: 'aiFlow 6s linear infinite' }} />
                
                <defs>
                  <linearGradient id="aiFlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7B3AEB" />
                    <stop offset="100%" stopColor="#0FA6E4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating Cubes */}
            <div className="fcube hidden sm:block bg-gradient-to-br from-indigo-500 to-blue-600 w-2.5 h-2.5" style={{ top: '30px', left: '40px', '--d': '6s', '--r': '12deg' } as React.CSSProperties} />
            <div className="fcube hidden sm:block bg-gradient-to-br from-blue-500 to-cyan-500 w-2.5 h-2.5" style={{ top: '50px', right: '60px', '--d': '5s', '--dl': '1s', '--r': '-9deg' } as React.CSSProperties} />
            <div className="fcube hidden sm:block bg-gradient-to-br from-purple-500 to-indigo-500 w-2.5 h-2.5" style={{ top: '120px', left: '20px', '--d': '7s', '--dl': '2s', '--r': '26deg' } as React.CSSProperties} />
            <div className="fcube hidden sm:block bg-gradient-to-br from-cyan-500 to-indigo-500 w-3 h-3" style={{ top: '80px', right: '30px', '--d': '5.5s', '--dl': '.5s', '--r': '-16deg' } as React.CSSProperties} />
            
            {/* Floating Dots */}
            <div className="odot hidden sm:block" style={{ top: '150px', left: '50px', '--d': '4s', '--dl': '0.4s' } as React.CSSProperties} />
            <div className="odot hidden sm:block bg-gradient-to-br from-cyan-400 to-blue-500" style={{ top: '135px', right: '65px', '--d': '4.5s', '--dl': '1.6s' } as React.CSSProperties} />
            
            {/* Orbiting Rings */}
            <div className="oring w-[380px] h-[75px] md:w-[440px] md:h-[85px] lg:w-[480px] lg:h-[90px]" />
            <div className="ospin w-[320px] h-[100px] md:w-[360px] md:h-[120px] lg:w-[370px] lg:h-[140px]" />
            
            {/* Ambient glows and stages */}
            <div className="pglow w-[280px] h-[40px] md:w-[320px] md:h-[45px] lg:w-[350px] lg:h-[50px]" />
            <div className="nring w-[200px] h-[16px] md:w-[240px] md:h-[20px] lg:w-[260px] lg:h-[22px]" />
            
            {/* Isometric stage vector graphics */}
            <div className="absolute bottom-[35px] left-1/2 -translate-x-1/2 pointer-events-none opacity-40">
              <svg width="220" height="136" viewBox="0 0 240 148" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                <defs>
                  <linearGradient id="stg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1C0E47"/>
                    <stop offset="100%" stopColor="#0B0B24"/>
                  </linearGradient>
                  <linearGradient id="stg2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#111130"/>
                    <stop offset="100%" stopColor="#08081A"/>
                  </linearGradient>
                  <linearGradient id="stg3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#14143B"/>
                    <stop offset="100%" stopColor="#0A0A1E"/>
                  </linearGradient>
                  <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7B3AEB" stopOpacity=".4"/>
                    <stop offset="50%" stopColor="#2463E9" stopOpacity=".8"/>
                    <stop offset="100%" stopColor="#0FA6E4" stopOpacity=".4"/>
                  </linearGradient>
                </defs>
                <polygon points="120,116 12,60 120,4 228,60" fill="url(#stg1)" stroke="rgba(123,58,235,0.22)" strokeWidth="0.8"/>
                <polygon points="12,60 12,102 120,158 120,116" fill="url(#stg2)" stroke="rgba(123,58,235,0.14)" strokeWidth="0.8"/>
                <polygon points="228,60 228,102 120,158 120,116" fill="url(#stg3)" stroke="rgba(36,99,233,0.12)" strokeWidth="0.8"/>
                <polyline points="12,60 120,4 228,60" fill="none" stroke="url(#edge-grad)" strokeWidth="1.5"/>
                <line x1="66" y1="32" x2="174" y2="88" stroke="rgba(123,58,235,0.08)" strokeWidth="0.5"/>
                <polygon points="120,80 68,52 120,24 172,52" fill="url(#stg1)" stroke="rgba(123,58,235,0.3)" strokeWidth="0.8"/>
                <polygon points="68,52 68,80 120,108 120,80" fill="url(#stg2)" stroke="rgba(123,58,235,0.18)" strokeWidth="0.8"/>
                <polygon points="172,52 172,80 120,108 120,80" fill="url(#stg3)" stroke="rgba(36,99,233,0.16)" strokeWidth="0.8"/>
                <polyline points="68,52 120,24 172,52" fill="none" stroke="url(#edge-grad)" strokeWidth="1.2"/>
              </svg>
            </div>

            {/* Central Floating Logo container */}
            <div className="logof">
              <div className="logof-glow" />
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="220" height="220" className="drop-shadow-[0_10px_20px_rgba(123,58,235,0.25)]">
                <defs>
                  <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7B3AEB"/>
                    <stop offset="42%" stopColor="#69A2FF"/>
                    <stop offset="100%" stopColor="#0FA6E4"/>
                  </linearGradient>
                  <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9B5AFF"/>
                    <stop offset="100%" stopColor="#2463E9"/>
                  </linearGradient>
                  <filter id="logoShadow" x="-28%" y="-28%" width="156%" height="156%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="b"/>
                    <feFlood floodColor="#7B3AEB" floodOpacity="0.4" result="c"/>
                    <feComposite in="c" in2="b" operator="in" result="s"/>
                    <feComposite in="SourceGraphic" in2="s" operator="over"/>
                  </filter>
                </defs>
                <g filter="url(#logoShadow)">
                  <path d="M0 99.7V33C13.1 33 23 45 27.1 49.3V94.9C27.1 98.7 24.3 99.7 22 99.7H0Z" fill="url(#logoGrad1)"/>
                  <path d="M100 0v77.3C89.7 74.2 77.1 60.8 72.9 56.3V4.9C72.9 1 75.7 0 78 0h22Z" fill="url(#logoGrad2)"/>
                  <path d="M28 45.8L78 100h22V76.4C91.1 73.8 80.5 61.3 75.4 56L22 0H4.2C2.1 0 0 1.8 0 4.4V31.6C13.1 31.6 21.2 38.7 28 45.8Z" fill="url(#logoGrad1)"/>
                </g>
              </svg>
            </div>

            {/* Floating Tags/Metrics */}
            <div className="ftag hidden sm:flex" style={{ top: '6%', left: '0%', '--tf': '5s', '--tfd': '0s' } as React.CSSProperties}>
              <div className="ftag-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8">
                  <path d="M12 2L2 7l10 5 10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className="ftag-name">6 Core Services</div>
                <div className="ftag-sub">End-to-end</div>
              </div>
            </div>

            <div className="ftag hidden sm:flex" style={{ top: '24%', right: '0%', '--tf': '5.5s', '--tfd': '0.8s' } as React.CSSProperties}>
              <div className="ftag-icon" style={{ backgroundColor: 'rgba(15,166,228,0.1)', borderColor: 'rgba(15,166,228,0.2)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div>
                <div className="ftag-name">AI-Powered</div>
                <div className="ftag-sub">Continuous loop</div>
              </div>
            </div>

            <div className="ftag hidden sm:flex" style={{ top: '2%', left: '38%', '--tf': '6s', '--tfd': '1.4s' } as React.CSSProperties}>
              <div className="ftag-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div>
                <div className="ftag-name">200+ Systems</div>
                <div className="ftag-sub">Delivered live</div>
              </div>
            </div>

          </div>
        </div>

        {/* MIDDLE COLUMN: Left Services (order-2 on tablet/mobile, order-2 on desktop) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 order-2 lg:order-2"
        >
          {leftServices.map((service, idx) => (
            <GlowingServiceCard key={service.title} service={service} idx={idx} />
          ))}
        </motion.div>

        {/* RIGHT COLUMN: Right Services (order-3 on tablet/mobile, order-3 on desktop) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 order-3 lg:order-3"
        >
          {rightServices.map((service, idx) => (
            <GlowingServiceCard key={service.title} service={service} idx={idx + 3} />
          ))}
        </motion.div>

      </div>

      {/* Inline styling keyframe for animated SVG paths */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes aiFlow {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
      `}} />
    </SectionContainer>
  );
};

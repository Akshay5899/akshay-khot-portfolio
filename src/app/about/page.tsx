'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Cpu, Zap, Globe, Compass, Target } from 'lucide-react';
import { PageContainer } from '@/components/shared/PageContainer';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Stats } from '@/components/portfolio/Stats';
import { Team } from '@/components/portfolio/Team';
// import { Button } from '@/components/ui/Button';
import { Button } from '@/components/ui/Button';


const TIMELINE_EVENTS = [
  {
    year: '2021',
    title: 'Founding & Database Kernels',
    description: 'Nexvora founded with a focus on low-level Go database kernels and asynchronous ingestion proxies.',
  },
  {
    year: '2022',
    title: 'GitOps Container Scale',
    description: 'Expanded capabilities to include self-healing Kubernetes orchestration and automated multi-cloud fabrics.',
  },
  {
    year: '2023',
    title: 'Zero-Trust Security Suite',
    description: 'Launched audited cryptographic enclaves validation systems for HIPAA compliance and payment gateways.',
  },
  {
    year: '2024',
    title: 'Cognitive Telemetry Loop',
    description: 'Architected local LLM fine-tuning structures and autonomous multi-agent triggers routing 5B daily telemetry logs.',
  },
];

export default function AboutPage() {
  return (
    <PageContainer>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 w-full overflow-hidden bg-slate-955">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-bold">OUR IDENTITY</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tight leading-tight font-display uppercase">
              We engineer structures that power scale.
            </h1>
            <p className="text-slate-455 text-xs md:text-sm leading-relaxed max-w-xl">
              Nexvora Tech is a curated collective of distributed systems architects, security specialists, and deep learning engineers. We do not build generic templates; we design custom enterprise software architectures suited for high-volume transactions and uncompromising compliance.
            </p>
          </div>
          
          <div className="relative rounded-2xl border border-slate-905 bg-slate-950/40 p-8 md:p-10 backdrop-blur-sm overflow-hidden flex flex-col gap-6 text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Corporate Vision</span>
            <blockquote className="text-base md:text-lg text-slate-205 leading-relaxed italic">
              &ldquo;Nexvora Tech is committed to absolute technical integrity. We design digital systems that remain stable under unprecedented loads, secure against adversarial intrusion, and fully observable at all layers.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center font-bold text-slate-100 border border-slate-800 text-xs">
                N
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-350">Nexvora Board</span>
                <span className="text-[9px] text-slate-550 uppercase font-bold tracking-wider">Continuous Systems Initiative</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story / Identity Section */}
      <section className="py-24 bg-slate-955 relative border-t border-slate-900/60 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">OUR CHRONOLOGY</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight leading-tight font-display uppercase">
              Constructed Meticulously Over Time
            </h2>
            <p className="text-slate-455 text-xs md:text-sm leading-relaxed">
              Founded in 2021 by veterans of distributed cloud platforms, Nexvora was created to fill a major gap in the tech ecosystem: the lack of engineering rigor in custom software development. We replaced traditional project agency frameworks with autonomous engineering pods that ship clean, statically typed, and fully stress-tested systems.
            </p>
            <p className="text-slate-455 text-xs md:text-sm leading-relaxed">
              Today, our teams manage infrastructure matrices processing billions of events daily, secure transaction flows under rigorous compliance audits, and deploy autonomous cognitive routers that redefine business optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="p-8 rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-950/20 flex flex-col gap-4 text-left relative overflow-hidden">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100 uppercase tracking-wider font-display">Our Mission</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                To construct software frameworks that eliminate scalability constraints, allowing companies to grow with absolute confidence.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-950/20 flex flex-col gap-4 text-left relative overflow-hidden">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100 uppercase tracking-wider font-display">Our Vision</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                To establish the benchmark of architectural integrity and transparent metrics streams, ensuring that code quality is verifiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard Section */}
      <div className="border-t border-slate-900/60 bg-slate-955 relative w-full">
        <Stats />
      </div>

      {/* Corporate Timeline Section */}
      <section className="py-24 bg-slate-955 relative border-t border-slate-900/60 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">ROADMAP HISTORY</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight font-display uppercase">
              Corporate Chronology
            </h2>
            <p className="text-slate-450 max-w-xl text-xs md:text-sm leading-relaxed">
              Review our development stages as we expanded capacities to meet enterprise load specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative text-left">
            <div className="hidden md:block absolute top-16 left-8 right-8 h-[1px] bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-transparent -z-10" />

            {TIMELINE_EVENTS.map((evt, idx) => (
              <div key={idx} className="flex flex-col gap-6 relative">
                <span className="text-3xl font-black text-indigo-400/80 font-mono tracking-tight">
                  {evt.year}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest font-display">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-32 w-full overflow-hidden bg-slate-955 relative border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">FOUNDATIONAL PILLARS</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight font-display uppercase">
              Engineering Principles We Guard
            </h2>
            <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
              Our architectural frameworks are designed with safety boundaries, low latency throughput, and compliance guidelines at the forefront.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-955/20 backdrop-blur-sm flex flex-col gap-4 text-left">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-display">Zero-Trust Baseline</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Security is not an add-on. We build cryptographic safeguards directly into the data transit loops and authentication enclaves.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-955/20 backdrop-blur-sm flex flex-col gap-4 text-left">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-display">Algorithmic Observability</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No black boxes. All models, workflows, and memory routers stream full metrics dashboards, assuring auditability under all conditions.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-955/20 backdrop-blur-sm flex flex-col gap-4 text-left">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-display">Ultra-Low Latency</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Highly optimized Go and Rust runtime protocols eliminate runtime leaks, keeping packet transit delays to sub-millisecond rates.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-955/20 backdrop-blur-sm flex flex-col gap-4 text-left">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-display">Multi-Cloud Portability</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vendor-lock mitigation. We compile GitOps configurations, deploying workloads safely across AWS, GCP, and bare metal structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Leadership Team (8 profiles) */}
      <div className="bg-slate-955 relative border-t border-slate-900/60 w-full">
        <Team />
      </div>

      {/* CTA Box */}
      <section className="py-20 w-full overflow-hidden bg-slate-955 relative border-t border-slate-900/60">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-100 tracking-tight uppercase font-display">
            Consult our engineering squad today
          </h2>
          <p className="text-slate-455 text-xs md:text-sm max-w-lg leading-relaxed">
            Need detailed architecture advice or ready to scale? Reach out to schedule a system telemetry consultation.
          </p>
          <Link href="/contact">
            <Button variant="primary" className="group">
              <span className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-wider">
                Contact Architects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </PageContainer>
  );
}

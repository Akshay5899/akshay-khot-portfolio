'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Shield, Cpu, Activity, Zap } from 'lucide-react';
import { PageContainer } from '@/components/shared/PageContainer';
import { Navbar } from '@/components/layout/Navbar';
import { Projects } from '@/components/portfolio/Projects';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const KPI_ITEMS = [
  {
    icon: Activity,
    value: '500k+ req/s',
    label: 'Peak Read Ingestion',
    description: 'Routed dynamically across clustered database replica arrays with zero cache contention.',
  },
  {
    icon: Zap,
    value: 'Under 400ms',
    label: 'GPU Inference Latency',
    description: 'Achieved using local parameters of fine-tuned LLaMA-3 models running on vLLM clusters.',
  },
  {
    icon: Shield,
    value: '100% Enclave Key Rotation',
    description: 'Enforced via automated Nitro enclave thresholds and mTLS credentials validation.',
  },
  {
    icon: Cpu,
    value: '20% to 40%',
    label: 'Hosting Cost Reductions',
    description: 'Attained by auditing idle database limits and scheduling serverless Kubernetes nodes.',
  },
];

const METHODOLOGY_STEPS = [
  {
    step: 'Phase 01',
    title: 'Blueprint Infrastructure Audit',
    description: 'We scan running environments and log pipelines to map bottlenecks before drawing the target system.',
  },
  {
    step: 'Phase 02',
    title: 'Parallel Sandbox Execution',
    description: 'We construct isolated staging pods and verify throughput capabilities under synthetic concurrent load stresses.',
  },
  {
    step: 'Phase 03',
    title: 'Progressive Canary Traffic Splits',
    description: 'Ingress paths shift incrementally (1% to 100% split thresholds) to ensure zero active session drops.',
  },
  {
    step: 'Phase 04',
    title: 'System Hardening & Telemetry Shift',
    description: 'Zero-trust filters are activated, compliance logging is audited, and open metrics are streamed to internal teams.',
  },
];

export default function ProjectsPage() {
  return (
    <PageContainer>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 w-full overflow-hidden bg-slate-955">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">ENGINEERING PROOFS</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight max-w-4xl font-display uppercase">
            Deployments & Cryptographic Enclaves
          </h1>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-2xl">
            Explore a detailed catalog of our production implementations, detailing architectural challenges, technical stacks utilized, and empirical outcomes achieved under load.
          </p>
        </div>
      </section>

      {/* Projects Grid (Full view with category switcher + modal drill-down) */}
      <div className="bg-slate-955 relative border-y border-slate-900/60 w-full">
        <Projects />
      </div>

      {/* Results Showcase Section */}
      <section className="py-24 bg-slate-955 relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">EMPIRICAL OUTCOMES</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight font-display uppercase">
              Proven Architecture Results
            </h2>
            <p className="text-slate-455 max-w-xl text-xs md:text-sm leading-relaxed">
              Below are empirical metrics captured across our active system deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {KPI_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-955/20 flex flex-col gap-4 text-left hover:border-indigo-500/20 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1.5 mt-2">
                    <span className="text-2xl font-black text-slate-100 font-mono">{item.value}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-300">
                      {item.label || 'System Metric'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Breakdown Timeline */}
      <section className="py-24 bg-slate-950/40 relative border-t border-slate-900/60 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">METHODOLOGY LIFECYCLE</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight font-display uppercase">
              How We Execute Case Studies
            </h2>
            <p className="text-slate-455 max-w-xl text-xs md:text-sm leading-relaxed">
              We apply an audited lifecycle setup ensuring that scaling updates never disrupt running client transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative text-left">
            <div className="hidden md:block absolute top-16 left-8 right-8 h-[1px] bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-transparent -z-10" />

            {METHODOLOGY_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-6 relative">
                <div className="h-14 w-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-xs text-indigo-455 select-none shrink-0 shadow-lg">
                  {step.step}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Trust Showcase */}
      <section className="py-24 w-full overflow-hidden bg-slate-955 relative border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">TRUST INDICATORS</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight leading-tight uppercase font-display">
              Recognized for Architectural Rigor
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-lg">
              My engineering work is built with extreme precision and verified continuously. That is why clients rank Akshay Khot at the peak of development quality.
            </p>
            <div className="flex flex-wrap gap-6 items-center mt-2">
              <div className="flex flex-col gap-1 border-l-2 border-indigo-500 pl-4">
                <span className="text-2xl font-black text-slate-100">100%</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Upwork Agency Rating</span>
              </div>
              <div className="flex flex-col gap-1 border-l-2 border-indigo-500 pl-4">
                <span className="text-2xl font-black text-slate-100">5.0</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Google Business Score</span>
              </div>
              <div className="flex flex-col gap-1 border-l-2 border-indigo-500 pl-4">
                <span className="text-2xl font-black text-slate-100">A+</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Security Audit Baseline</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-10 rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-955/20 backdrop-blur-sm flex flex-col gap-6 text-left relative">
            <div className="flex items-center gap-1 text-amber-405">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed italic">
              &ldquo;The custom vector engine and telemetry system developed by Akshay allowed our platform to handle infinite concurrency spikes. Excellent communication and elite engineering.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center font-bold text-slate-400 border border-slate-800 text-xs">
                JD
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-350">Julian Drake</span>
                <span className="text-[9px] text-indigo-400 font-bold uppercase tracking-wider">VP of Platforms at Synapse Data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Consultancy CTA */}
      <section className="py-20 w-full bg-slate-955 relative border-t border-slate-900/60">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-100 tracking-tight uppercase font-display">
            Curious about system benchmarking?
          </h2>
          <p className="text-slate-455 text-xs md:text-sm max-w-lg leading-relaxed">
            Let our architects examine your active setups. We offer comprehensive cryptographic code reviews and DB scalability recommendations.
          </p>
          <Link href="/contact">
            <Button variant="primary" className="group">
              <span className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-wider">
                Request Stack Audit 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}


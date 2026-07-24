'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Smartphone, Layout, Brain, Briefcase, Check, ArrowRight } from 'lucide-react';
import { PageContainer } from '@/components/shared/PageContainer';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FAQ } from '@/components/portfolio/FAQ';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const TABS = [
  {
    id: 'custom-software',
    label: 'Web Dev & Software',
    icon: Cpu,
    title: 'Custom Software & Web Development',
    description: 'We construct robust API architectures, enterprise-scale web fabrics, and containerized microservices engineered for maximum uptime.',
    techs: ['Go / Golang', 'TypeScript', 'Node.js', 'Next.js', 'GraphQL', 'PostgreSQL'],
    timeline: '4 - 8 Weeks Deployment',
    features: [
      'Multi-tenant database pooling architectures',
      'Memory-safe Golang execution modules',
      'Zero-latency server-side HTML rendering',
      'Automated mTLS and OAuth2 authentication schemes'
    ]
  },
  {
    id: 'mobile-apps',
    label: 'Mobile Apps',
    icon: Smartphone,
    title: 'Cross-Platform & Native Mobile Solutions',
    description: 'High-performance, low-latency mobile platforms designed for high concurrent user environments and fluid interaction speeds.',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'WebRTC', 'SQLite'],
    timeline: '6 - 12 Weeks Deployment',
    features: [
      'Offline-first local database synchronization systems',
      'Background worker queuing and push configurations',
      'Local bio-metric security (FaceID/TouchID) validations',
      'Audited cloud syncing triggers'
    ]
  },
  {
    id: 'ui-ux',
    label: 'UI/UX Design',
    icon: Layout,
    title: 'High-Fidelity UI/UX & Prototypes',
    description: 'Futuristic, interactive design systems mapped to conversion funnels and extreme accessibility standards.',
    techs: ['Figma Pro', 'Adobe Creative Cloud', 'Framer Motion', 'Fluid CSS Grid', 'WCAG Audits'],
    timeline: '2 - 4 Weeks Delivery',
    features: [
      'Fluid typographic scale and responsive breakpoint matrices',
      'Full accessibility compliance (WCAG 2.1 AA checklist)',
      'Fully animated interactive component libraries',
      'User telemetry heatmap simulations'
    ]
  },
  {
    id: 'ai-solutions',
    label: 'AI Solutions',
    icon: Brain,
    title: 'AI Systems & Cognitive Automation',
    description: 'Local fine-tuned large language models, autonomous agent networks, and real-time predictive analytics loops.',
    techs: ['Python', 'PyTorch', 'OpenAI API', 'Qdrant Vector DB', 'FastAPI'],
    timeline: '4 - 10 Weeks Deployment',
    features: [
      'Context-aware vector retrieval (RAG) pipelines',
      'Automated semantic routing agents',
      'Fine-tuned localized LLaMA models',
      'Sub-second inference telemetry feedback'
    ]
  },
  {
    id: 'erp-crm',
    label: 'ERP & CRM Systems',
    icon: Briefcase,
    title: 'Enterprise ERP & CRM Integrations',
    description: 'Syncing legacy data modules with high-speed custom interfaces, secure databases, and real-time sync systems.',
    techs: ['Salesforce API', 'SAP Integration', 'Go Modules', 'Apache Kafka', 'PostgreSQL'],
    timeline: '8 - 16 Weeks Deployment',
    features: [
      'Bi-directional high-frequency event synchronization',
      'Custom database extraction pipeline scripts',
      'Automatic fallback queue retry systems',
      'Legacy database security wrappers'
    ]
  }
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTabId, setActiveTabId] = useState('custom-software');

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      // Find matches in TABS
      let matchedTab = TABS.find((t) => t.id === tabParam);
      
      // Fallback matching slug logic
      if (!matchedTab) {
        if (tabParam.includes('software') || tabParam.includes('architecture')) {
          matchedTab = TABS[0];
        } else if (tabParam.includes('mobile') || tabParam.includes('apps')) {
          matchedTab = TABS[1];
        } else if (tabParam.includes('ux') || tabParam.includes('design')) {
          matchedTab = TABS[2];
        } else if (tabParam.includes('ai') || tabParam.includes('cognitive')) {
          matchedTab = TABS[3];
        } else if (tabParam.includes('cloud') || tabParam.includes('cyber') || tabParam.includes('erp') || tabParam.includes('crm')) {
          matchedTab = TABS[4];
        }
      }

      if (matchedTab) {
        setActiveTabId(matchedTab.id);
      }
    }
  }, [searchParams]);

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    // Update query string without reloading page
    router.replace(`/services?tab=${id}`, { scroll: false });
  };

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];
  const ActiveIcon = activeTab.icon;

  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 w-full overflow-hidden bg-slate-955">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">ENGINEERING SUITE</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight max-w-4xl font-display uppercase">
            System Capabilities & Specializations
          </h1>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-2xl">
            We deliver highly robust custom cloud software, vector search databases, predictive machine learning pipelines, and audited infrastructure fabrics built for longevity and velocity.
          </p>
        </div>
      </section>

      {/* Services Sticky/Scrollable Tab Navigation */}
      <section className="py-6 border-y border-slate-800/40 dark:border-slate-900/60 bg-slate-955/80 sticky top-[72px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {TABS.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-indigo-600/10 border-indigo-500/35 text-indigo-400'
                      : 'bg-transparent border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <TabIcon className="h-3.5 w-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Tab Showcase Pane */}
      <section className="py-20 bg-slate-955 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <ActiveIcon className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight leading-tight font-display uppercase">
                {activeTab.title}
              </h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                {activeTab.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {activeTab.features.map((feature, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <div className="h-4.5 w-4.5 rounded bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-xs text-slate-300 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Specification Metadata Dashboard Panel */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <Card className="p-8 border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-950/20 relative overflow-hidden flex flex-col gap-6">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
                
                <div className="flex flex-col gap-1.5 pb-4 border-b border-slate-800/60">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">ENGAGEMENT SLATE</span>
                  <span className="text-sm font-bold text-slate-200">Execution Frameworks</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Estimated Delivery Timeframe</span>
                  <span className="text-sm font-bold text-indigo-400">{activeTab.timeline}</span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Core Technologies Stream</span>
                  <div className="flex flex-wrap gap-2">
                    {activeTab.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-900/20 dark:bg-slate-955/20 border border-slate-800/40 dark:border-slate-900/60 text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="mt-4">
                  <Button variant="primary" className="w-full py-3 group">
                    <span className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                      Request Scope Details
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <FAQ />

      {/* Quick Consultation CTA */}
      <section className="py-24 w-full bg-slate-955 relative border-t border-slate-800/40 dark:border-slate-900/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-950/20 p-8 md:p-16 backdrop-blur-md overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
            <div className="flex flex-col gap-4 text-left relative z-10 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">CONNECT TODAY</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-100 tracking-tight font-display uppercase">
                Architect a bulletproof roadmap
              </h2>
              <p className="text-slate-450 text-xs md:text-sm leading-relaxed max-w-md">
                Schedule a system mapping workshop with our lead engineer to review container setups, latency goals, or compliance benchmarks.
              </p>
            </div>
            <div className="relative z-10 flex shrink-0">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  <span className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-wider">
                    Request Integration Call
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ServicesPage() {
  return (
    <PageContainer>
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-955 text-slate-400 font-mono text-xs">
          Loading system telemetry...
        </div>
      }>
        <ServicesContent />
      </Suspense>
    </PageContainer>
  );
}

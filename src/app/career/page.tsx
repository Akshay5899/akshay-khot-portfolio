'use client';

import React, { useState } from 'react';
import {  Cpu, Zap, Globe, ArrowRight, Check, Send, Sparkles } from 'lucide-react';
import { PageContainer } from '@/components/shared/PageContainer';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CAREERS_LIST } from '@/constants';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useToast } from '@/providers/toast-provider';

export default function CareerPage() {
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    resumeName: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleApplyClick = (title: string) => {
    setSelectedRole(title);
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API pipeline transmission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast(`Telemetry system recorded application for ${formData.name} as ${selectedRole || 'General Engineering Role'}.`, 'success');
    
    // Clear state
    setFormData({ name: '', email: '', github: '', resumeName: '' });
    setSelectedRole('');
    setSubmitting(false);
  };

  return (
    <PageContainer>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 w-full overflow-hidden bg-slate-955">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">ENGINEERING FUTURES</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight max-w-4xl font-display">
            Join the elite team building high-scale fabrics
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
            We operate in autonomous engineering pods, developing custom models, sub-millisecond networks, and secure cryptographic enclaves. If you value rigor and zero-trust engineering, let\&apos;s collaborate.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 w-full overflow-hidden bg-slate-955/40 relative border-t border-slate-800/40 dark:border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">LIFE AT NEXVORA</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight font-display">
              Uncompromising Work Standards & Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Global Remote-First</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Work from anywhere in the world. We support synchronous focus zones and value high-fidelity asynchronous documentation.
              </p>
            </Card>

            <Card className="p-8 flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Premium Setup Allocation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Get high-end engineering hardware, ergonomic office systems, and testing server boundaries allocated for immediate deployment.
              </p>
            </Card>

            <Card className="p-8 flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Continuous Education Budget</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nexvora sponsors tech books, systems certifications (CKA, OSCP), deep learning courses, and attendance at global architecture summits.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Jobs Roster */}
      <section className="py-24 w-full bg-slate-955 relative border-t border-slate-800/40 dark:border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left flex flex-col gap-4 mb-16 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">ACTIVE OPENINGS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight font-display">
              Operational Roles
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We look for engineers with high technical ownership. Explore active vacancies and apply directly.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {CAREERS_LIST.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-2xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-955/20 backdrop-blur-sm flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center hover:border-indigo-500/25 transition-colors text-left"
              >
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-100">{job.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-[10px] uppercase font-bold tracking-wider text-indigo-400">
                      {job.department}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                    <span>🗺️ {job.location}</span>
                    <span>🕒 {job.type}</span>
                    <span>📈 {job.experience}</span>
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-300">Technical Prerequisites:</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-400 pl-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="shrink-0 flex items-center self-stretch lg:self-center">
                  <Button
                    onClick={() => handleApplyClick(job.title)}
                    variant="glass"
                    className="w-full lg:w-auto group"
                  >
                    <span className="flex items-center gap-2 font-semibold">
                      Apply Position
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Portal Form */}
      <section id="application-form" className="py-24 w-full bg-slate-955 relative border-t border-slate-900/60">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-8 md:p-12 rounded-3xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-955/40 backdrop-blur-md relative overflow-hidden flex flex-col gap-8">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="text-center flex flex-col items-center gap-3 relative z-10">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 tracking-tight">
                Submit Engineering Dossier
              </h2>
              <p className="text-slate-450 text-xs md:text-sm leading-relaxed max-w-md">
                Complete the application metrics below. Our Lead Architect audits every dossier.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 text-left relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Target Engineering Role
                </label>
                <select
                  name="selectedRole"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-955 border border-slate-800/40 dark:border-slate-900/60 rounded-xl text-sm focus:outline-none focus:border-slate-800 text-slate-100 select-none appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat' }}
                >
                  <option value="" disabled>Select a role...</option>
                  {CAREERS_LIST.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                  <option value="General Engineering Roster">General Engineering Roster</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter name"
                    className="w-full px-4 py-3 bg-slate-955 border border-slate-800/40 dark:border-slate-900/60 rounded-xl text-sm focus:outline-none focus:border-slate-850 text-slate-100"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Email Interface
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-slate-955 border border-slate-800/40 dark:border-slate-900/60 rounded-xl text-sm focus:outline-none focus:border-slate-850 text-slate-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    GitHub Handle / Portfolio Link
                  </label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleInputChange}
                    required
                    placeholder="https://github.com/profile"
                    className="w-full px-4 py-3 bg-slate-955 border border-slate-800/40 dark:border-slate-900/60 rounded-xl text-sm focus:outline-none focus:border-slate-850 text-slate-100"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Resume Document Name (Mock File)
                  </label>
                  <input
                    type="text"
                    name="resumeName"
                    value={formData.resumeName}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. CV_Senior_Engineer.pdf"
                    className="w-full px-4 py-3 bg-slate-955 border border-slate-800/40 dark:border-slate-900/60 rounded-xl text-sm focus:outline-none focus:border-slate-850 text-slate-100"
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" disabled={submitting} className="w-full mt-4 group">
                <span className="flex items-center justify-center gap-2 cursor-pointer font-semibold">
                  {submitting ? 'Transmitting Data...' : 'Submit Dossier'}
                  <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </PageContainer>
  );
}

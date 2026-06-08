'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Card } from '@/components/ui/Card';
import { PROJECTS } from '@/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const CATEGORIES = ['All', 'Cloud Engineering', 'Artificial Intelligence', 'Cybersecurity', 'Full-Stack', 'ERP/CRM'];

interface CaseStudyModalProps {
  project: typeof PROJECTS[number] | null;
  onClose: () => void;
}

const CaseStudyModal = ({ project, onClose }: CaseStudyModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-955/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl rounded-3xl border border-slate-800/40 dark:border-slate-900/60 bg-slate-955 p-8 shadow-2xl overflow-hidden flex flex-col gap-6 max-h-[85vh] overflow-y-auto text-left"
        >
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={onClose}
              className="text-slate-450 hover:text-slate-100 transition-colors p-2 font-mono text-xs uppercase font-bold tracking-widest cursor-pointer"
            >
              [ Close ]
            </button>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">
            Case Study Deep Dive
          </span>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-black text-slate-100 font-display uppercase">
              {project.title}
            </h3>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/20 dark:bg-slate-955/20 border border-slate-800/40 dark:border-slate-900/60 text-[9px] uppercase font-bold tracking-widest text-indigo-400 self-start">
              {project.category}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/60">
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                The Core Challenge
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.challenge || 'Analyzing legacy performance anomalies and mapping cloud integration issues.'}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Our Solution
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution || 'Engineered automated multi-cloud pipelines, optimized memory allocations, and integrated local enclaves.'}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-slate-800/60">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <Cpu className="h-4 w-4 text-indigo-400" />
              Empirical Outcomes & KPIs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(project.kpis || ['99.99% system availability', 'Resource costs lowered by 30%', 'Sub-second response speeds']).map((kpi, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/20 dark:bg-slate-955/20 border border-slate-800/40 dark:border-slate-900/60 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-[10px] font-mono text-slate-200 leading-tight">
                    {kpi}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-slate-900/20 dark:bg-slate-955/20 border border-slate-800/40 dark:border-slate-900/60 text-[9px] font-mono text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export const Projects = ({ limit }: { limit?: number }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[number] | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <SectionContainer id="projects" className="py-24 bg-slate-955 relative">
      {/* Background ambient orb */}
      <div className="glow-orb top-1/2 left-[-15%] w-[450px] h-[450px] bg-indigo-600/5 blur-[120px]" />

      <div className="text-center flex flex-col items-center gap-4 mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">ENGINEERING CASE STUDIES</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tight uppercase font-display">
          Featured Deployments
        </h2>
        <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
          High-performance production architecture instances built and scaled for enterprise workloads.
        </p>
      </div>

      {/* Category Filter bar (Only show if no limit parameter) */}
      {!limit && (
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-6 mb-10 scrollbar-none w-full max-w-5xl mx-auto px-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === category
                  ? 'bg-indigo-600/10 border-indigo-500/35 text-indigo-400'
                  : 'bg-transparent border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-350 dark:hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {displayedProjects.map((project, idx) => (
          <motion.div key={project.title} variants={fadeInUp} custom={idx} className="h-full">
            <Card className="h-full flex flex-col p-0 overflow-hidden bg-slate-900/40 border-slate-800/40 dark:border-slate-900/60 hover:border-indigo-500/25 transition-all duration-300 group" hoverEffect={false}>
              
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800/80 text-[9px] uppercase font-bold tracking-widest text-indigo-400">
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow gap-5 bg-slate-900/20 text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-slate-100 font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 flex flex-col gap-4 border-t border-slate-850">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-900/20 dark:bg-slate-955/20 border border-slate-800/40 dark:border-slate-900/60 text-[8px] uppercase font-bold tracking-widest text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5 cursor-pointer self-start group/btn"
                  >
                    View Case Study 
                    <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </SectionContainer>
  );
};

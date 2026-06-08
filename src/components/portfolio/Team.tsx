'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Card } from '@/components/ui/Card';
import { TEAM_MEMBERS } from '@/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const Team = () => {
  return (
    <SectionContainer id="team" className="border-t border-slate-900/60">
      <div className="text-center flex flex-col items-center gap-4 mb-20">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Core Crew</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
          Elite Software Architects
        </h2>
        <p className="text-slate-400 max-w-xl text-sm md:text-base leading-relaxed">
          The engineering experts leading the design, construction, and certification of high-performance infrastructures.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      >
        {TEAM_MEMBERS.map((member, idx) => (
          <motion.div key={member.name} variants={fadeInUp} custom={idx} className="h-full">
            <Card className="h-full flex flex-col p-0 overflow-hidden group hover:border-indigo-500/20" hoverEffect={false}>
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 right-4 px-2.5 py-1 rounded bg-slate-900/80 dark:bg-slate-955/80 backdrop-blur-sm border border-slate-800/40 dark:border-slate-900/60 text-[9px] uppercase font-bold tracking-wider text-indigo-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Active Member <ExternalLink className="h-2.5 w-2.5" />
                </span>
              </div>

              {/* Bio & Details Container */}
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-indigo-400/90 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-auto pt-4 flex flex-col gap-4 border-t border-slate-800/40 dark:border-slate-900/60">
                  {/* Tech capability tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] uppercase font-bold tracking-wider text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Social Handles */}
                  <div className="flex items-center gap-3">
                    <a
                      href={member.linkedin}
                      className="h-8 w-8 rounded-lg bg-slate-905 border border-slate-800/40 dark:border-slate-900/60 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-slate-900 transition-all"
                      aria-label="LinkedIn Profile"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={member.github}
                      className="h-8 w-8 rounded-lg bg-slate-905 border border-slate-800/40 dark:border-slate-900/60 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-slate-900 transition-all"
                      aria-label="GitHub Profile"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

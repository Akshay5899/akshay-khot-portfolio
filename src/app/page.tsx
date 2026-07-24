import React from 'react';
import { PageContainer } from '@/components/shared/PageContainer';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { Services } from '@/components/portfolio/Services';
import { Projects } from '@/components/portfolio/Projects';

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <Hero />
      <Services />

      <section className="relative overflow-hidden py-24 bg-slate-955 border-t border-slate-900/60">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-300 shadow-sm shadow-indigo-500/10">
              My Skills
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-black text-slate-100 tracking-tight uppercase font-display">
              Core Technical Strengths
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-slate-400">
              A focused skillset for modern full-stack execution: fast frontend experiences, resilient API systems, scalable data design, and production-ready deployments.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { title: 'Frontend Development', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive UI'] },
              { title: 'Backend & APIs', items: ['Node.js', 'Express', 'REST APIs', 'JWT Auth'] },
              { title: 'Database Systems', items: ['MongoDB', 'MySQL', 'Data Modeling', 'Schema Design'] },
              { title: 'Deployment', items: ['Vercel', 'Netlify', 'CI/CD', 'Performance Tuning'] },
              { title: 'Cloud & Infrastructure', items: ['AWS', 'Docker', 'Kubernetes', 'IaC'] },
              { title: 'Design & UX', items: ['Component Systems', 'Accessibility', 'Motion Design', 'Conversion Focus'] },
            ].map((skill) => (
              <div
                key={skill.title}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-800/60 bg-slate-900/40 p-8 shadow-2xl shadow-slate-950/20 transition duration-500 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-slate-900/70"
              >
                <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl opacity-80" />
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-slate-100 tracking-tight">
                    {skill.title}
                  </h3>
                </div>

                <ul className="relative mt-8 space-y-3 text-sm text-slate-400">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-3 transition hover:border-indigo-500/30 hover:bg-slate-900/70">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-945 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              EXPERIENCE
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-100 tracking-tight uppercase font-display">
              Professional Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
              A timeline of significant milestones and real-world experience in software engineering and delivery.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { year: '2021', title: 'Web Developer', detail: 'Built responsive websites and improved UX across several client projects using HTML, CSS, JavaScript, and React.' },
              { year: '2022', title: 'React & Redux Developer', detail: 'Delivered scalable React applications with structured state management and reusable component libraries.' },
              { year: '2023', title: 'Team Lead', detail: 'Led a development team to improve delivery velocity by 30% and to ship high-quality frontend and backend solutions.' },
              { year: '2025', title: 'Full Stack Developer', detail: 'Architected MERN applications, REST APIs, JWT authentication, and database-driven features for production systems.' },
            ].map((item, idx) => (
              <div key={item.year} className="grid gap-4 lg:grid-cols-[140px_1fr] lg:items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">{item.year}</span>
                </div>
                <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 shadow-lg shadow-slate-950/10">
                  <h3 className="text-xl font-bold text-slate-100 tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-945 border-t border-slate-900/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">
            PORTFOLIO SPOTLIGHT
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-100 tracking-tight uppercase font-display">
            Selected Work That Defines My Craft
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
            Every project is built with practical engineering, polished UX, and a clear business outcome in mind. These highlights show how I deliver performance, reliability, and user-first interfaces.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 text-left shadow-lg shadow-slate-950/20">
              <h3 className="text-lg font-bold text-slate-100 uppercase tracking-wider">Web Application Systems</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Custom dashboards, lead capture flows, and responsive interfaces built with Next.js and React.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 text-left shadow-lg shadow-slate-950/20">
              <h3 className="text-lg font-bold text-slate-100 uppercase tracking-wider">API & Backend Architecture</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Scalable Node.js APIs, secure database models, and polished integration points for real-world deployments.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 text-left shadow-lg shadow-slate-950/20">
              <h3 className="text-lg font-bold text-slate-100 uppercase tracking-wider">Brand-Focused UI</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Clean branding, motion-driven interactions, and layouts optimized for conversion and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full border-t border-slate-900/60 bg-slate-955">
        <Projects limit={3} />
      </div>
    </PageContainer>
  );
}


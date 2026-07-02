'use client';

import React from 'react';
import { PageContainer } from '@/components/shared/PageContainer';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const TIMELINE_EVENTS = [
  {
    year: '2021',
    title: 'Web Developer',
    description: 'Developed responsive websites using HTML5, CSS3, and JavaScript, improving user experience and performance for clients.',
  },
  {
    year: '2022',
    title: 'React & Redux Developer',
    description: 'Built scalable React applications with Redux state management, reducing complexity and accelerating feature delivery.',
  },
  {
    year: '2023',
    title: 'Team Lead',
    description: 'Led a team of junior developers, improved productivity by 30%, and delivered high-quality solutions on time.',
  },
  {
    year: '2025',
    title: 'Full Stack Developer',
    description: 'Joined Brawizz Tech Pvt Ltd in Pune to architect MERN applications, REST APIs, JWT authentication, and database-driven features.',
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
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">PROFESSIONAL PORTFOLIO</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tight leading-tight font-display uppercase">
              Akshay Pandurang Khot — Full Stack Developer
            </h1>
            <p className="text-slate-455 text-xs md:text-sm leading-relaxed max-w-xl">
              Seeking a challenging Full Stack Developer role to apply expertise in MERN development, REST API implementation, JWT authentication, database management, and responsive UI design through clean, scalable, and secure web applications.
            </p>
          </div>

          <div className="relative rounded-2xl border border-slate-905 bg-slate-950/40 p-8 md:p-10 backdrop-blur-sm overflow-hidden flex flex-col gap-6 text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">OBJECTIVE</span>
            <blockquote className="text-base md:text-lg text-slate-205 leading-relaxed italic">
              &ldquo;Delivering clean, maintainable code and high-performance applications that enhance business impact and user satisfaction.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center font-bold text-slate-100 border border-slate-800 text-xs">
                AK
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-350">Contact</span>
                <span className="text-[9px] text-slate-550 uppercase font-bold tracking-wider">+91 9503956424 / akshaykhot5899@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 bg-slate-955 relative border-t border-slate-900/60 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-slate-800/40 bg-slate-900/40 p-8 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">EXPERIENCE SUMMARY</span>
            <h2 className="mt-4 text-3xl font-black text-slate-100 tracking-tight font-display uppercase">4.9+ Years in Full Stack Development</h2>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Experienced in MERN stack development, RESTful API architecture, JWT authentication, database design, and responsive front-end engineering.
            </p>
            <ul className="mt-6 space-y-3 text-[11px] text-slate-400">
              <li>• Built scalable single-page applications with React.js and Tailwind CSS.</li>
              <li>• Developed secure backend services using Node.js, Express, and MongoDB.</li>
              <li>• Integrated JWT authentication and role-based access control.</li>
              <li>• Implemented responsive UI and optimized performance across devices.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800/40 bg-slate-900/40 p-8 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">TECHNICAL SKILLS</span>
            <div className="mt-6 grid gap-3 text-slate-400 text-[11px]">
              <div>
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Frontend</h3>
                <p className="mt-2">React.js, Redux, JavaScript (ES6+), HTML5, CSS3, TailwindCSS, Bootstrap.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Backend</h3>
                <p className="mt-2">Node.js, Express.js, REST API development, JWT authentication, PHP.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Databases</h3>
                <p className="mt-2">MongoDB, MySQL.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Tools</h3>
                <p className="mt-2">Git, GitHub, Postman, Vercel, Netlify, Agile, responsive web design.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/40 bg-slate-900/40 p-8 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">ACHIEVEMENTS</span>
            <h3 className="mt-4 text-lg font-bold text-slate-100 uppercase tracking-wider">Best Performance Award – 2022</h3>
            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              Recognized for delivering high-quality web development solutions, exceeding deadlines, and improving user experience at Walstar Technologies Pvt Ltd.
            </p>
            <div className="mt-6 space-y-3 text-[11px] text-slate-400">
              <p>• Increased user engagement by 20% through responsive design improvements.</p>
              <p>• Reduced development complexity by 30% with optimized React architecture.</p>
              <p>• Delivered secure API integrations and improved client satisfaction across projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-955 relative border-t border-slate-900/60 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">PROFESSIONAL TIMELINE</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight font-display uppercase">Career Journey</h2>
            <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
              A timeline of roles and contributions across development, team leadership, and enterprise application delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative text-left">
            <div className="hidden md:block absolute top-16 left-8 right-8 h-[1px] bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-transparent -z-10" />
            {TIMELINE_EVENTS.map((evt, idx) => (
              <div key={idx} className="flex flex-col gap-6 relative">
                <span className="text-3xl font-black text-indigo-400/80 font-mono tracking-tight">{evt.year}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest font-display">{evt.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{evt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-slate-955 relative border-t border-slate-900/60 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-3xl border border-slate-800/40 bg-slate-900/40 p-8 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">EDUCATION</span>
              <h3 className="mt-4 text-2xl font-black text-slate-100 tracking-tight">Bachelor of Engineering in Computer Science</h3>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">Shivaji University, Kolhapur</p>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">2020 | 64.92%</p>
            </div>
            <div className="rounded-3xl border border-slate-800/40 bg-slate-900/40 p-8 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">CAREER OBJECTIVE</span>
              <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                Seeking a challenging Full Stack Developer role to apply expertise in MERN stack development, JavaScript (ES6+), RESTful API development, JWT authentication, database management, and responsive UI design. Committed to delivering clean, maintainable code, optimized performance, and user-centric solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageContainer>
  );
}


import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageContainer } from '@/components/shared/PageContainer';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/portfolio/Hero';
import { TrustedBy } from '@/components/portfolio/TrustedBy';
import { Stats } from '@/components/portfolio/Stats';
import { Services } from '@/components/portfolio/Services';
import { WhyNexvora } from '@/components/portfolio/WhyNexvora';
import { Process } from '@/components/portfolio/Process';
import { TechStack } from '@/components/portfolio/TechStack';
import { Projects } from '@/components/portfolio/Projects';
import { Testimonials } from '@/components/portfolio/Testimonials';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      
      {/* Services Section */}
      <Services />

      {/* Why Nexvora Section */}
      <WhyNexvora />

      {/* Integration Process Timeline */}
      <Process />

      {/* Tech Stack Capabilities Grid */}
      <TechStack />

      {/* Projects Showcase Teaser */}
      <div className="relative w-full border-t border-slate-900/60 bg-slate-955">
        <Projects limit={3} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-8 mb-24 flex justify-center">
          <Link href="/projects">
            <Button variant="glass" size="lg" className="group">
              <span className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-wider">
                Explore Case Studies 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full bg-slate-955/40">
        <Testimonials />
      </div>

      {/* High-Impact Bottom CTA */}
      <section className="relative py-24 md:py-32 w-full overflow-hidden bg-slate-955 border-t border-slate-900/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            CONNECT WITH OUR ARCHITECTS
          </span>
          <h2 className="text-3xl md:text-6xl font-black text-slate-100 tracking-tight leading-tight uppercase font-display">
            Ready to construct your next digital masterpiece?
          </h2>
          <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
            Partner with Nexvora Tech to build highly resilient, auto-scaling multi-cloud environments, automated AI agent telemetry loops, and bulletproof security systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                <span className="flex items-center gap-2 cursor-pointer font-bold uppercase tracking-wider">
                  Initiate Project Scope
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="glass" size="lg">
                <span className="cursor-pointer font-bold uppercase tracking-wider">View Capabilities</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </PageContainer>
  );
}

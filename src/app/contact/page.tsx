import React from 'react';
import { Mail, Phone, MapPin, ShieldAlert, Globe, Lock, Clock } from 'lucide-react';
import { PageContainer } from '@/components/shared/PageContainer';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/portfolio/ContactForm';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Contact | Akshay Khot',
  description: 'Contact Akshay Khot for full stack development, MERN applications, REST APIs, JWT authentication, and responsive UI design.',
};

export default function ContactPage() {
  return (
    <PageContainer>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 w-full overflow-hidden bg-slate-955">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-bold">COMMUNICATION PROTOCOL</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tight leading-tight max-w-4xl font-display uppercase">
            Initiate System Scoping
          </h1>
          <p className="text-slate-450 text-xs md:text-sm leading-relaxed max-w-2xl">
            Contact me for full stack development, MERN applications, RESTful APIs, JWT authentication, and responsive UI design.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-24 md:pb-32 w-full bg-slate-955 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left Side: Telemetry Hub & Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Header */}
            <div className="flex flex-col gap-2 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Operational Nodes</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight font-display uppercase">
                Corporate Directory
              </h2>
              <p className="text-slate-450 text-xs leading-relaxed max-w-md">
                Secure tunnels are open. Select the specific communication node below or transmit your payload via the console.
              </p>
            </div>



            {/* Channels List */}
            <div className="flex flex-col gap-4 text-left">
              
              {/* Sales channel */}
              <div className="group p-5 rounded-2xl border border-slate-800/40 dark:border-slate-905 bg-slate-900/40 dark:bg-slate-955/20 hover:border-indigo-500/20 hover:bg-slate-900/10 transition-all flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 font-bold">Email</span>
                  <a href="mailto:akshaykhot5899@gmail.com" className="text-sm font-bold text-slate-200 hover:text-indigo-400 transition-colors">
                    akshaykhot5899@gmail.com
                  </a>
                  <a href="tel:+919503956424" className="text-xs text-slate-400 hover:text-indigo-400 transition-colors mt-0.5">
                    +91 9503956424
                  </a>
                </div>
              </div>

              {/* Careers channel */}
              <div className="group p-5 rounded-2xl border border-slate-800/40 dark:border-slate-905 bg-slate-900/40 dark:bg-slate-955/20 hover:border-indigo-500/20 hover:bg-slate-900/10 transition-all flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Globe className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 font-bold">Available For</span>
                  <span className="text-sm font-bold text-slate-200">Freelance & Full-time</span>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    Open for remote and hybrid engagements across India.
                  </p>
                </div>
              </div>

              {/* Operating Hours Node */}
              <div className="group p-5 rounded-2xl border border-slate-800/40 dark:border-slate-905 bg-slate-900/40 dark:bg-slate-955/20 hover:border-indigo-500/20 hover:bg-slate-900/10 transition-all flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 font-bold">Operating Hours</span>
                  <span className="text-sm font-bold text-slate-200">
                    Mon - Fri: 09:00 - 18:00 (UTC+5:30)
                  </span>
                  <p className="text-xs text-slate-450 leading-relaxed mt-1">
                    Response SLA: Within 12 cycles/hours. Weekend support active for enterprise level SLAs.
                  </p>
                </div>
              </div>

              {/* LocationHQ with Map */}
              <div className="group p-5 rounded-2xl border border-slate-800/40 dark:border-slate-905 bg-slate-900/40 dark:bg-slate-955/20 hover:border-indigo-500/20 hover:bg-slate-900/10 transition-all flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 font-bold">Location</span>
                    <span className="text-sm font-bold text-slate-200">
                      Pune, Maharashtra, India
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      Available for remote and hybrid work across India.
                    </p>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-800/40 dark:border-slate-900/60 bg-slate-955 relative mt-2">
                  <iframe
                    src="https://maps.google.com/maps?q=Ahmedabad,%20Gujarat,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-none filter grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    title="Akshay Headquarters Map Location"
                  />
                </div>
              </div>

            </div>

            {/* Protocol Alert */}
            <div className="rounded-2xl border border-slate-800/40 dark:border-slate-905 bg-slate-900/40 dark:bg-slate-950/15 p-5 flex items-start gap-3.5 text-left">
              <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400 shrink-0">
                <Lock className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400">Zero-Trust Telemetry Enforced</span>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  All signal transmissions are end-to-end encrypted, SOC2 compliant, and cataloged inside safe distributed ledger protocols.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side: ContactForm Scoping Console */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      <Footer />
    </PageContainer>
  );
}


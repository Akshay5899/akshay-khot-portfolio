import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-955 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      {/* Glow spots */}
      <div className="absolute top-[30%] left-[30%] w-72 h-72 rounded-full bg-indigo-500/5 blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-[30%] right-[30%] w-72 h-72 rounded-full bg-purple-500/5 blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-md w-full flex flex-col items-center gap-6">
        <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/30">
          N
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">
            SYSTEM DIAGNOSTIC: 404_OFFLINE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 font-display">
            Security Node Offline
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
            The architectural system asset or microservice module you are attempting to address is not routed or has been decommissioned.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all select-none"
        >
          Return to Terminal
        </Link>
      </div>
    </main>
  );
}

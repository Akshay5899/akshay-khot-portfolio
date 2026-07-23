"use client";
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <main className="min-h-screen bg-slate-955 text-slate-100 flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="max-w-md w-full flex flex-col items-center gap-6">
        <div className="h-12 w-12 rounded-xl bg-red-650 flex items-center justify-center font-bold text-white shadow-lg shadow-red-600/30">
          !
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">
            SYSTEM PANIC: CRITICAL_EXCEPTION
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-100 font-display">
            Global Application Crash
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
            A root-level exception occurred: {error?.message || 'Unknown kernel failure.'}
          </p>
        </div>

        <a
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}

export const dynamic = 'force-dynamic';

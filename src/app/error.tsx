'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto my-24">
      <div className="h-12 w-12 rounded-xl bg-red-600/10 border border-red-500/25 flex items-center justify-center font-bold text-red-500 shadow-lg mb-6">
        !
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 font-mono">
          SYSTEM FAULT: PIPELINE_EXCEPTION
        </span>
        <h1 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight font-display uppercase">
          Runtime Exception
        </h1>
        <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
          An exception occurred during client-side route hydration.
        </p>
      </div>

      <Button
        onClick={() => reset()}
        variant="primary"
        size="md"
        className="w-full"
      >
        Re-Initialize System
      </Button>
    </main>
  );
}

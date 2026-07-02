'use client';

import React from 'react';

export function ErrorResetButton({ reset }: { reset: () => void }) {
  return (
    <button
      onClick={reset}
      className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all select-none cursor-pointer"
    >
      Re-Initialize Runtime
    </button>
  );
}

'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, Loader2 } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'loading';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toast: (message: string, type: ToastType, duration?: number) => string;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (message: string, type: ToastType, duration = 4000) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type, duration }]);

      if (type !== 'loading' && duration > 0) {
        setTimeout(() => {
          dismiss(id);
        }, duration);
      }

      return id;
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => {
            const Icon = {
              success: CheckCircle,
              error: AlertCircle,
              info: Info,
              loading: Loader2,
            }[t.type];

            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
                className={`flex items-center gap-3 p-4 rounded-xl shadow-xl backdrop-blur-md border pointer-events-auto ${
                  t.type === 'success'
                    ? 'bg-slate-955/90 text-emerald-400 border-emerald-500/20'
                    : t.type === 'error'
                    ? 'bg-slate-955/90 text-rose-400 border-rose-500/20'
                    : t.type === 'loading'
                    ? 'bg-slate-955/90 text-indigo-400 border-indigo-500/20'
                    : 'bg-slate-955/90 text-blue-400 border-blue-500/20'
                }`}
                style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)' }}
              >
                <Icon className={`h-5 w-5 shrink-0 ${t.type === 'loading' ? 'animate-spin' : ''}`} />
                <p className="text-sm font-medium text-slate-100 flex-1">{t.message}</p>
                {t.type !== 'loading' && (
                  <button
                    onClick={() => dismiss(t.id)}
                    className="text-slate-400 hover:text-slate-200 transition-colors p-1"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    // Provide no-op toast interface during prerender or when provider is absent
    return {
      toast: () => '',
      dismiss: () => {},
    } as ToastContextType;
  }
  return context;
}

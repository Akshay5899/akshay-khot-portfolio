'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon: Icon, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {label}
          </label>
        )}
        <div className="relative flex items-center w-full">
          {Icon && (
            <div className="absolute left-3.5 text-slate-500 pointer-events-none">
              <Icon className="h-4 w-4" />
            </div>
          )}
          <input
            type={type}
            ref={ref}
            className={cn(
              'w-full h-10 px-4 rounded-lg bg-slate-900 border text-slate-100 placeholder-slate-500 text-xs transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 backdrop-blur-sm',
              error ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-800/80 hover:border-slate-700/80',
              Icon ? 'pl-11' : 'pl-4',
              className
            )}
            {...props}
          />
        </div>
        {error && <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider pl-1 mt-0.5">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-lg bg-slate-900 border text-slate-100 placeholder-slate-500 text-xs transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 backdrop-blur-sm min-h-[120px] resize-y',
            error ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-800/80 hover:border-slate-700/80',
            className
          )}
          {...props}
        />
        {error && <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider pl-1 mt-0.5">{error}</span>}
      </div>
    );
  }
);
TextArea.displayName = 'TextArea';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {label}
          </label>
        )}
        <div className="relative w-full">
          <select
            ref={ref}
            className={cn(
              'w-full h-10 px-4 rounded-lg bg-slate-900 border text-slate-100 placeholder-slate-500 text-xs transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 backdrop-blur-sm appearance-none cursor-pointer',
              error ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-800/80 hover:border-slate-700/80',
              className
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-slate-950 text-slate-200">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3.5 top-3.5 pointer-events-none text-slate-500">
            <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        {error && <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider pl-1 mt-0.5">{error}</span>}
      </div>
    );
  }
);
Select.displayName = 'Select';

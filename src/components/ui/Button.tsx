'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', isLoading, disabled, ...props }, ref) => {
    // 8px border-radius (rounded-lg), bold text style matching Figma specs
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-bold tracking-wider uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer';

    const variants = {
      // Premium theme gradient matching Akshay_index.html design: Purple -> Blue -> Cyan
      primary: 'bg-gradient-to-r from-[#7B3AEB] via-[#2463E9] to-[#0FA6E4] text-white hover:brightness-105 shadow-md shadow-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/25 border-none',
      
      secondary: 'bg-gradient-to-r from-[#2463E9] to-[#0FA6E4] text-white hover:brightness-105 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/25 border-none',
      
      outline: 'bg-transparent text-slate-200 border border-slate-800 hover:bg-slate-800/10 dark:hover:bg-slate-850 hover:text-slate-100',
      
      // Figma glassmorphism component: #11121B surface and white/10 borders
      glass: 'bg-slate-900/60 backdrop-blur-md text-slate-200 border border-slate-800/20 dark:border-white/10 hover:border-slate-800/40 dark:hover:border-white/20 hover:bg-slate-900/85 hover:text-white',
    };

    const sizes = {
      sm: 'px-3.5 py-2 text-[10px]',
      md: 'px-4 py-2.5 text-[11px]',
      lg: 'px-6 py-3.5 text-xs',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.015 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.985 }}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin text-current" />
            <span>Processing...</span>
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';


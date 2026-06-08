'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {
  children?: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true, ...props }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        'p-6 rounded-2xl bg-slate-900/40 border border-slate-800/85 backdrop-blur-md relative overflow-hidden transition-colors hover:border-slate-700/50 shadow-xl shadow-black/10',
        className
      )}
      {...props}
    >
      {/* Top border ambient glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};

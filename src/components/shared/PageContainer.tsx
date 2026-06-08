import React from 'react';
import { cn } from '@/lib/utils';

type PageContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const PageContainer: React.FC<PageContainerProps> = ({ children, className, ...props }) => {
  return (
    <main
      className={cn('min-h-screen bg-slate-955 text-slate-105 flex flex-col items-center overflow-x-hidden relative w-full', className)}
      {...props}
    >
      {/* Dynamic ambient vector blur shapes */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse duration-[8s]" />
      <div className="absolute top-[25%] right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-10 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      {children}
    </main>
  );
};

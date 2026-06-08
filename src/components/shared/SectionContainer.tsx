import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, className, id, ...props }) => {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-28 px-6 max-w-7xl mx-auto w-full relative z-10', className)}
      {...props}
    >
      {children}
    </section>
  );
};

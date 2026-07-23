'use client';

import React from 'react';
import { ProvidersClient } from '@/components/layout/ProvidersClient';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const LayoutClient: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ProvidersClient>
      <Navbar />
      {children}
      <Footer />
    </ProvidersClient>
  );
};

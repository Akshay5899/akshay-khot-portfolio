'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProvidersClient } from '@/components/layout/ProvidersClient';

export const NavFooterClient: React.FC = () => {
  return (
    <ProvidersClient>
      <Navbar />
      <Footer />
    </ProvidersClient>
  );
};

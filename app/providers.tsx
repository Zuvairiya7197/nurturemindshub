'use client';

import { SessionProvider } from 'next-auth/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
      <Footer />
      <FloatingActions />
    </SessionProvider>
  );
}

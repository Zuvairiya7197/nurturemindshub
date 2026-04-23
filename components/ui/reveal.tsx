'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

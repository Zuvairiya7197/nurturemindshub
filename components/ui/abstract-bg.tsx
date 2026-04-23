'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'hero' | 'soft' | 'warm' | 'cta';

const palette: Record<Variant, { a: string; b: string; c: string }> = {
  hero: {
    a: 'from-sky-300/40 to-cyan-300/20',
    b: 'from-blue-300/35 to-indigo-300/15',
    c: 'from-emerald-200/30 to-lime-200/10'
  },
  soft: {
    a: 'from-rose-200/40 to-orange-200/15',
    b: 'from-violet-200/30 to-fuchsia-200/10',
    c: 'from-sky-200/35 to-cyan-100/10'
  },
  warm: {
    a: 'from-amber-200/40 to-yellow-200/15',
    b: 'from-pink-200/30 to-rose-200/15',
    c: 'from-blue-200/30 to-cyan-100/10'
  },
  cta: {
    a: 'from-white/25 to-white/5',
    b: 'from-cyan-300/20 to-sky-200/5',
    c: 'from-blue-200/20 to-indigo-200/5'
  }
};

export function AbstractBg({ variant = 'soft' }: { variant?: Variant }) {
  const colors = palette[variant];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className={cn('absolute -left-16 -top-10 h-56 w-56 rounded-full bg-gradient-to-br blur-2xl', colors.a)}
        animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={cn('absolute -right-20 top-20 h-72 w-72 rounded-full bg-gradient-to-br blur-3xl', colors.b)}
        animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className={cn('absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-gradient-to-br blur-2xl', colors.c)}
        animate={{ x: [0, 12, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.55),transparent_32%),radial-gradient(circle_at_88%_70%,rgba(255,255,255,0.42),transparent_30%)]" />
    </div>
  );
}

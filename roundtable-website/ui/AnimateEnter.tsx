'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function AnimateEnter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.main
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto"
        exit={{ opacity: 0, y: 20 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'linear' }}
      >
        {children}
      </m.main>
    </LazyMotion>
  );
}

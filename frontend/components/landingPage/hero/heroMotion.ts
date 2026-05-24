import type { Variants } from 'framer-motion';

export const contentVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
    y: 20,
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -32 : 32,
    y: -12,
    transition: { duration: 0.35, ease: 'easeIn' },
  }),
};

export const formVariants: Variants = {
  enter: {
    opacity: 0,
    y: 36,
    scale: 0.97,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: 0.15, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
};

export const bulletVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.28 + i * 0.07, duration: 0.4 },
  }),
};

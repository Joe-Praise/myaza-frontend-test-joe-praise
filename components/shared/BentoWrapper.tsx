'use client';

import { motion } from 'framer-motion';
import { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

interface IBentoWrapperProps {
  children: ReactNode;
  element?: ElementType;
  className?: string;
  onClick?: () => void;
}

const BentoWrapper = ({
  children,
  // element: Element = 'section',
  className,
  onClick,
}: IBentoWrapperProps) => {
  return (
    <motion.section
      variants={cardVariants}
      className={cn(
        'bg-primary-100 rounded-[16px] text-white p-6 shadow',
        className
      )}
      onClick={onClick ? onClick : undefined}
    >
      {children}
    </motion.section>
  );
};

// Animation Variants for Individual Cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default BentoWrapper;

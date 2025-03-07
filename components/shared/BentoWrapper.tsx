import { cn } from '@/lib/utils';
import { ElementType, ReactNode } from 'react';

interface IBentoWrapperProps {
  children: ReactNode;
  element?: ElementType;
  className?: string;
  onClick?: () => void;
}

const BentoWrapper = ({
  children,
  element: Element = 'section',
  className,
  onClick,
}: IBentoWrapperProps) => {
  return (
    <Element
      className={cn(
        'bg-primary-100 rounded-[16px] text-white p-6 shadow',
        className
      )}
      onClick={onClick ? onClick : null}
    >
      {children}
    </Element>
  );
};

export default BentoWrapper;

'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({ to, children, className }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={to}
      className={cn(
        'font-karla font-normal hover:bg-nav-active px-4 py-3 rounded-[8px] hover:text-primary-100 hover:font-semibold bg-transparent leading-[18.7px]',
        {
          'bg-nav-active rounded-lg text-primary-100 font-semibold':
            pathName.toLowerCase() === to.toLowerCase(),
        },
        className
      )}
    >
      {children}
    </Link>
  );
}

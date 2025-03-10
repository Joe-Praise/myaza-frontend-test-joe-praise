'use client';
import Image from 'next/image';
import logo2 from '@/public/images/logo-2.png';
import appRoutes from '@/navigation';
import NavLink from './NavLink';
import { Logo } from '../shared';
import { Separator } from '../ui/seperator';
import { Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function SidebarContent() {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState('light');

  useEffect(() => {
    setTheme(mode);
  }, [mode, setTheme]);
  return (
    <section className='h-full flex flex-col gap-6 w-full'>
      <header className='flex items-center  mt-10 mb-[19px] mb:mb-[39.54px] ps-[28px] border-b-0 md:pt-0'>
        <Logo>
          <Image
            src={logo2}
            alt="company's logo icon"
            className='size-[31.04px] '
          />
        </Logo>
      </header>
      <section className='flex flex-col gap-2 font-karla'>
        {appRoutes.map((route, i) => {
          if (!route.name.length && !route.path.length) {
            return (
              <Separator
                key={`${route.path}-#${i}`}
                className='my-7 bg-primary-300'
              />
            );
          }

          return (
            <NavLink
              key={`${route.path}-#${i}`}
              to={route.path}
              className='flex items-center gap-3'
            >
              <span>{route.icon}</span>
              <span className='pt-1'>{route.name}</span>
            </NavLink>
          );
        })}

        <button
          className='flex justify-start items-center gap-3 w-full rounded-[8px] mt-2 ps-[16px] py-2.5 hover:bg-nav-active hover:text-primary-100 hover:font-semibold bg-transparent leading-[18.7px]'
          onClick={() =>
            setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
          }
        >
          <span>
            <Moon />
          </span>
          <span className='pt-1'>Dark Theme</span>
        </button>
      </section>
    </section>
  );
}

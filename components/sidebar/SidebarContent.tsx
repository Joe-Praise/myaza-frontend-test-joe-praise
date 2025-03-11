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
import { useNavBarStore } from '@/store';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export default function SidebarContent() {
  const { setTheme } = useTheme();
  const { isIcons } = useNavBarStore();

  const [mode, setMode] = useState('light');

  useEffect(() => {
    setTheme(mode);
  }, [mode, setTheme]);

  return (
    <section className='h-full flex flex-col gap-6 w-full'>
      <header
        className={cn(
          'w-full flex items-center mt-10 mb-[19px]  ps-[28px] border-b-0 md:pt-0',
          {
            'ps-0 justify-center': isIcons,
          }
        )}
      >
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
              key={`${route.path}-#${i}__${route.name}`}
              to={route.path}
              name={route.name}
              className={cn('flex items-center gap-3', {
                'justify-center w-[80%] mx-auto': isIcons,
              })}
            >
              <span>{route.icon}</span>
              {!isIcons && <span className='pt-1'>{route.name}</span>}
            </NavLink>
          );
        })}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className={cn(
                  'flex justify-start items-center gap-3 w-full rounded-[8px] mt-2 ps-[16px] py-2.5 hover:bg-nav-active hover:text-primary-100 hover:font-semibold bg-transparent leading-[18.7px]',
                  {
                    'justify-center w-[80%] mx-auto ps-0': isIcons,
                  }
                )}
                onClick={() =>
                  setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
                }
              >
                <span>
                  <Moon />
                </span>
                {!isIcons && <span className='pt-1'>Dark Theme</span>}
              </button>
            </TooltipTrigger>
            {isIcons && (
              <TooltipContent
                avoidCollisions
                side='right'
                align='center'
                className='py-2 text-nav-active'
              >
                <p className='text-[18px] font-karla'>Dark Theme</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </section>
    </section>
  );
}

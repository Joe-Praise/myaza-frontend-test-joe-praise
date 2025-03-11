import Image from 'next/image';
import name from '@/public/svg/uifry.svg';
import waterMark from '@/public/svg/TM.svg';
import { ReactNode } from 'react';
import { useNavBarStore } from '@/store';
import { useIsMobile } from '@/hooks/useIsMobile';
import Link from 'next/link';
import { routes } from '@/navigation';
import { cn } from '@/lib/utils';

interface ILogo {
  children: ReactNode;
}

const Logo = (props: ILogo) => {
  const { isIcons, toggleSidebarIcons } = useNavBarStore();
  const isMobile = useIsMobile();
  const { children } = props;

  return (
    <div className='flex items-center justify-center gap-[5.91px] px-3 py-[19px]'>
      {isMobile ? (
        <Link
          href='/dashboard'
          className={cn({
            'px-3 ': isIcons,
          })}
          onClick={() => !isMobile && toggleSidebarIcons()}
        >
          {children}
        </Link>
      ) : (
        <div
          className={cn({
            'px-3 ': isIcons,
          })}
          onClick={() => !isMobile && toggleSidebarIcons()}
        >
          {children}
        </div>
      )}
      {!isIcons && (
        <Link
          href={routes.dashboard.entry.path}
          className='flex items-start h-full mt-1'
        >
          <Image
            src={name}
            alt="company's name"
            className='w-[60.16px] h-[26.75px] block'
          />
          <Image
            src={waterMark}
            alt="company's watermark"
            className='w-[8.23px] h-[4.7px] mt-[6px]'
          />
        </Link>
      )}
    </div>
  );
};

export default Logo;

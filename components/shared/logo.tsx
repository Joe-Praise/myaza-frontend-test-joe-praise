import Image from 'next/image';
import name from '@/public/svg/uifry.svg';
import waterMark from '@/public/svg/TM.svg';
import { ReactNode } from 'react';

interface ILogo {
  children: ReactNode;
}

const Logo = (props: ILogo) => {
  const { children } = props;
  return (
    <div className='flex items-center justify-center gap-[5.91px]'>
      <div>{children}</div>
      <div className='flex items-start h-full mt-1'>
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
      </div>
    </div>
  );
};

export default Logo;

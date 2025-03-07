import Testimonials from '@/components/shared/testimonials';
import authGroupSystemImage from '@/public/images/auth-system-group-image.png';
import Image from 'next/image';
export default async function SigninLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='w-full block md:flex justify-center text-white min-h-[100dvh] max-h-[100dvh] overflow-hidden  '>
      {children}
      <div className='basis-[54%] bg-primary-200 overflow-auto hidden md:block'>
        <Testimonials />

        <div className='overflow-hidden h-[584px] '>
          <div className='relative'>
            <div className='absolute right-0'>
              <Image
                src={authGroupSystemImage}
                alt='grouped system picture'
                className=' h-[584px] w-full block'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';
import masterCard from '@/public/images/mastercard_logo.png';
import Image from 'next/image';
import ellipsisTop from '@/public/svg/Ellipse top.svg';
import ellipsisBottom from '@/public/svg/Ellipse bottom.svg';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const cards = [
  {
    balance: 5750.02,
    number: '5282 3456 7890 1289',
    expiry: '09/25',
    logo: '/mastercard-logo.svg',
  },
  {
    balance: 1750.02,
    number: '5282 3456 7890 1289',
    expiry: '09/25',
    logo: '/mastercard-logo.svg',
  },
  {
    balance: 15750.02,
    number: '5282 3456 7890 1289',
    expiry: '09/25',
    logo: '/mastercard-logo.svg',
  },
  {
    balance: 55750.02,
    number: '5282 3456 7890 1289',
    expiry: '09/25',
    logo: '/mastercard-logo.svg',
  },
  {
    balance: 30750.02,
    number: '5282 3456 7890 1289',
    expiry: '09/25',
    logo: '/mastercard-logo.svg',
  },
];

export default function CreditCardCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className='relative w-full max-w-md mx-auto'>
      <div ref={emblaRef} className='overflow-hidden'>
        <div className='flex'>
          {cards.map((card, index) => (
            <div className='flex-[0_0_100%] px-2 font-karla' key={index}>
              <Card className='relative border-none h-[197.6px] bg-gradient-to-br from-purple-500 to-blue-500 text-white pt-[32px] md:px-[15.24px] rounded-2xl shadow-lg'>
                <CardContent className='flex flex-col justify-between h-full'>
                  <div className='flex justify-between'>
                    <div>
                      <span className='text-sm font-medium leading-[16.37px] text-nav-active'>
                        Current Balance
                      </span>
                      <h2 className='text-3xl font-medium text-[28px] leading-[32.73px]'>
                        ${/* {formatAmount(card.balance)} */}
                        <CountUp
                          end={card.balance}
                          enableScrollSpy
                          decimalPlaces={2}
                          decimals={2}
                          decimal='.'
                          duration={2}
                        />
                      </h2>
                    </div>
                    <div>
                      <Image
                        src={masterCard}
                        alt='MasterCard'
                        className=' top-[34px] right-[27.24px] w-full max-w-[55.86px] h-[38.57px]'
                      />
                    </div>
                  </div>
                  <div className='flex justify-between items-center text-lg mt-2 '>
                    <span className='max-w-[204.81px] w-full font-medium text-sm leading-[16.37px]'>
                      {card.number}
                    </span>
                    <span className='font-medium text-sm leading-[16.37px]'>
                      {card.expiry}
                    </span>
                  </div>

                  <motion.div
                    animate={{
                      opacity: [0.35, 1, 0.35],
                      filter: [
                        'drop-shadow(0 0 5px rgba(168, 85, 247, 0.3))',
                        'drop-shadow(0 0 15px rgba(59, 130, 246, 0.7))',
                        'drop-shadow(0 0 5px rgba(168, 85, 247, 0.3))',
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className='absolute -top-2 -right-1'
                  >
                    <Image
                      src={ellipsisTop}
                      alt=''
                      className='w-full max-w-[298.45px] h-[102.7px] rotate-[2.5deg]'
                    />
                  </motion.div>
                  <motion.div
                    animate={{
                      opacity: [0.35, 1, 0.35],
                      filter: [
                        'drop-shadow(0 0 5px rgba(168, 85, 247, 0.3))',
                        'drop-shadow(0 0 15px rgba(59, 130, 246, 0.7))',
                        'drop-shadow(0 0 5px rgba(168, 85, 247, 0.3))',
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className='absolute -bottom-4 -left-1'
                  >
                    <Image
                      src={ellipsisBottom}
                      alt=''
                      className='w-full max-w-[298.45px] h-[102.7px] rotate-[6deg]'
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-4 space-x-2'>
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 w-4 rounded-full transition-all ${
              selectedIndex === index ? 'bg-white w-6' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

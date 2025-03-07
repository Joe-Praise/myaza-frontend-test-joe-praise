'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from 'react';
import AutoPlay from 'embla-carousel-autoplay';
import Image from 'next/image';
import star from '@/public/images/Star.png';

const testimonials = [
  {
    rating: 5,
    text: 'I’ve been using Uifry for over a year, and it’s helped simplify all my payments.',
    name: 'Ali Riaz',
    location: 'Singapore',
  },
  {
    rating: 5,
    text: 'Uifry has made tracking my expenses so much easier!',
    name: 'Jane Doe',
    location: 'United States',
  },
  {
    rating: 4,
    text: 'Great app with a clean UI. Makes budgeting effortless.',
    name: 'John Smith',
    location: 'Canada',
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay()]);
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
    <div className='relative max-w-full p-[64px] mx-auto'>
      <div ref={emblaRef} className='overflow-hidden'>
        <div className='flex  gap-10'>
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className='min-w-full flex flex-col gap-[16px] '>
                <div className='flex gap-[4px] items-center'>
                  {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      src={star}
                      alt='gold filled rating star'
                      className='size-[24px]'
                    />
                  ))}
                </div>
                <p className='font-karla font-bold text-[36px] leading-[44px] text-pretty'>
                  “{testimonial.text}”
                </p>

                <div className='font-karla'>
                  <p className='text-nav-active font-bold text-[20px] leading-[28px]'>
                    Ali Riaz
                  </p>
                  <p className='text-nav-active font-medium leading-[24px]'>
                    Singapore
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex justify-center mt-4 space-x-2'>
          {testimonials.map((_, index) => (
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
    </div>
  );
};

export default Testimonials;

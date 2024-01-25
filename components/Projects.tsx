'use client'
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
import { images } from '@/lib/images'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Projects() {
  const { ref } = useSectionInView('Projetos');
  
  return (
    <motion.section
    ref={ref}
    className='mb-20 mt-20 max-w-[25rem] md:max-w-[40rem] lg:max-w-[45em] text-center leading-8 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id='projetos'
   >
     <Swiper
          navigation
          modules={[Navigation]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg text-white'
        >

{images.map((image, index) => (
          <SwiperSlide key={index} className='relative'>
            <div className='flex h-full w-full items-center justify-center'>
              <Image
                src={image.src}
                alt={image.alt}
                className='block h-full w-full'
                width={200}
                height={200}
              />
              <div className='absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white py-2'>
                {image.alt}
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        </Swiper>
      
    
     </motion.section>
  )
}

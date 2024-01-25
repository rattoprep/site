/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import bg_img from '../public/main/bg_first.jpeg'
import hero_png from '../public/main/hero.png'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id='home' className='h-screen w-full mb-20 relative flex flex-col justify-center items-center'>
     <div className='absolute top-0 left-0 z-[-1] w-full h-full'>
     <Image
      alt="bg-intro"
      src={bg_img}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex : -1
      }}
    />
      </div>
      
    
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 10 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <Image src={hero_png}
              alt='Logo_ofc'
              width="192"
              height="192"
              quality="95"
              priority={true}
              className='h-32 w-32 rounded-full object-cover border-[0.35rem]
      border-white shadow-xl' />
          </motion.div>
          <motion.span className='absolute text-4xl bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7
            }}
          >
            🏍️
          </motion.span>
        </div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-white text-4xl lg:text-6xl">Ratto Preparações</span>
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="#contato" className='group bg-white text-gray-900 px-7 py-3 flex items-center
       gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-300 active:scale-105 transition'
          onClick={() => {
            setActiveSection("Contato");
            setTimeOfLastClick(Date.now());
          }}
        >Entre em contato<BsArrowRight
            className="opacity-70 group-hover:translate-x-1 transition"
          />
        </Link>
       
        <a className='bg-white p-4 text-gray-700 flex items-center
    gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
    transition cursor-pointer borderBlack  dark:bg-white/10 dark:text-white/60'
          href='https://linkedin.com' target='_blank'>
          <BsLinkedin />
        </a>
        <a className='bg-white p-4 text-gray-700 flex items-center
    gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
    transition cursor-pointer borderBlack  dark:bg-white/10  dark:text-white/60'
          href='https://github.com' target='_blank'>
          <FaGithubSquare />
        </a>
      </motion.div>

    </section>
  )
}

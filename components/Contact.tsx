'use client';

import React from 'react';
import SectionHeading from './Section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './Submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
 const { ref } = useSectionInView('Contato');

 return (
  <motion.section
   ref={ref}
   id='contato'
   className='mb-20 mt-20 w-[min(100%,38rem)] text-center scroll-mt-28'
   initial={{
    opacity: 0,
   }}
   whileInView={{
    opacity: 1,
   }}
   transition={{
    duration: 1,
   }}
  >
   <SectionHeading>Entre em Contato</SectionHeading>

   <p className='text-gray-700 -mt-6 dark:text-white/80'><a className='underline' href='mailto:victor.fazekas@hotmail.com'>rattopreparacoes28@gmail.com</a>
    {" "} </p>

   <form className='mt-10 flex flex-col dark:text-black'
    action={async (formData) => {
     const { data, error } = await sendEmail(formData);
     if (error) {
      toast.error(error)
      return
     }
     toast.success("Email enviado com sucesso!");
    }} >
    <input className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all
    dark:outline-none'
     name='senderEmail'
     type='email' required maxLength={500} placeholder='Seu email' />
    <textarea className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all
    dark:outline-none'
     name='message'
     required maxLength={500} placeholder='Sua mensagem' />
    <SubmitBtn />
   </form>
  </motion.section>
 )
}




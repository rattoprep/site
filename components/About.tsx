'use client'
import React from 'react'
import SectionHeading from './Section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
 const { ref } = useSectionInView('Sobre');

 return (
  <motion.section
   ref={ref}
   className='mb-20 mt-20 max-w-[45rem] text-center leading-8 scroll-mt-28'
   initial={{ opacity: 0, y: 100 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ delay: 0.175 }}
   id='sobre'
  >
   <SectionHeading>Sobre mim</SectionHeading>
   <p className='mb-3'>
   Bem-vindo à{" "}
    <span className="font-medium">RattoPreparações, </span>onde a paixão pelas duas rodas se transforma em excelência mecânica.{" "}
    <span className="font-medium">Conheça Marcos, ou como todos o chamam carinhosamente Rato.</span>{" "}
    <span className="italic"> Com mais de 12 anos de dedicação ao universo das motos, Marcos é um </span> especialista em alta e baixa cilindrada,  
    <span className="underline">oferecendo serviços de injeção eletrônica,{" "}revisões premium, cuidados com motores e muito mais.</span> Sua habilidade e comprometimento garantem que cada moto receba tratamento especializado!
    {" "}
    <span className="font-medium">
    Entre em contato para agendar seu serviço na melhor oficina de Recife.
    </span>
   </p>

  </motion.section>
 )
}

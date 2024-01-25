import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
 {
  name: "Home",
  hash: "#home",
 },
 {
  name: "Sobre",
  hash: "#sobre",
 },
 {
  name: "Projetos",
  hash: "#projetos",
 },
 {
  name: "Habilidades",
  hash: "#habilidades",
 },

 {
  name: "Contato",
  hash: "#contato",
 },
] as const;

export const experiencesData = [
 {
  title: "Graduated Mechatronics Technician",
  location: "São Paulo, BR",
  description:
   "I have a background in mechatronics technology but am now making a transition into programming, ready to apply my technical skills to a new and exciting career path.",
  icon: React.createElement(LuGraduationCap),
  date: "2012 - 2015",
 },
 {
  title: "Graduated Mechanical Engineering",
  location: "Recife, BR",
  description:
   "I completed my mechanical engineering degree and secured a position as a mechanical engineer.",
  icon: React.createElement(LuGraduationCap),
  date: "2013 - 2018",
 },
 {
  title: "ESL-English as Second Language",
  location: "San Antonio, TX",
  description:
   "I successfully completed an English as a Second Language (ESL) program, achieving an impressive score of 950 on the test. I am now well-prepared to communicate effectively in English.",
  icon: React.createElement(LuGraduationCap),
  date: "2018 - 2020",
 },
 {
  title: "Full-Stack Developer",
  location: "Recife, BR",
  description:
   "I'm currently studying to become a full stack developer, learning both front-end and back-end technologies to build versatile web applications.",
  icon: React.createElement(FaReact),
  date: "2022.2 - present",
 },
] as const;

export const projectsData = [
 {
  title: "PateoESG",
  description:
   "Effortlessly manage and reduce MTR emissions with our specialized ESG app for precise environmental impact control.",
  tags: ["React", "TypeScript", "Next.js", "MySQL", "Tailwind"],
  imageUrl: '',
 },
 {
  title: "GarantiaApp",
  description:
   "Optimize Hyundai after-sales warranty processes with intuitive dashboards for streamlined management.",
  tags: ["React", "TypeScript", "Next.js", "Tailwind", "MySQL", "GoogleAPI"],
  imageUrl: '',
 },
 {
  title: "Word Analytics",
  description:
   "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  tags: ["React", "Next.js", "MySQL", "Tailwind", "Framer"],
  imageUrl: '',
 },
] as const;

export const skillsData = [
    "Manutenção de Motores",
    "Troca de Óleo e Fluidos",
    "Reparo e Manutenção de Amortecedores",
    "Recarga de Bateria",
    "Moto-Scan",
    "Serviços de Elétrica",
    "Revisões Premium",
    "Diagnóstico de Problemas",
    "Soldagem de Peças",
    "Ajuste de Freios",
    "Reparo de Transmissão",
    "Personalização e Customização",
    "Diagnóstico Eletrônico",
    "Manutenção Preventiva",
    "Multi-Marcas",
    "Instalação de Acessórios",
    "Troca de Correntes e Coroas",
    "Reparo de Pneus",
    "Sintonia de Carburadores",
    "Substituição de Filtros",
    "Balanceamento de Rodas",
    "Instalação de Sistemas de Escape",
    "Serviços de Injeção Eletrônica",
    "Inspeção de Freios ABS",
    "Ajuste de Suspensão",
    "Reparo de Vazamentos",
    "Problemas Elétricos",
    "Recuperação de Motores",
  ] as const;
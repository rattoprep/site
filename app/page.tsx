import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/Section-divider';
import Skills from '@/components/Skills';


export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full">
      <Intro />
        <SectionDivider />
      <About />
        <SectionDivider />
      <Projects/>
        <SectionDivider />
      <Skills />
      <Contact/>
    </main>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import ThemeContextProvider from '@/context/theme-context'
import ThemeSwitch from '@/components/theme-switch'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ratto | Preparações',
  description: 'Oficina de Motos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} 
         bg-gray-50 text-gray-950
         dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-100`}>
     <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
          <Toaster position='top-center'/>
          <Footer/>
          <ThemeSwitch/>
        </ActiveSectionContextProvider>
     </ThemeContextProvider>
      </body>
    </html>
  )
}


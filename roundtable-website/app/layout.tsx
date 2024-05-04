
import './globals.css'
import { Metadata } from 'next';

import { Inter } from 'next/font/google'
import AnimateEnter from '@/ui/AnimateEnter';
import { Fragment, useState} from 'react'

import Header from "@/components/header";

import CTA from "@/components/cta";
import Footer from '@/components/footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  archives: ['https://old.amanpunia.me'],
  authors: [{ name: 'Aman Punia', url: 'https://amanpunia.me' }],
  publisher: '0xRoundTable',
  category: 'business',
  creator: 'Aman',
  title: {
    default: 'RoundTable',
    template: '%s | RoundTable',
  },
  description: 'Developer, writer, and creator.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    apple: '/apple-touch-icon-180x180.png',
    icon: '/favicon-196x196.png',
    shortcut: '/favicon.ico',
  },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Design',
    'Engineering',
    'Frontend',
    'Developer',
    'Software',
    'Cristian Crețu',
    'Cristicrtu',
    'cretu.dev',
    'romania',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en"
      className='overscroll-contain mx-auto bg-white'
    >

      <body className="antialiased bg-zinc-950">
        <AnimateEnter>
            <>
              {children}
              <CTA/>
              <Footer />
            </>
      </AnimateEnter>
      </body>
    </html>
  )
}


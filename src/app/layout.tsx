import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className='bg-black w-[100dvw] h-[100dvh] text-white font-medium font-raleway'>
        {children}
      </body>
    </html>
  )
}
export default RootLayout

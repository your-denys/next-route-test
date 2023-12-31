import './globals.css'
import { Montserrat } from 'next/font/google'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true} className={inter.className}>
        <Header/>
        <main className='container main'>{children}</main>
        <Footer/>
        </body>
    </html>
  )
}

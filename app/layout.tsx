import './globals.css'
import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'
import Image from 'next/image'
import logo from './favicon.ico'
import Link from 'next/link'
import StateContext from '@/context/StateContext'
import Nav from './components/Nav';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Dosis({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Bachelor',
  description: 'This project is for bachelor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <header className='bg-slate-200'>
          <section className='
            w-3/4 
            h-[70px]
            mx-auto 
            flex 
            justify-between
            items-center 
          '>
            <Link href='/'>
              <div className='flex items-center'>
                <Image className='me-3' src={logo} width={35} height={35} alt='logo' />
                <h1 className='text-2xl font-semibold'>Bachelor</h1>
              </div>
            </Link>
            <Nav />
          </section>
        </header>

        <main>
          <StateContext>
            {children}
          </StateContext>
        </main>
      </body>
    </html>
  )
}

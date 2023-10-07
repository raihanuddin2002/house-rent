import './globals.css'
import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'
import Link from 'next/link'
import StateContext from '@/context/StateContext'
import Nav from './components/Nav';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import LogoImage from './components/Logo'
import AuthProvider from './components/providers/AuthProvider'
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
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <header className='bg-slate-200'>
          <section className='
            h-[70px]
            w-full
            md:w-3/4
            md:mx-auto
            p-6
            md:p-0
            flex 
            justify-between
            items-center 
          '>
            <Link href='/'>
              <div className='flex items-center'>
                <LogoImage className='me-3' width={35} height={35} />
                <h1 className='text-2xl font-semibold'>Bachelor</h1>
              </div>
            </Link>
            <Nav />
          </section>
        </header>

        <main>
          <AuthProvider>
            <StateContext>
              {children}
            </StateContext>
          </AuthProvider>
        </main>
      </body>
    </html>
  )
}

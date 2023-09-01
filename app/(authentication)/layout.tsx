import React from 'react'
import Image from 'next/image'
import LogoImage from '../components/Logo';

export default function AuthenticationLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='
            bg-slate-100
            w-full
            h-[calc(100vh-70px)]
        '>
            <div className='h-full grid grid-cols-1 md:grid-cols-2'>
                <section className='bg-white hidden md:grid md:place-items-center'>
                    <Image
                        className='mx-auto'
                        src='/images/authentication.png'
                        alt='authentication image'
                        width={700}
                        height={500}
                    />
                </section>
                <section className='grid items-center'>
                    <div className='px-6 md:px-12'>
                        <LogoImage className='hidden md:block mb-10' width={50} height={50} />

                        {children}
                    </div>
                </section>
            </div>
        </div>
    )
}

import Image from 'next/image'
import React from 'react'

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
                        alt='logo'
                        width={700}
                        height={500}
                    />
                </section>

                {children}
            </div>
        </div>
    )
}

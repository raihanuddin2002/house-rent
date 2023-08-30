'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export const navLinks = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Login",
        href: "/login"
    },
    {
        name: "Sign up",
        href: "/signup"
    },
]

export default function Nav() {
    const pathname = usePathname()

    return (
        <>
            <nav className='
                flex
                gap-4
            '>
                {
                    navLinks.map(nav => {
                        const isActive = nav.href === pathname;

                        return <Link
                            href={nav.href}
                            className={`hover:underline ${isActive && 'font-bold'}`}
                            key={nav.name}
                        >
                            {nav.name}
                        </Link>
                    })
                }
            </nav>
        </>
    )
}

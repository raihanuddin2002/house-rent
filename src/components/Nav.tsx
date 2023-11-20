'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const navLinks = [
    {
        name: "Home",
        href: "/",
        loginRoute: true,
        normalRoute: true
    },
    {
        name: "Login",
        href: "/login",
        loginRoute: false,
        normalRoute: true
    },
    {
        name: "Sign up",
        href: "/signup",
        loginRoute: false,
        normalRoute: true
    }
];

export default function Nav() {
    const pathname = usePathname()
    const [showResponsiveNav, setShowResponsiveNav] = useState(false);

    return (
        <>
            <nav className={`
                h-auto
                w-full
                bg-slate-200
                absolute
                text-center
                py-6
                ${showResponsiveNav ? 'right-0 block' : 'right-[-1000px] hidden'}
                top-[70px]
                z-10
                border-t
                border-black
                md:w-auto
                md:bg-transparent
                md:static
                md:flex
                md:gap-4   
            `}>
                {
                    navLinks
                        .map(nav => {
                            const isActive = nav.href === pathname;

                            return (
                                <div
                                    key={nav.href}
                                    className={`${showResponsiveNav && 'px-6 py-3 md:p-0 hover:bg-black md:hover:bg-transparent hover:text-white md:hover:text-black'}`
                                    }>
                                    <Link
                                        href={nav.href}
                                        className={`md:hover:underline ${isActive && 'font-bold'}`}
                                    >
                                        {nav.name}
                                    </Link>
                                </div>
                            )
                        })
                }
            </nav>
            <button
                type='button'
                className='block md:hidden'
                onClick={() => setShowResponsiveNav(prev => !prev)}
            >
                <FontAwesomeIcon icon={faBars} size='xl' />
            </button>
        </>
    )
}

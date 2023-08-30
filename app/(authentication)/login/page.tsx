'use client'

import React from 'react'
import Image from 'next/image'
import logo from '../../favicon.ico';

export default function Login() {
    return (
        <section className='grid items-center'>
            <div className='px-12'>
                <Image className='mb-10' src={logo} alt='logo' width={50} height={50} />
                <h1 className='text-3xl font-bold mt-10'>Welcome back to login</h1>
                <h3 className='text-sm mt-2 mb-10 text-slate-400'>
                    Enter your registered information.
                </h3>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='mb-2 w-4/5'>
                        <input
                            type="text"
                            name='email'
                            placeholder='Email'
                            autoComplete='off'
                            className='w-full border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                        />
                    </div>
                    <div className='mb-2 w-4/5'>
                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            autoComplete='off'
                            className='w-full border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                        />

                    </div>

                    <div className='w-4/5'>
                        <button type='submit' className='w-full py-3 mt-10 bg-black text-white rounded-md hover:bg-slate-700'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

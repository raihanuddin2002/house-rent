'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <h1 className='text-2xl md:text-3xl font-bold mt-10'>Welcome back to login</h1>
            <h3 className='text-sm md:mt-2 mb-10 text-slate-400'>
                Enter your registered information.
            </h3>

            <form onSubmit={(e) => e.preventDefault()}>
                <div className='mb-2 w-full lg:w-4/5'>
                    <input
                        type="text"
                        name='email'
                        placeholder='Email'
                        autoComplete='off'
                        className='w-full border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                    />
                </div>
                <div className='mb-2 w-full lg:w-4/5 relative'>
                    <input
                        type={`${showPassword ? 'text' : 'password'}`}
                        name='password'
                        placeholder='Password'
                        autoComplete='off'
                        className='w-full border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                    />
                    <FontAwesomeIcon
                        onClick={() => setShowPassword(prev => !prev)}
                        icon={showPassword ? faEye : faEyeSlash}
                        className='absolute right-4 top-1/3'
                        size='sm'
                    />
                </div>

                <div className='w-full lg:w-4/5'>
                    <button type='submit' className='w-full py-3 mt-10 bg-black text-white rounded-md hover:bg-slate-700'>
                        Login
                    </button>
                </div>
            </form>
        </>
    )
}

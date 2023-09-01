'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../favicon.ico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <section className='grid items-center'>
            <div className='px-12'>
                <Image className='mb-10' src={logo} alt='logo' width={50} height={50} />
                <h1 className='text-3xl font-bold mt-10'>Welcome to Sign up</h1>
                <h3 className='text-sm mt-2 mb-10 text-slate-400'>Create a new account just a few steps.</h3>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='mb-2 w-4/5 flex gap-2'>
                        <input
                            type="text"
                            name='first_name'
                            placeholder='First Name'
                            autoComplete='off'
                            className='w-2/4 border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                        />
                        <input
                            type="text"
                            name='last_name'
                            placeholder='Last Name'
                            autoComplete='off'
                            className='w-2/4 border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                        />
                    </div>

                    <div className='mb-2 w-4/5'>
                        <input
                            type="text"
                            name='email'
                            placeholder='Email'
                            autoComplete='off'
                            className='w-full border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                        />
                    </div>
                    <div className='mb-2 w-4/5 relative'>
                        <input
                            type={`${showPassword ? 'text' : 'password'}`}
                            name='password'
                            placeholder='Password'
                            autoComplete='off'
                            className='w-full border border-slate-200 rounded-md p-3 pr-10 bg-white focus:border-black focus:outline-none'
                            maxLength={50}
                        />
                        <FontAwesomeIcon
                            onClick={() => setShowPassword(prev => !prev)}
                            icon={showPassword ? faEye : faEyeSlash}
                            className='absolute right-4 top-1/3'
                            size='sm'
                        />
                    </div>
                    <div className='mb-2 w-4/5 relative'>
                        <input
                            type={`${showPassword ? 'text' : 'password'}`}
                            name='confirm_password'
                            placeholder='Confirm Password'
                            autoComplete='off'
                            className='w-full border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                        />
                        <FontAwesomeIcon
                            onClick={() => setShowConfirmPassword(prev => !prev)}
                            icon={showConfirmPassword ? faEye : faEyeSlash}
                            className='absolute right-4 top-1/3'
                            size='sm'
                        />
                    </div>

                    <div className='w-4/5'>
                        <button type='submit' className='w-full py-3 mt-10 bg-black text-white rounded-md hover:bg-slate-700'>
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

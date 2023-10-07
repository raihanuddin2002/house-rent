'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import Input from '@/app/components/Input';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <h1 className='text-2xl md:text-3xl font-bold mt-10'>Welcome to Sign up</h1>
            <h3 className='text-sm md:mt-2 mb-10 text-slate-400'>Create a new account just a few steps.</h3>

            <form onSubmit={(e) => e.preventDefault()}>
                <div className='mb-2 w-full lg:w-4/5 flex gap-2'>
                    <input
                        type="text"
                        name='first_name'
                        placeholder='First Name'
                        autoComplete='off'
                        className='w-2/4 border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                        maxLength={100}
                        minLength={2}
                        required
                    />
                    <input
                        type="text"
                        name='last_name'
                        placeholder='Last Name'
                        autoComplete='off'
                        className='w-2/4 border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                        maxLength={100}
                        required
                    />
                </div>

                <div className='mb-2 w-full lg:w-4/5'>
                    <input
                        type="email"
                        name='email'
                        placeholder='Email'
                        autoComplete='off'
                        className='w-full border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                        maxLength={150}
                        required
                    />
                </div>
                <div className='mb-2 w-full lg:w-4/5 relative'>
                    <Input
                        type={`${showPassword ? 'text' : 'password'}`}
                        className='w-2/4'
                        name='password'
                        placeholder='Password'
                        autoComplete='off'
                        maxLength={70}
                        minLength={8}
                        required
                    />
                    <FontAwesomeIcon
                        onClick={() => setShowPassword(prev => !prev)}
                        icon={showPassword ? faEye : faEyeSlash}
                        className='absolute right-4 top-1/3'
                        size='sm'
                    />
                </div>
                <div className='mb-2 w-full lg:w-4/5 relative'>
                    <input
                        type={`${showConfirmPassword ? 'text' : 'password'}`}
                        name='confirm_password'
                        placeholder='Confirm Password'
                        autoComplete='off'
                        className='w-full border border-slate-200 rounded-md p-3 bg-white focus:border-black focus:outline-none'
                        maxLength={70}
                        minLength={8}
                        required
                    />
                    <FontAwesomeIcon
                        onClick={() => setShowConfirmPassword(prev => !prev)}
                        icon={showConfirmPassword ? faEye : faEyeSlash}
                        className='absolute right-4 top-1/3'
                        size='sm'
                    />
                </div>

                <div className='w-full lg:w-4/5'>
                    <button type='submit' className='w-full py-3 mt-10 bg-black text-white rounded-md hover:bg-slate-700'>
                        Sign up
                    </button>
                </div>
            </form>
        </>

    )
}

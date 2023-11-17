'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import Input from '@/src/components/ui/input/Input';
import SubmitButton from '@/src/components/ui/button/SubmitButton';

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
                    <Input
                        type="email"
                        name='email'
                        placeholder='Email'
                        autoComplete='off'
                        maxLength={150}
                        required
                    />
                </div>
                <div className='mb-2 w-full lg:w-4/5 relative'>
                    <Input
                        type={`${showPassword ? 'text' : 'password'}`}
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

                <div className='w-full lg:w-4/5'>
                    <SubmitButton>
                        Login
                    </SubmitButton>
                </div>
            </form>
        </>
    )
}

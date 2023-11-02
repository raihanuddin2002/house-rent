'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import Input from '@/app/components/Input';
import { SignUpAction } from './actions'
// import { useFormState } from 'react-dom';


export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // const [state, formAction] = useFormState()

    return (
        <>
            <h1 className='text-2xl md:text-3xl font-bold mt-10'>Welcome to Sign up</h1>
            <h3 className='text-sm md:mt-2 mb-10 text-slate-400'>Create a new account just a few steps.</h3>

            <form action={SignUpAction}>
                <div className='mb-2 w-full lg:w-4/5 flex gap-2'>
                    <Input
                        type="text"
                        name='first_name'
                        placeholder='First Name'
                        autoComplete='off'
                        className='w-2/4'
                        maxLength={100}
                        minLength={2}
                        required
                    />
                    <Input
                        type="text"
                        name='last_name'
                        placeholder='Last Name'
                        autoComplete='off'
                        className='w-2/4'
                        maxLength={100}
                        required
                    />
                </div>

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
                <div className='mb-2 w-full lg:w-4/5 relative'>
                    <Input
                        type={`${showConfirmPassword ? 'text' : 'password'}`}
                        name='confirm_password'
                        placeholder='Confirm Password'
                        autoComplete='off'
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

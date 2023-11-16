'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import Input from '@/app/components/Input/Input';
import { useFormState } from 'react-dom';
import { SignUpAction } from './action';
import toastify, { ToastType } from '@/app/utils/tostify';
import SubmitButton from '@/app/components/Button/SubmitButton';

export type InitialFormState = {
    responseType: ToastType;
    status: string,
    message: string
}

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [state, formAction] = useFormState(SignUpAction, {} as InitialFormState);
    const toastId = useRef('');

    useEffect(() => {
        if (state.responseType && state.message) {
            if (toastId.current) toastify.dismiss(toastId.current);

            toastId.current = toastify.toast({
                type: state.responseType,
                message: state.message
            });
        }
    }, [state])

    return (
        <>
            <h1 className='text-2xl md:text-3xl font-bold mt-10'>Welcome to Sign up</h1>
            <h3 className='text-sm md:mt-2 mb-10 text-slate-400'>Create a new account just a few steps.</h3>

            <form action={formAction}>
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
                    <SubmitButton>Sign Up</SubmitButton>
                </div>
            </form>
        </>

    )
}

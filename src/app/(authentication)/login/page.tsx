'use client'

import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import Input from '@/src/components/ui/input/Input';
import SubmitButton from '@/src/components/ui/button/SubmitButton';
import toastify from '@/src/lib/tostify';
import { signIn } from 'next-auth/react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const toastId = useRef('');

    const handleLogin = async (formData: FormData) => {
        if (toastId.current) toastify.dismiss(toastId.current);

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email || !password) {
            return toastId.current = toastify.toast({
                type: 'warn',
                message: 'Empty Input!'
            })
        }

        try {
            const login = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (login?.ok) {
                return toastId.current = toastify.toast({
                    type: 'success',
                    message: "Login Successful!"
                })
            } else {
                return toastId.current = toastify.toast({
                    type: 'error',
                    message: "Invalid Credentials!"
                })
            }
        } catch (error) {
            if (toastId.current) toastify.dismiss(toastId.current);

            toastId.current = toastify.toast({
                type: 'error',
                message: "Internal Server Error!"
            })
        }
    }

    return (
        <>
            <h1 className='text-2xl md:text-3xl font-bold mt-10'>Welcome back to login</h1>
            <h3 className='text-sm md:mt-2 mb-10 text-slate-400'>
                Enter your registered information.
            </h3>

            <form action={handleLogin}>
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
                    <SubmitButton>Login</SubmitButton>
                </div>
            </form>
        </>
    )
}

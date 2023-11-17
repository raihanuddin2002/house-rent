import React from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = {
    type: string;
    name: string;
    placeholder: string;
    autoComplete?: string;
    className?: string;
    maxLength?: number;
    minLength?: number;
    required?: boolean;
}

export default function Input({ className, ...props }: InputProps) {
    return (
        <>
            <input
                {...props}
                className={twMerge(`
                    w-full
                    border 
                    border-slate-200 
                    rounded-md 
                    p-3 
                    pr-10 
                    bg-white 
                    focus:border-black 
                    focus:outline-none
                `, className)}
            />
        </>
    )
}

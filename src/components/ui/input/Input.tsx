import React, { forwardRef } from 'react'
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
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, onChange, ...props }, ref) => {
    return (
        <>
            <input
                {...props}
                ref={ref}
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e)}
            />
        </>
    )
})

export default Input;

'use client'

import { useFormStatus } from 'react-dom'
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    label: string;
    className?: string;
}

export function Button({
    type,
    label,
    className
}: ButtonProps) {
    const { pending } = useFormStatus()

    return (
        <button
            type={type ?? 'button'}
            className={twMerge(`
                    w-full 
                    py-3 
                    mt-10 
                    bg-black 
                    text-white 
                    rounded-md 
                    hover:bg-slate-700
                `
                , className)
            }
            aria-disabled={type === 'submit' && pending}
        >
            {label}
        </button>
    )
}
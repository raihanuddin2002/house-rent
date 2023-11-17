'use client'

import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

export function Button({
    type,
    children,
    className,
    onClick,
    ...props
}: ButtonProps) {
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
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick && onClick(e)}
            {...props}
        >
            {children}
        </button>
    )
}
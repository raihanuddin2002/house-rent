import React, { forwardRef } from 'react'
import { cn } from '@/src/lib/cn';
import { PasswordType } from '@/src/utils/passvalidation';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    passwordType?: PasswordType | null;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, onChange, passwordType, ...props }, ref) => {
    return (
        <>
            <input
                {...props}
                ref={ref}
                className={cn(`w-full border  border-slate-200 rounded-md p-3 pr-10 bg-white  focus:border-black focus:outline-none`,
                    {
                        'border-green-500 focus:border-green-500': passwordType === 'strong',
                        'border-yellow-500 focus:border-yellow-500': passwordType === 'medium',
                        'border-red-500 focus:border-red-500': passwordType === 'weak',

                    }
                )}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e)}
            />
        </>
    )
})

export default Input;

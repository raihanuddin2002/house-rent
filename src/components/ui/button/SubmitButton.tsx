import React, { useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom';
import toastify from '@/src/utils/tostify';
import { Button } from './Button';

type SubmitButtonProps = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SubmitButton({ children, disabled, onClick, ...props }: SubmitButtonProps) {
    const { pending } = useFormStatus();
    const toastId = useRef('');

    useEffect(() => {
        if (pending) {
            if (toastId.current) toastify.dismiss(toastId.current);
            toastId.current = toastify.loading("Please wait...");
        }
        else toastify.dismiss(toastId.current)
    }, [pending, toastId.current]);

    return (
        <Button
            type='submit'
            className='duration-500 hover:duration-500 hover:scale-105 hover:transition-all hover:ease-out'
            onClick={onClick}
            disabled={disabled || pending}
            {...props}
        >
            {children}{pending && "..."}
        </Button>
    )
}

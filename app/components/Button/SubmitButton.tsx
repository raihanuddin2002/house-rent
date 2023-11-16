import React, { useEffect, useRef } from 'react'
import { Button } from './Button'
import { useFormStatus } from 'react-dom';
import toastify from '@/app/utils/tostify';

type SubmitButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SubmitButton({ children, onClick, ...props }: SubmitButtonProps) {
    const { pending } = useFormStatus();
    const toastId = useRef('');

    useEffect(() => {
        if (pending) {
            if (toastId.current) toastify.dismiss(toastId.current);
            toastId.current = toastify.loading("Please wait...");
        }
        else {
            toastify.dismiss(toastId.current)
        }

    }, [pending, toastId.current]);

    return (
        <Button
            type='submit'
            onClick={onClick}
            disabled={pending}
            {...props}
        >
            {children}{pending && "..."}
        </Button>
    )
}

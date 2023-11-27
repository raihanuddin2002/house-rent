'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/lib/cn"
import { Slot } from "@radix-ui/react-slot"

export const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm capitalize font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-black text-white",
            },
            size: {
                default: "w-full px-4 py-2",
                sm: "rounded-md px-3",
                lg: "w-full py-3",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, type, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, className }),
                    {
                        "duration-500 hover:duration-500 hover:scale-105 hover:transition-all hover:ease-out": type === 'submit'
                    }
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export default Button;
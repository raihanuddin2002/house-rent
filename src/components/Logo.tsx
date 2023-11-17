import React from 'react'
import Image from 'next/image'

type LogoProps = {
    width: number;
    height: number;
    className: string;
}

export default function LogoImage({ width, height, className }: LogoProps) {
    return (
        <Image src='/images/favicon.ico' className={className} width={width} height={height} alt='Logo' />
    )
}

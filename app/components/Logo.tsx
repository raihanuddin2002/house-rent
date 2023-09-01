import React from 'react'
import Image from 'next/image'
import logo from '../favicon.ico'

type LogoProps = {
    width: number;
    height: number;
    className: string;
}

export default function LogoImage({ width, height, className }: LogoProps) {
    return (
        <Image src={logo} className={className} width={width} height={height} alt='Logo' />
    )
}

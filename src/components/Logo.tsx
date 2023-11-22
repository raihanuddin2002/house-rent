import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

type LogoProps = {
    className?: string;
    size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
}

export default function Logo({ className = "", size = 'lg' }: LogoProps) {
    return (
        <FontAwesomeIcon className={className} icon={faHouseUser} size={size} />
    )
}

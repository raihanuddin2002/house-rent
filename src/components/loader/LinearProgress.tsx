import React from 'react'

export default function LinearProgress() {
    return (
        <div className="overflow-hidden h-[4px] w-full bg-slate-400">
            <div className="
                w-full 
                h-full
                relative
                before:h-full
                before:absolute 
                before:content-'' 
                before:animate-linear_before
                before:bg-black
                after:h-full
                after:absolute
                after:content-''
                after:animate-linear_after
                after:bg-black 
            ">

            </div>
        </div>
    )
}
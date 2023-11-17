"use client";

import React, { Dispatch, SetStateAction, createContext, useState } from 'react'

type ContextValueType = {
    globalState: GlobalStateType;
    setGlobalState: Dispatch<SetStateAction<GlobalStateType>>
}
type GlobalStateType = {
    isLogin: boolean;
}

export const State = createContext({} as ContextValueType);

export default function StateContext({ children }: { children: React.ReactNode }) {
    const [globalState, setGlobalState] = useState<GlobalStateType>({
        isLogin: false
    })

    return (
        <State.Provider value={{ globalState, setGlobalState }}>
            {children}
        </State.Provider>
    )
}

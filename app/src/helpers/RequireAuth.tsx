import React, { ReactNode } from 'react'
import { useAuthContext } from './AuthContext'


type Props = {
    children: ReactNode
}

export const RequireAuth = ({children}: Props) => {
    const { state } = useAuthContext()

    if(!state.isLoged){
        return (
            null
        )
    }
    return (
        <>
            {children}
        </>
    )
}
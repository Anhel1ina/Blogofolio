import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { useAuthState } from '../store/auth/selectors'


type Props = {
    children: ReactNode
}

export const RequireAuth = ({children}: Props) => {
    const signInData = useAuthState()

    if(!signInData.isLoged){
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
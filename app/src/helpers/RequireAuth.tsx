import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { checkAuth } from '../store/auth/selectors'


type Props = {
    children: ReactNode
}

export const RequireAuth = ({children}: Props) => {
    const {isLoged} = useSelector(checkAuth)

    if(!isLoged){
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
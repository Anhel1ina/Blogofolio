import React from 'react'
import { useReducer, useContext, createContext, ReactNode} from 'react'
import { setOpenAction, setCloseAction } from '../store/burgerMenu/action'
import { BurgerState, BurgerAction } from '../store/burgerMenu/types'
import { burgerReducer, burgerInitState } from '../store/burgerMenu/reducer'

type BurgerStateContextType = {// type for content
    state: BurgerState
    setOpen: () => void
    setClose: () => void
}

const BurgerContext = createContext<BurgerStateContextType> ({} as BurgerStateContextType)//content creation

type BurgerProviderProps = {
    children: ReactNode
}



export const BurgerProvider = ({ children }: BurgerProviderProps) => {
    const [state, dispatch] = useReducer(burgerReducer, burgerInitState)

    const value = {
        state: state,
        setOpen: () => dispatch(setOpenAction()),
        setClose: () => dispatch(setCloseAction())
    }

    return (
        <BurgerContext.Provider value={value}>
            {children}
        </BurgerContext.Provider>
    )
}

export const useBurgerContext = () => {
    return useContext(BurgerContext)
}
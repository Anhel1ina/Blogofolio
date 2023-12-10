import React from 'react'
import { useReducer, useContext, createContext, ReactNode} from 'react'

type BurgerState = {
    isOpened: boolean;
}

const burgerInitState: BurgerState = {//burger inintial state
    isOpened: false
}

type BurgerAction = {
    type: 'open' | 'close'
}

const burgerReducer = (state: BurgerState, action: BurgerAction): BurgerState => {
    switch (action.type) {
        case 'open':
            return {
                isOpened: true
            }
        case 'close':
            return {
                isOpened: false
            }
        default:
            return state
    }
}

type BurgerStateContextType = {// type for content
    state: BurgerState
    dispatch: React.Dispatch<BurgerAction>
}

const BurgerContext = createContext<BurgerStateContextType> ({} as BurgerStateContextType)//content creation

type BurgerProviderProps = {
    children: ReactNode
}

export const BurgerProvider = ({ children }: BurgerProviderProps) => {
    const [state, dispatch] = useReducer(burgerReducer, burgerInitState)

    return (
        <BurgerContext.Provider value={{ state, dispatch }}>
            {children}
        </BurgerContext.Provider>
    )
}

export const useBurgerContext = () => {
    return useContext(BurgerContext)
}
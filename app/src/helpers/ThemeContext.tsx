import React, { ReactNode, createContext, useContext, useState } from 'react'

type ThemeState = 'light' | 'dark'

type ThemeContextType = {
    state: ThemeState
    setState: React.Dispatch<React.SetStateAction<ThemeState>>
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

type ProviderProps = {
    children: ReactNode
}

export const ThemeContextProvider = ({children}: ProviderProps) => {
    const [state, setState] = useState<ThemeState>('light')

    const value = {
        state,
        setState
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}
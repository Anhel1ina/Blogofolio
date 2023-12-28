import React, { ReactNode, createContext, useContext, useReducer } from 'react'
import { ThemeState, ThemeAction } from '../store/theme/types'
import { setLightAction, setDarkAction } from '../store/theme/action'
import { themeReducer, themeInitState } from '../store/theme/reducer'


// type ThemeContextType = {
//     state: ThemeState
//     setLightMode: () => void
//     setDarkMode: () => void
// }

// export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

// type ProviderProps = {
//     children: ReactNode
// }

// export const ThemeContextProvider = ({children}: ProviderProps) => {
//     const [state, dispatch] = useReducer(themeReducer, themeInitState)
    

//     const value = {
//         state: state,
//         setLightMode: () => dispatch(setLightAction()),
//         setDarkMode: () => dispatch(setDarkAction())
//     }

//     return (
//         <ThemeContext.Provider value={value}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// export const useThemeContext = () => {
//     return useContext(ThemeContext)
// }
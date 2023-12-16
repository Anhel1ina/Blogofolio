import { ReactNode, createContext, useContext, useReducer } from 'react'
import { AuthState, AuthAction } from '../store/auth/types'
import { loginAction, logoutAction } from '../store/auth/actions'
import { authReducer, authInitState } from '../store/auth/reducer'


type AuthContextType = {//value for provider
    state: AuthState
    login: (username: string, initials: string) => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type ProviderProps = {
    children: ReactNode
}


export const AuthContextProvider = ({children}: ProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, authInitState)

    const value = {
        state: state,
        login: () => dispatch(loginAction()),
        logout: () => dispatch(logoutAction())
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}
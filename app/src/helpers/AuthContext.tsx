import { ReactNode, createContext, useContext, useReducer } from 'react'

type AuthState = {
    isLoged: boolean
    userName?: string
    initials?: string
}

const authInitState: AuthState = {
    isLoged: false,
}

type AuthAction = {
    type: string
    userName?: string
    initials?: string
}

type AuthContextType = {//value for provider
    state: AuthState
    login: (username: string, initials: string) => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type ProviderProps = {
    children: ReactNode
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch(action.type){
        case 'login':
            return { // type loginState
                isLoged: true,
                userName: action.userName,
                initials: action.initials
            }
        case 'logout':
            return {
                isLoged: false
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({children}: ProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, authInitState)

    const login = () => dispatch({
        type: 'login',
        userName: 'Artem Malkin',
        initials: 'AM'
    })

    const logout = () => dispatch({
        type: 'logout'
    })

    const value = {
        state: state,
        login: login,
        logout: logout
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
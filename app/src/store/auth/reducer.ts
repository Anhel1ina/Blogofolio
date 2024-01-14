import { AuthState, AuthAction } from "./types"

export const authInitState: AuthState = {
    isLoged: false,
}

export const authReducer = (state = authInitState, action: AuthAction): AuthState => {
    switch(action.type){
        case 'LOGIN':
            return { // type loginState
                ...state,
                isLoged: true,
                userName: action.userName,
                initials: action.initials
                //add tokens
            }
        case 'AUTH_SUCCESS':
            return {
                ...state,
                token: action.token
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.password
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoged: false
                ///add errors
            }
        default:
            return state
    }
}
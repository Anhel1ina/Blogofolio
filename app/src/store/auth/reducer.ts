import { AuthState, AuthAction } from "./types"

export const authInitState: AuthState = {
    isLoged: false,
}

export const authReducer = (state = authInitState, action: AuthAction): AuthState => {
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
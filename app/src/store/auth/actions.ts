import { AppThunk } from "../store"
import { AuthAction } from "./types"

export const loginAction = (userName: string): AuthAction => ({
    type: 'LOGIN',
    userName: userName.toUpperCase(),
    initials: userName[0].toUpperCase()
})

export const logoutAction = (): AuthAction => ({
    type: 'LOGOUT'
})

export const signInSuccessAction = (token: string) => {
    return{
        type: 'AUTH_SUCCESS',
        token: token,
    }
}

//actions for sending data via sign in

export const setSignInEmailAction = (email: string) => {
    return{
        type: 'SET_EMAIL',
        email: email
    }
}

export const setSignInPasswordAction = (password: string) => {
    return{
        type: 'SET_PASSWORD',
        password: password
    }
}

// const login = 'majeneg279@tanlanav.com'
// const passsword = 'qazxswedc123'

export const signInAction = (email: string, password: string): AppThunk => {   
    return async (dispatch, getState) => {
        const request = new Request(
            'https://studapi.teachmeskills.by/auth/jwt/create/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            }
        )

        await fetch(request)
            .then(async (res) => {
                const data = await res.json()
                return [data, res.status]
            })
            .then(([data, status]) => {
                if(status === 200){
                    localStorage.setItem('AUTH_REFRESH_TOKEN', data.refresh)
                    dispatch(signInSuccessAction(data.access))
                }
            })
    } 
}


export const getAccessAction = (): AppThunk => {
    return async (dispatch, getState) => {
        const accessRequest = new Request(
            'https://studapi.teachmeskills.by/auth/jwt/refresh/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    "refresh": localStorage.getItem('AUTH_REFRESH_TOKEN')
                })
            }
        )

        await fetch(accessRequest)
            .then(async (res) => {
                const data = await res.json()
                return [data, res.status]
            })
            .then(([data, status]) => {
                if(status === 200){
                    dispatch(signInSuccessAction(data.access))
                }
            })
    }
}

export const getAuthorized = (): AppThunk => {
    return async (dispatch, getState) => {
        const token = getState().auth.token
        if(!token){
            console.log('Token is missed')
        }
        
        const getRequest = new Request(
            'https://studapi.teachmeskills.by/auth/users/me/',
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            }
        )

        await fetch(getRequest)
            .then(async (res) => {
                const data = await res.json()
                return [data, res.status]
            })
            .then(([data, status]) => {
                if(status === 200){
                    dispatch(loginAction(data.username))
                }
            })
    }
}
import { isEmailValid } from "../../helpers/inputsValidation"
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

export const setAuthAlert = (value: boolean): AuthAction => {
    return{
        type: 'SET_AUTH_ALERT',
        showAuthError: value
    }
}

// const login = 'majeneg279@tanlanav.com'
// const passsword = 'qazxswedc123'

export const signInAction = (email: string, password: string): AppThunk => {   
    return async (dispatch, getState) => {

        if(getState().auth.email && !isEmailValid(getState().auth.email!)){
            dispatch({
                type: 'AUTH_FAILED',
                errors: {
                    email: 'Enter a valid email address',
                    password: getState().auth.errors?.password
                }
            })
            return
        }

        if(getState().auth.password && getState().auth.password!.length < 8){
            dispatch({
                type: 'AUTH_FAILED',
                errors: {
                    email: getState().auth.errors?.email,
                    password: 'Enter a valid password. Your password must contain at least 8 characters.'
                }
            })
            return
        }

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
                return [data, res.status.toString()]
            })
            .then(([data, status]) => {
                if(status.startsWith('2')){
                    localStorage.setItem('AUTH_REFRESH_TOKEN', data.refresh)
                    dispatch(signInSuccessAction(data.access))
                    dispatch(getAccessAction())
                    dispatch(getAuthorized())

                }
                if(status.startsWith('4')){
                    dispatch({
                        type: 'AUTH_FAILED',
                        errors: data,
                    })
                    if(status == 401){
                        dispatch(setAuthAlert(true))
                    }
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
                return [data, res.status.toString()]
            })
            .then(([data, status]) => {
                if(status.startsWith('2')){
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
                return [data, res.status.toString()]
            })
            .then(([data, status]) => {
                if(status.startsWith('2')){
                    dispatch(loginAction(data.username))
                }
            })
    }
}
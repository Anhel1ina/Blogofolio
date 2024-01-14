import { signInAction } from "../auth/actions"
import { AppThunk } from "../store"
import { SignUpActionType } from "./types"

export const setUsernameAction = (username: string): SignUpActionType => ({
    type: 'SET_SIGN_UP_USERNAME',
    payload: username
})

export const setEmailAction = (email: string): SignUpActionType => ({
    type: 'SET_SIGN_UP_EMAIL',
    payload: email
})

export const setPasswordAction = (password: string): SignUpActionType => ({
    type: 'SET_SIGN_UP_PASSWORD',
    payload: password
})

export const setCheckPasswordAction = (checkPassword: string): SignUpActionType => ({
    type: 'SET_SIGN_UP_CONFIRM_PASSWORD',
    payload: checkPassword
})

export const sendSignUpAsyncAction = () : AppThunk => {     
    
    return async (dispatch, getState) => {
        const formData = getState().signUp
        if (formData.password !== formData.confirmPassword) {
            dispatch({
                type: 'SIGN_UP_FAILED',
                payload: 'Password do not match.'
            })
            return
        }
        const request = new Request(
            'https://studapi.teachmeskills.by/auth/users/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                })
            }
        )

        await fetch(request)
            .then( async (res) => {
                const status = res.status.toString()
                return [ await res.json(), status]
            })
            .then(([res, status]) => {
                if(status.startsWith('2')){
                    dispatch({
                        type: 'SIGN_UP_SUCCESS'
                    })
                    //activation firstly
                    // signInAction(formData.email!, formData.password!)
                    //auto authorization with sign up  
                }
                if (status.startsWith('4')){
                    dispatch({
                        type: 'SIGN_UP_FAILED',
                        payload: res
                    })
                }
            })
        
    }
}
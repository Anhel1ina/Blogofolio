import { useRef, useEffect, useState } from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { checkAuth } from '../../store/auth/selectors'
import { useSelector } from 'react-redux'
import { getAccessAction, getAuthorized, setSignInEmailAction, setSignInPasswordAction, signInAction } from '../../store/auth/actions'


type Props = {
    disabled?: boolean
    buttonName: string
    underTitle?: string
    underLink?: string
    submitLink: string

    forgetLink?: string
    linkTo?: string
}

export const SignInForm = ({buttonName, underTitle, underLink, forgetLink, linkTo, submitLink, disabled=false}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [errors, setErrors] = useState('')

    const signInData = useSelector(checkAuth)
    
    useEffect(() => {
        inputRef.current?.focus()
        if(signInData.isLoged){
            navigate('/')
        }
    }, [signInData])

    
    const signIn = async () => {
        await dispatch(signInAction(signInData.email!, signInData.password!))
        await dispatch(getAccessAction())
        await dispatch(getAuthorized())
    }


    return (
        <form className={styles.sign_form}>
            <div>
                {
                    signInData.isLoged === false && JSON.stringify(signInData.errors)
                }
            </div>
            {
                <>
                    <Input value={signInData.email || ''} 
                            reference={inputRef} 
                            label="Email" 
                            onChange={(text: string) => {
                                dispatch(setSignInEmailAction(text))
                            }}
                            placeholder='Your email' 
                            type='email'/>
                    <Input value={signInData.password || ''} 
                            label="Password" 
                            onChange={(text: string) => {
                                dispatch(setSignInPasswordAction(text))
                            }}
                            placeholder='Your password' 
                            type='password'/>
                </>
            }
            {
                forgetLink ? (
                    <Link to={forgetLink} className={styles.forget_link}>
                        <p>Forgot password ?</p>
                    </Link>
                ) : (
                    null
                )
            }
            {/* <Link to={submitLink}> */}
                <input type="button" onClick={() => signIn()} className={styles.primary_button} disabled={disabled} value={buttonName} />
            {/* </Link> */}
            {
                underTitle && underLink ? (
                    <div className={styles.sign_text}>
                        <p>{underTitle + " "}
                            {
                                linkTo ? (
                                    <Link to={linkTo}>{underLink}</Link>
                                ) : (
                                    null
                                )
                            }
                        </p>
                    </div>
                ) : (
                    null
                )
            }
        </form>
    )
}

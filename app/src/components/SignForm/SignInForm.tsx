import { useRef, useEffect, useState } from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useAuthState } from '../../store/auth/selectors'
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

    const signInData = useAuthState()

    
    useEffect(() => {
        inputRef.current?.focus()
        if(signInData.isLoged){
            navigate('/')
        }
    }, [signInData])

    
    const signIn = async () => {
        await dispatch(signInAction(signInData.email!, signInData.password!))
        // await dispatch(getAccessAction())
        // await dispatch(getAuthorized())
    }


    return (
        <form className={styles.sign_form}>
            {
                <>
                    <Input value={signInData.email || ''} 
                            label="Email" 
                            onChange={(text: string) => {
                                dispatch(setSignInEmailAction(text))
                            }}
                            placeholder='Your email' 
                            type='email'
                            errorsData={signInData}
                            errorType='email'/>
                    {signInData.isLoged === false && signInData.errors?.email && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(signInData.errors.email).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                    <Input value={signInData.password || ''} 
                            label="Password" 
                            onChange={(text: string) => {
                                dispatch(setSignInPasswordAction(text))
                            }}
                            placeholder='Your password' 
                            errorType='password'
                            errorsData={signInData}
                            type='password'/>
                    {signInData.isLoged === false && signInData.errors?.password && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(signInData.errors.password).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
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
            <input type="button" onClick={() => signIn()} className={styles.primary_button} disabled={disabled} value={buttonName} />
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

import React, { useRef, useEffect, useState } from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useSignUpState } from '../../store/signUp/selector'
import { setEmailAction, setUsernameAction, setPasswordAction, sendSignUpAsyncAction, setCheckPasswordAction } from '../../store/signUp/action'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'


type Props = {
    disabled?: boolean
    buttonName: string
    underTitle?: string
    underLink?: string
    submitLink: string

    forgetLink?: string
    linkTo?: string
}

export const SignUpForm = ({buttonName, underTitle, underLink, forgetLink, linkTo, submitLink, disabled=false}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const formData = useSignUpState()
    const dispatch = useDispatch<AppDispatch>()
    const [errors, setErrors] = useState('')

    
    useEffect(() => {
        inputRef.current?.focus()
        if(formData.isSignUpSuccess){
            navigate('registrationconfirm')
        }
    }, [formData])

    return (
        <form className={styles.sign_form}>
            {
                <>
                    <Input value={formData.username || ''} 
                            reference={inputRef} 
                            label="Name" 
                            onChange={(text: string) => {
                                dispatch(setUsernameAction(text))
                            }}
                            placeholder='Your name' 
                            type='text'
                            errorsData={formData}
                            errorType='username'/>
                    {formData.isSignUpSuccess === false && formData.errors?.username && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(formData.errors.username).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}

                    <Input value={formData.email || ''} 
                            label="Email" 
                            onChange={(text: string) => {
                                dispatch(setEmailAction(text))
                            }}
                            placeholder='Your email' 
                            type='email'
                            errorsData={formData}
                            errorType='email'/>

                    {formData.isSignUpSuccess === false && formData.errors?.email && (
                            <p className={styles.error_fields}>
                                {JSON.stringify(formData.errors.email).replace(/^\["(.+)"\]$/, '$1')}
                            </p>
                    )}
                    <Input value={formData.password || ''} 
                            label="Password" 
                            onChange={(text: string) => {
                                dispatch(setPasswordAction(text))
                            }}
                            placeholder='Your password' 
                            type='password'
                            errorsData={formData}
                            errorType='password'/>

                    {formData.isSignUpSuccess === false && formData.errors?.password && (
                            <p className={styles.error_fields}>
                                {JSON.stringify(formData.errors.password).replace(/^\["(.+)"\]$/, '$1')}
                            </p>
                    )}
                    <Input value={formData.confirmPassword || ''}
                            label="Confirm password"
                            onChange={(text: string) => {
                                dispatch(setCheckPasswordAction(text))
                            }}
                            placeholder='Confirm password' 
                            errorType='confirmPassword'
                            errorsData={formData}
                            type='password'/>
                    {formData.isSignUpSuccess === false && formData.errors?.confirmPassword && (
                            <p className={styles.error_fields}>
                                {JSON.stringify(formData.errors.confirmPassword).replace(/^\["(.+)"\]$/, '$1')}
                                
                            </p>
                    )}
                    {
                        formData.confirmPassword !== formData.password && (
                            <p className={styles.error_fields}>
                                Password mismatch! Check your password.
                            </p>
                        )
                    }
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
                <input type="button" onClick={() => dispatch(sendSignUpAsyncAction())} 
                    className={styles.primary_button} disabled={disabled} value={buttonName} />
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

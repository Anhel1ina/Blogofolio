import { useRef, useEffect, useState } from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { Link } from 'react-router-dom'
import { useSignUpState } from '../../store/signUp/selector'
import { setEmailAction, setUsernameAction, setPasswordAction, sendSignUpAsyncAction } from '../../store/signUp/action'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'

type InputType = {
    title: string
    text: string
    type: string
}

type Props = {
    innerItems: InputType[]

    disabled?: boolean
    buttonName: string
    underTitle?: string
    underLink?: string
    submitLink: string

    forgetLink?: string
    linkTo?: string
}

export const SignForm = ({innerItems, buttonName, underTitle, underLink, forgetLink, linkTo, submitLink, disabled=false}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    })

    const formData = useSignUpState()
    const dispatch = useDispatch<AppDispatch>()
    const [errors, setErrors] = useState('')

    console.log(formData)

    return (
        <form className={styles.sign_form}>
            <div>
                {errors}
            </div>
            {
                innerItems.map((item, i) => (
                    <Input key={i} index={i} reference={inputRef} label={item.title} placeholder={item.text} type={item.type}/>
                ))
                // <>
                //     <Input value={formData.username || ''} 
                //             reference={inputRef}
                //             label="Name" 
                //             onChange={(text: string) => {
                //                 dispatch(setUsernameAction(text))
                //             }}
                //             placeholder='Your name' 
                //             type='text'/>

                //     <Input value={formData.email || ''} 
                //             label="Email" 
                //             onChange={(text: string) => {
                //                 dispatch(setEmailAction(text))
                //             }}
                //             placeholder='Your email' 
                //             type='email'/>
                //     <Input value={formData.password || ''} 
                //             label="Password" 
                //             onChange={(text: string) => {
                //                 dispatch(setPasswordAction(text))
                //             }}
                //             placeholder='Your password' 
                //             type='password'/>
                //     <Input label="Confirm password" placeholder='Confirm password' type='text'/>
                // </>
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
            <Link to={submitLink}>
                <input type="button" onClick={() => dispatch(sendSignUpAsyncAction())} className={styles.primary_button} disabled={disabled} value={buttonName} />
            </Link>
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

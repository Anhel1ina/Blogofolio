import React, { useState } from 'react'
import styles from './input-styles.module.scss'
import { useSignUpState } from '../../../store/signUp/selector'
import { SignUpType } from '../../../store/signUp/types'
import { AuthState } from '../../../store/auth/types'
import { useAuthState } from '../../../store/auth/selectors'
import { ActivationStateType } from '../../../store/activation/types'

type Props = {
    label?: string
    placeholder?: string
    type?: string

    index?: number
    reference?: React.RefObject<HTMLInputElement> 
    isTextArea?: boolean

    value?: string
    errorType?: string
    errorsData?: SignUpType | AuthState | ActivationStateType
    onChange?: (text: string) => void
}

export const Input = (props: Props) => {
    const {label = 'Title', placeholder = 'Enter your text', type, index, 
    reference, isTextArea = false, value, onChange, errorType = 'username',
    errorsData} = props

    const [text, setText] = useState(value) 
    const getText = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
        onChange && onChange(e.currentTarget.value)
    }

    const formData = useSignUpState()
    const signInData = useAuthState()

    return (
        <>
        <div className={styles.box}>
            <p>{label}</p>
            {
                isTextArea ? (
                    <textarea placeholder={placeholder} onInput={getText} value={text} className={styles.textarea}></textarea>
                ) : (
                    <input onChange={getText} ref={index === 0 ? reference : null}  value={text} placeholder={placeholder} 
                    className={`${errorsData?.errors && (errorsData?.errors[errorType as keyof typeof errorsData.errors])  ? styles.error : null} ${styles.input}`} type={type}/>
                )
            }
        </div>
        </>
    )
}

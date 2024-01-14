import React, { useState } from 'react'
import styles from './input-styles.module.scss'
import { useSignUpState } from '../../../store/signUp/selector'
import { SignUpErrors } from '../../../store/signUp/types'

type Props = {
    label?: string
    placeholder?: string
    type?: string

    index?: number
    reference?: React.RefObject<HTMLInputElement> 
    isTextArea?: boolean

    value?: string
    errorType?: string
    onChange?: (text: string) => void
}

export const Input = (props: Props) => {
    const {label = 'Title', placeholder = 'Enter your text', type, index, reference, isTextArea = false, value, onChange, errorType = 'username'} = props

    const [text, setText] = useState(value) 
    const getText = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
        onChange && onChange(e.currentTarget.value)
    }

    const formData = useSignUpState()

    return (
        <>
        <div className={styles.box}>
            <p>{label}</p>
            {
                isTextArea ? (
                    <textarea placeholder={placeholder} onInput={getText} value={text} className={styles.textarea}></textarea>
                ) : (
                    <input onInput={getText} ref={index === 0 ? reference : null}  value={text} placeholder={placeholder} 
                    className={`${formData.errors && (formData.errors[errorType as keyof SignUpErrors])  ? styles.error : null} ${styles.input}`} type={type}/>
                )
            }
        </div>
        </>
    )
}

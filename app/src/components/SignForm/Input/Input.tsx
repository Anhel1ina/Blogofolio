import React, { useState } from 'react'
import styles from './input-styles.module.scss'

type Props = {
    label?: string
    placeholder?: string
    type: string

    index?: number
    reference?: React.RefObject<HTMLInputElement> 
}

export const Input = (props: Props) => {
    const {label = 'Title', placeholder = 'Enter your text', type, index, reference} = props

    const [text, setText] = useState('') 
    const getText = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <>
        <div className={styles.box}>
            <p>{label}</p>
            <input onInput={getText} ref={index === 0 ? reference : null}  value={text} placeholder={placeholder} className={styles.input} type={type}/>
        </div>
        </>
    )
}

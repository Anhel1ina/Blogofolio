import React, { useState } from 'react'
import styles from './input-styles.module.scss'

type Props = {
    label?: string
    placeholder?: string
}

export const Input = (props: Props) => {
    const {label = 'Title', placeholder = 'Enter your text'} = props

    const [text, setText] = useState('') 
    const getText = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <>
        <div className={styles.box}>
            <p>{label}</p>
            <input onInput={getText} value={text} placeholder={placeholder} className={styles.input} type="text" name="" id="" />
        </div>
        </>
    )
}

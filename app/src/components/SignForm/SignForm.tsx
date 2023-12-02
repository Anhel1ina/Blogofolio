import React from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { SignLogButton } from './SignLogButton/SignLogButton'

type InputType = {
    title: string
    text: string
}

export const SignForm = () => {
    const inputs: InputType[] = [
        {
            title: 'Name',
            text: 'Your name'
        },
        {
            title: 'Email',
            text: 'Your email'
        },
        {
            title: 'Password',
            text: 'Your password'
        },
        {
            title: 'Confirm passwod',
            text: 'Confirm password'
        }
    ]
    const titles = ['Name', 'Email', 'Password', 'Confirm password']
    const placeholders = ['Your name', 'Your email', 'Your password', 'Confirm password']
    return (
        <div className={styles.sign_form}>
            {
                inputs.map((item, i) => (
                    <Input key={i} label={item.title} placeholder={item.text}/>
                ))
            }
            <SignLogButton name='Sign In'/>
        </div>
    )
}

import React from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { SignLogButton } from './SignLogButton/SignLogButton'

type InputType = {
    title: string
    text: string
    type: string
}

export const SignForm = () => {
    const inputs: InputType[] = [
        {
            title: 'Name',
            text: 'Your name',
            type: 'text'
        },
        {
            title: 'Email',
            text: 'Your email',
            type: 'email'
        },
        {
            title: 'Password',
            text: 'Your password',
            type: 'password'
        },
        {
            title: 'Confirm passwod',
            text: 'Confirm password',
            type: 'password'
        }
    ]
    return (
        <div className={styles.sign_form}>
            {
                inputs.map((item, i) => (
                    <Input key={i} label={item.title} placeholder={item.text} type={item.type}/>
                ))
            }
            <SignLogButton name='Sign In'/>
            <div className={styles.sign_text}>
                <p>Already have an account? <a href="#">Sing In</a></p>
            </div>
        </div>
    )
}

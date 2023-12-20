import React, { useEffect } from 'react'
import styles from '../sign_in_page.module.scss'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { SignForm } from '../../components/SignForm/SignForm'

type InputType = {
    title: string
    text: string
    type: string
}

export const NewPasswordPage = () => {
    const inputs: InputType[] = [
        {
            title: 'Password',
            text: 'Your password',
            type: 'password'
        },
        {
            title: 'Confirm password',
            text: 'Confirm password',
            type: 'password'
        }
    ]

    useEffect(() => window.scrollTo(0, 0))

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="New password"/>
                <SignForm 
                    innerItems={inputs}
                    buttonName='Set password'
                    submitLink='/'
                />
            </div>
        </div>
    )
}

import React from 'react'
import styles from '../sign_in_page.module.scss'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { ConfirmationForm } from '../../components/ConfirmationForm/ConfirmationForm'
import { useEffect } from 'react'

export const RegistrationConfirmationPage = () => {
    const message: string[] = ['Please activate your account with the activation link in the email ', 'example@gmail.com.', 'Please, check your email']
    useEffect(() => window.scrollTo(0, 0))
    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Registration Confirmation"/>
                <ConfirmationForm msg={message}/>
            </div>
        </div>
    )
}

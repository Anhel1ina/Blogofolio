import React from 'react'
import styles from '../sign_in_page.module.scss'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { ConfirmationForm } from '../../components/ConfirmationForm/ConfirmationForm'
import { useEffect } from 'react'
import { useSignUpState } from '../../store/signUp/selector'

export const RegistrationConfirmationPage = () => {
    const formData = useSignUpState()
    const message: string[] = ['Please activate your account with the activation link in the email ', `${formData.email}`, 'Please, check your email']
    useEffect(() => window.scrollTo(0, 0))
    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Registration Confirmation"/>
                <ConfirmationForm buttonName='Go to activation' submitLink='/auth/activate' msg={message}/>
            </div>
        </div>
    )
}

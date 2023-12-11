import React from 'react'
import styles from '../sign_in_page.module.scss'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { ConfirmationForm } from '../../components/ConfirmationForm/ConfirmationForm'

export const SuccessPage = () => {
    const message: string[] = ['Email confiremed.', 'Your registration is now completed']
    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Success"/>
                <ConfirmationForm msg={message}/>
            </div>
        </div>
    )
}

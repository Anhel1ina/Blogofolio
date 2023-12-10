import React from 'react'
import styles from '../SignInPage/sign_in_page.module.scss'
import { PageHeader } from '../../components/PageHeader/PageHeader'

export const SearchResultsPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sign_page}>
                <PageHeader title="Search results"/>
            </div>
        </div>
    )
}

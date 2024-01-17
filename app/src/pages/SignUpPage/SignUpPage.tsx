import styles from '../sign_in_page.module.scss'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { SignForm } from '../../components/SignForm/SignForm'
import { useEffect } from 'react'
import { SignUpForm } from '../../components/SignForm/SignUpForm'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { setEmailAction, setPasswordAction, setUsernameAction } from '../../store/signUp/action'

type InputType = {
    title: string
    text: string
    type: string
}

export const SignUpPage = () => {
    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Sign Up"/>
                <SignUpForm 
                    underTitle='Already have an account?'
                    underLink='Sign In'
                    linkTo='signin'
                    submitLink='signup/success'
                    buttonName='Sign Up'/>
            </div>
        </div>
    )
}

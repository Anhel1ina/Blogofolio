import styles from '../sign_in_page.module.scss'
import { SignForm } from '../../components/SignForm/SignForm'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { useEffect } from 'react'
import { SignInForm } from '../../components/SignForm/SignInForm'

type InputType = {
    title: string
    text: string
    type: string
}

export const SignInPage = () => {
    const inputs: InputType[] = [
        {
            title: 'Email',
            text: 'Your email',
            type: 'email'
        },
        {
            title: 'Password',
            text: 'Your password',
            type: 'password'
        }
    ]

    useEffect(() => window.scrollTo(0, 0))

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Sign In"/>
                {/* <SignForm 
                    innerItems={inputs}
                    underTitle="Don't have an account?"
                    underLink='Sign Up'
                    linkTo='/auth'
                    submitLink='registrationconfirm'
                    buttonName='Sign In'
                    forgetLink='forgotpassword'
                /> */}
                <SignInForm
                    underTitle="Don't have an account?"
                    underLink='Sign Up'
                    linkTo='/auth'
                    submitLink='registrationconfirm'
                    buttonName='Sign In'
                    forgetLink='forgotpassword'
                />
            </div>
        </div>
    )
}


//BEARER token
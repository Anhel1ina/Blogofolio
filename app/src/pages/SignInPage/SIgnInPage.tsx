import styles from '../sign_in_page.module.scss'
import { SignForm } from '../../components/SignForm/SignForm'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { useEffect } from 'react'
import { SignInForm } from '../../components/SignForm/SignInForm'
import { Alert } from '../../components/Alert/Alert'
import { useAuthState } from '../../store/auth/selectors'
import { keyboard } from '@testing-library/user-event/dist/keyboard'
import { setAuthAlert } from '../../store/auth/actions'
import { useDispatch } from 'react-redux'

type InputType = {
    title: string
    text: string
    type: string
}

export const SignInPage = () => {
    useEffect(() => window.scrollTo(0, 0))
    const dispatch = useDispatch()
    const closePage = () => dispatch(setAuthAlert(false))
    const signInData = useAuthState()

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
                {
                    signInData.showAuthError ? (
                        <Alert closeAlert={closePage} errorText={JSON.stringify(signInData.errors).slice(11, -2)}/>
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    )
}


//BEARER token
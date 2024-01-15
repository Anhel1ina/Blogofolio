import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../../components/SignForm/sign_form.module.scss'
import wrapStyles from '../sign_in_page.module.scss'
import { Input } from '../../components/SignForm/Input/Input'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { useSignUpState } from '../../store/signUp/selector'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useActivationState } from '../../store/activation/selector'
import { activateAsyncAction, setActivationAlert, setTokenAction, setUidAction } from '../../store/activation/action'
import { Alert } from '../../components/Alert/Alert'

export const ActivationPage = () => {
    const activationData = useActivationState()
    const userData = useSignUpState()

    const activate = () => dispatch(activateAsyncAction())
    const closePage = () => dispatch(setActivationAlert(false))
    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>()

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    if(activationData.isActivated){
        navigate('/auth/success')
    }

    return (
        <div className={wrapStyles.wrapper}>
            <div className={wrapStyles.page}>
                <PageHeader title="Activation"/>
                <form className={styles.sign_form}>
                {
                <>
                {
                    activationData.isActivated === false && JSON.stringify(activationData.errors)
                }
                    <Input reference={inputRef} 
                        value={activationData.uid || ''}
                        placeholder='Enter UID'
                        type='text'
                        label='UID'
                        errorType='uid'
                        errorsData={activationData}
                        onChange={(text: string) => {
                            dispatch(setUidAction(text))
                        }}
                    />
                    {activationData.isActivated === false && activationData.errors?.uid && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(activationData.errors.uid).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                    <Input value={activationData.token || ''}
                        placeholder='Enter token'
                        type='text'
                        label='Token'
                        errorType='token'
                        errorsData={activationData}
                        onChange={(text: string) => {
                            dispatch(setTokenAction(text))
                        }}
                    />      
                    {activationData.isActivated === false && activationData.errors?.token && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(activationData.errors.token).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                            
                    {/* <Link to={submitLink}> */}
                        <input type="button" onClick={() => activate()} className={styles.primary_button} value='Activate user' />
                    {/* </Link> */}
                    </>
                }
                </form>
                {
                    activationData.showActivationAlert ? (
                        <Alert closeAlert={closePage} errorText={JSON.stringify(activationData.errors).slice(11, -2)}/>
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    )
}


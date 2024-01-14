import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../../components/SignForm/sign_form.module.scss'
import wrapStyles from '../sign_in_page.module.scss'
import inputStyles from '../../components/SignForm/Input/input-styles.module.scss'
import { Input } from '../../components/SignForm/Input/Input'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { useSignUpState } from '../../store/signUp/selector'
import { useDispatch } from 'react-redux'
import { loginAction, signInAction } from '../../store/auth/actions'
import { AppDispatch } from '../../store/store'

export const ActivationPage = () => {
    const [uid, setUid] = useState('')
    const [token, setToken] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const changeUid = (e: React.FormEvent<HTMLInputElement>) => {
        setUid(e.currentTarget.value.toString())
    }

    const changeToken = (e: React.FormEvent<HTMLInputElement>) => {
        setToken(e.currentTarget.value.toString())
    }

    const userData = useSignUpState()

    const login = () => dispatch(loginAction(userData.username!))
    const autoSignIn = () => dispatch(signInAction(userData.email!, userData.password!))

    const  activate = () => {
        const request = new Request(
            'https://studapi.teachmeskills.by/auth/users/activation/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    uid: uid,
                    token: token
                })
            }
        )

        fetch(request)
            .then(res => {
                alert(res.ok ? 'activate' : 'errors')// change to component
                navigate('/auth/success')
                login()
            })
        
        autoSignIn()
    
    }

    return (
        <div className={wrapStyles.wrapper}>
            <div className={wrapStyles.page}>
                <PageHeader title="Activation"/>
                <form className={styles.sign_form}>
                {
                <>
                    <div className={inputStyles.box}>
                        <p>UID</p>
                        <input onInput={changeUid} ref={inputRef}  value={uid || ''} placeholder='Enter UID' className={`${inputStyles.input}`} type='text'/>
                    </div>
                    {/* {formData.isSignUpSuccess === false && formData.errors?.username && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(formData.errors.username).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )} */}
                    <div className={inputStyles.box}>
                        <p>Token</p>
                        <input onInput={changeToken} value={token || ''} placeholder='Enter token' className={`${inputStyles.input}`} type='text'/>
                    </div>        
                    {/* {formData.isSignUpSuccess === false && formData.errors?.email && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(formData.errors.email).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )} */}
                            
                    {/* <Link to={submitLink}> */}
                        <input type="button" onClick={activate} 
                            className={styles.primary_button} value='Activate user' />
                    {/* </Link> */}
                    </>
                }
                </form>
            </div>
        </div>
    )
}


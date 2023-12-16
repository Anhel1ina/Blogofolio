import React from 'react'
import styles from '../SignForm/sign_form.module.scss'
import confStyles from './confirm_form.module.scss'
import { Link } from 'react-router-dom'

type MsgType = string
type Props = {
    msg: MsgType[]
    submitLink?: string
    disabled?: boolean
    buttonName?: string
}

export const ConfirmationForm = ({msg, submitLink='/', disabled=false, buttonName='Go to home'}: Props) => {
    return (
        <form className={`${styles.sign_form} ${confStyles.confirm_form}`}>
            {msg.map((message, i) => (
                message.includes('@') ? (
                    null
                ) : (
                    <p key={i}>
                        {msg[i + 1] && msg[i + 1].includes('@') ? (
                            <>
                                {message}
                                <span key={i + 1}>{msg[i + 1]}</span>
                            </>
                        ) : (
                            message
                        )}
                    </p>
                )
                
            ))}
            <Link to={submitLink}>
                <input type="submit" className={styles.primary_button} disabled={disabled} value={buttonName} />
            </Link>
        </form>
    )
}

                // msg.map((message, i) => {
                //     if (message.includes('@')) {
                //         const msgPrev = msg[i - 1]
                //         console.log(msgPrev)
                //         return (
                //             <p key={i - 1}>
                //                 {msgPrev}
                //                 <span key={i}>{message}</span>
                //             </p>
                //         )
                //     } else {
                //         return <p key={i}>{message}</p>
                //     }
                // })

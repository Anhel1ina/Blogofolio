import React from 'react'
import styles from '../SignForm/sign_form.module.scss'
import confStyles from './confirm_form.module.scss'
import { SignLogButton } from '../SignForm/SignLogButton/SignLogButton'
import { spawn } from 'child_process'

type MsgType = string
type Props = {
    msg: MsgType[]
}

export const ConfirmationForm = ({msg}: Props) => {
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
            <SignLogButton name='Go to home'/>
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

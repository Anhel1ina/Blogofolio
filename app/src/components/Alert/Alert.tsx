import { useState } from 'react'
import { AlertIcon } from './AlertIcon'
import styles from './alert.module.scss'

type Props = {
    showed?: boolean
}

export const Alert = (props: Props) => {
    const {showed = true} = props
    return (
        <div className={`${styles.alert} ${showed ? styles.showed : ''}`}>
            <div className={styles.alert_message}>
                <AlertIcon/>
                <p>Lorem Ipsum</p>
            </div>
            <div>
                <button>
                    x
                </button>
            </div>
        </div>
    )
}

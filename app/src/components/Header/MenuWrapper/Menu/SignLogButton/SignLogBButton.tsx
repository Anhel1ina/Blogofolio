import React from 'react'
import styles from './sign_log_button.module.scss'

type Props = {
    title: string
}

export const SignLogBButton = (props: Props) => {
    const {title} = props
    return (
        <button className={styles.sign_log_button}>
            {title}
        </button>
    )
}

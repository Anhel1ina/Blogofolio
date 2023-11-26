import React from 'react'
import styles from './theme.module.scss'

type Props = {
    mode: React.ReactNode
    chosen: boolean
}

export const ThemeButton = (props: Props) => {
    const {mode, chosen} = props
    return (
        <button className={`${styles.mode_button} ${chosen ? '' : styles.non_chosen}`} >
            {mode}
        </button>
    )
}

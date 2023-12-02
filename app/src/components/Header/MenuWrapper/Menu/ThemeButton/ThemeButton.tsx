import React, { useState } from 'react'
import styles from './theme.module.scss'
import { DayMode } from '../DayMode/DayMode'
import { NightMode } from '../NightMode/NightMode'


//onClick={() => changeTheme('dark)} - add function to button
//disabled={theme === 'light}
//добавить props

type Props = {
    theme: string
    changeTheme: (theme: string) => void
}

export const ThemeButton = ({theme, changeTheme}: Props) => {
    return (
        <div>
            <button onClick={() => changeTheme('light')} disabled={theme === 'light'} className={styles.mode_button}>
                <DayMode disabled={theme !== 'light'}/>
            </button>
            <button onClick={() => changeTheme('dark')} disabled={theme !== 'light'} className={styles.mode_button}>
                <NightMode disabled={theme === 'light'}/>
            </button>
        </div>
    )
}

import React, { useState } from 'react'
import styles from './theme.module.scss'
import { DayMode } from '../DayMode/DayMode'
import { NightMode } from '../NightMode/NightMode'

import { useThemeContext } from '../../../../../helpers/ThemeContext'


export const ThemeButton = () => {

    const themeState = useThemeContext()
    return (
        <div>
            <button 
                onClick={() => themeState.setState('light')} 
                disabled={themeState.state === 'light'}
                className={styles.mode_button}
            >
                <DayMode disabled={themeState.state !== 'light'}/>
            </button>
            <button 
                onClick={() => themeState.setState('dark')} 
                disabled={themeState.state !== 'light'}
                className={styles.mode_button}
            >
                <NightMode disabled={themeState.state === 'light'}/>
            </button>
        </div>
    )
}

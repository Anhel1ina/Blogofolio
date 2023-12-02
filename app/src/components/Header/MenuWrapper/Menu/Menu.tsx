import { useState } from 'react'
import { SignLogBButton } from './SignLogButton/SignLogBButton'
import { ThemeButton } from './ThemeButton/ThemeButton'
import styles from './menu.module.scss'
import { DayMode } from './DayMode/DayMode'
import { NightMode } from './NightMode/NightMode'

type Props = {
    open: boolean
    theme: string
    changeTheme: (theme: string) => void
}

const data = ["Home"]

export const Menu = (props: Props) => {
    const {open, theme, changeTheme} = props
    if(!open){
        return null
    }

    //${theme === 'light' ? styles.day_mode : styles.night_mode}
    return (
        <div className={`${styles.menu}`}>
            <div className={styles.user_style}>
                {/* <User name='Artem Malkin' abbr='AM'/> */}
                <ul>
                {
                    data.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
                </ul>
            </div>
            <div>
                <ThemeButton theme={theme} changeTheme={changeTheme}/>
                {/* <DayMode chosen={false}/>
                <NightMode chosen={true}/> */}
                {/* <ThemeButton mode={<DayThemeIcon/>} chosen={false}/> */}
                {/* <ThemeButton mode={<NightThemeIcon/>} chosen={true}/> */}
            </div>
        </div>
    )
}

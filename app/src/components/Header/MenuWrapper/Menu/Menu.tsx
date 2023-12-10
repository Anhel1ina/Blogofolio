import { useState } from 'react'
import { SignLogBButton } from './SignLogButton/SignLogBButton'
import { ThemeButton } from './ThemeButton/ThemeButton'
import styles from './menu.module.scss'
import { DayMode } from './DayMode/DayMode'
import { NightMode } from './NightMode/NightMode'
import { useBurgerContext } from '../../../../helpers/BurgerContext'


const data = ["Home"]

export const Menu = () => {
    const {state} = useBurgerContext()
    if(!state.isOpened){
        return null
    }
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
                <ThemeButton/>
            </div>
        </div>
    )
}

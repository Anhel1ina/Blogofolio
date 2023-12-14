import { useState } from 'react'
import { SignLogBButton } from './SignLogButton/SignLogBButton'
import { ThemeButton } from './ThemeButton/ThemeButton'
import styles from './menu.module.scss'
import { DayMode } from './DayMode/DayMode'
import { NightMode } from './NightMode/NightMode'
import { useBurgerContext } from '../../../../helpers/BurgerContext'
import { MenuButton } from '../../../MenuButton/MenuButton'
import { NavLink } from 'react-router-dom'
import { RequireAuth } from '../../../../helpers/RequireAuth'

import { User } from '../../User/User'

const data = ["Home"]

export const Menu = () => {
    const {state} = useBurgerContext()
    if(!state.isOpened){
        return null
    }
    return (
        <div className={`${styles.menu}`}>
            <div className={styles.user_style}>
                <ul>
                {
                    <>
                        <RequireAuth>
                            <User name='Artem Malkin' abbr='AM'/> 
                        </RequireAuth>
                        <NavLink to='/'>
                            <li>Home</li>
                        </NavLink>
                        <RequireAuth>
                            <NavLink to='addpost'>
                                <li>Add post</li>
                            </NavLink>
                        </RequireAuth>
                    </>
                }
                </ul>
            </div>
            <div>
                <ThemeButton/>
                <MenuButton title='Sign In'/>
            </div>
        </div>
    )
}

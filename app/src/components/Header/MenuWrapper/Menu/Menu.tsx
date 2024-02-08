import { ThemeButton } from './ThemeButton/ThemeButton'
import styles from './menu.module.scss'
import { MenuButton } from '../../../MenuButton/MenuButton'
import { NavLink } from 'react-router-dom'
import { RequireAuth } from '../../../../helpers/RequireAuth'

import { User } from '../../User/User'

import { useSelector } from 'react-redux'
import { setMenu } from '../../../../store/burgerMenu/selectors'
import { useAuthState } from '../../../../store/auth/selectors'
import { useDispatch } from 'react-redux'

import { setCloseAction, setHideAction } from '../../../../store/burgerMenu/action'
import { logoutAction } from '../../../../store/auth/actions'
import { useResetPasswordState } from '../../../../store/reset_passwd/selector'
import React, { useEffect, useRef, useState } from 'react'


export const Menu = () => {
    const {isOpened, isHide} = useSelector(setMenu)
    const signInData = useAuthState()
    const resetData = useResetPasswordState()

    const dispatch = useDispatch()
    const setCloseMenu = () => {
        dispatch(setHideAction())
            setTimeout(() => {
                dispatch(setCloseAction())
            }, 700)
    } 
    const [hide, setHide] = useState<boolean>(false)

    const logout = () => {
        dispatch(logoutAction())
        dispatch({
            type: 'RESET_DATA'
        })
    }

    const menuRef = useRef<HTMLDivElement>(null)

    const handleClickInsideMenu = (e: MouseEvent) => {
        const isBurgerOpen = (e.target as HTMLElement).id === 'burger_open'
        const isBurgerClosed = (e.target as HTMLElement).id === 'burger_closed'

        if (isOpened && menuRef.current && !menuRef.current.contains(e.target as HTMLElement) && !isBurgerOpen && !isBurgerClosed) {
            setCloseMenu()
        }
    }

    useEffect(() => {
        if(isOpened){
            setTimeout(() => {
                document.addEventListener('click', handleClickInsideMenu)
            }, 700);
        }
        else {
            setHide(false)
            dispatch(setCloseAction())
        }
    }, [isOpened])


    if(!isOpened){
        return null
    }
    return (
        <div id='menu' className={`${styles.menu} ${isHide ? styles.set_close : null}`} ref={menuRef}>
            <div className={styles.user_style}>
                <ul>
                {
                    <>
                        <RequireAuth>
                            <User name={signInData.userName} abbr={signInData.initials}/> 
                        </RequireAuth>
                        <NavLink to='/' onClick={setCloseMenu}>
                            <li>Home</li>
                        </NavLink>
                        <RequireAuth>
                            <NavLink to='addpost' onClick={setCloseMenu}>
                                <li>Add post</li>
                            </NavLink>
                        </RequireAuth>
                    </>
                }
                </ul>
            </div>
            <div>
                <ThemeButton/>
                {
                    signInData.isLoged ? (
                        <RequireAuth>
                            <MenuButton toLog={logout} forMenuClosed={setCloseMenu} title='Log out'/>
                        </RequireAuth>
                    ) : (
                        <MenuButton linkTo='auth/signin' forMenuClosed={setCloseMenu} title='Sign In'/>
                    )
                }
            </div>
        </div>
    )
}

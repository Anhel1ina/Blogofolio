import { ThemeButton } from './ThemeButton/ThemeButton'
import styles from './menu.module.scss'
import { MenuButton } from '../../../MenuButton/MenuButton'
import { NavLink } from 'react-router-dom'
import { RequireAuth } from '../../../../helpers/RequireAuth'

import { User } from '../../User/User'

import { useSelector } from 'react-redux'
import { setMenu } from '../../../../store/burgerMenu/selectors'
import { checkAuth } from '../../../../store/auth/selectors'
import { useDispatch } from 'react-redux'

import { setOpenAction, setCloseAction } from '../../../../store/burgerMenu/action'


export const Menu = () => {
    const {isOpened} = useSelector(setMenu)

    const dispatch = useDispatch()
    const setOpenMenu = () => dispatch(setOpenAction())
    const setCloseMenu = () => dispatch(setCloseAction())

    const {isLoged} = useSelector(checkAuth)
    if(!isOpened){
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
                        <NavLink to='/' onClick={() => setTimeout(setCloseMenu, 100)}>
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
                {
                    isLoged ? (
                        <RequireAuth>
                            <MenuButton forMenuClosed={() => setTimeout(setCloseMenu, 100)} title='Log out'/>
                        </RequireAuth>
                    ) : (
                        <MenuButton forMenuClosed={() => setTimeout(setCloseMenu, 100)} title='Sign In'/>
                    )
                }
            </div>
        </div>
    )
}

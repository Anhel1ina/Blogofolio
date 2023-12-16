import { ThemeButton } from './ThemeButton/ThemeButton'
import styles from './menu.module.scss'
import { MenuButton } from '../../../MenuButton/MenuButton'
import { NavLink } from 'react-router-dom'
import { RequireAuth } from '../../../../helpers/RequireAuth'

import { User } from '../../User/User'

import { useSelector } from 'react-redux'
import { setMenu } from '../../../../store/burgerMenu/selectors'
import { checkAuth } from '../../../../store/auth/selectors'


export const Menu = () => {
    const {isOpened} = useSelector(setMenu)
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
                {
                    isLoged ? (
                        <RequireAuth>
                            <MenuButton title='Log out'/>
                        </RequireAuth>
                    ) : (
                        <MenuButton title='Sign In'/>
                    )
                }
            </div>
        </div>
    )
}

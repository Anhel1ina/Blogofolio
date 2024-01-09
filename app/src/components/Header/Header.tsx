import { Wrapper } from './MenuWrapper/Wrapper'
import { Search } from './Search/Search'
import styles from './header.module.scss'
import { HeaderInput } from './HeaderInput/HeaderInput'
import { NonAutorized } from './User/NonAutorized/NonAutorized'

import { User } from './User/User'
import { useSelector } from 'react-redux'
import { checkAuth } from '../../store/auth/selectors'

export const Header = () => {
    const {userName, initials, isLoged} = useSelector(checkAuth)
    return (
        <div className={styles.header}>
            <Wrapper/>
            <HeaderInput/>
            {/* <Search/> */}
            {
                isLoged ? (
                    <User name={userName} abbr={initials}/>
                ) : (
                    <NonAutorized/>
                )
            }
        </div>
    )
}

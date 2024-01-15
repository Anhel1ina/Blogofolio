import { Wrapper } from './MenuWrapper/Wrapper'
import { Search } from './Search/Search'
import styles from './header.module.scss'
import { HeaderInput } from './HeaderInput/HeaderInput'
import { NonAutorized } from './User/NonAutorized/NonAutorized'

import { User } from './User/User'
import { useAuthState } from '../../store/auth/selectors'

export const Header = () => {
    const signInData = useAuthState()

    return (
        <div className={styles.header}>
            <Wrapper/>
            <HeaderInput/>
            <Search/>
            {
                signInData.isLoged ? (
                    <User name={signInData.userName} abbr={signInData.initials}/>
                ) : (
                    <NonAutorized/>
                )
            }
        </div>
    )
}

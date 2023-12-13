import { Wrapper } from './MenuWrapper/Wrapper'
import { Search } from './Search/Search'
import styles from './header.module.scss'
import { HeaderInput } from './HeaderInput/HeaderInput'
import { NonAutorized } from './User/NonAutorized/NonAutorized'
import { useAuthContext } from '../../helpers/AuthContext'

import { User } from './User/User'

export const Header = () => {
    const {state} = useAuthContext()
    return (
        <div className={styles.header}>
            <Wrapper/>
            <HeaderInput/>
            <Search/>
            {
                state.isLoged ? (
                    <User name={state.userName} abbr={state.initials}/>
                ) : (
                    <NonAutorized/>
                )
            }
        </div>
    )
}

import { Wrapper } from './MenuWrapper/Wrapper'
import { Search } from './Search/Search'
import styles from './header.module.scss'
import { HeaderInput } from './HeaderInput/HeaderInput'
import { NonAutorized } from './User/NonAutorized/NonAutorized'

import { User } from './User/User'
import { useAuthState } from '../../store/auth/selectors'
import { ProfileInfo } from '../ProfileInfo/ProfileInfo'
import { useState } from 'react'

export const Header = () => {
    const signInData = useAuthState()
    const [profileState, setProfileState] = useState<boolean>(false)

    const open = () => setProfileState(true)
    const close = () => setProfileState(false)

    return (
        <div className={styles.header}>
            <Wrapper/>
            <HeaderInput/>
            <Search/>
            {
                signInData.isLoged ? (
                    <User onClick={open} name={signInData.userName} abbr={signInData.initials}/>
                ) : (
                    <NonAutorized/>
                )
            }
            {
                profileState ? (
                    <ProfileInfo onClick={close}/>
                ) : ( null )
            }
        </div>
    )
}

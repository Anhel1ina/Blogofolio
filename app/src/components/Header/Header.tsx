import { Wrapper } from './MenuWrapper/Wrapper'
import { Search } from './Search/Search'
import styles from './header.module.scss'
import { HeaderInput } from './HeaderInput/HeaderInput'
import { NonAutorized } from './User/NonAutorized/NonAutorized'

type Props = {
    theme: string
    changeTheme: (theme: string) => void
}

export const Header = ({theme, changeTheme}: Props) => {
    return (
        <div className={styles.header}>
            <Wrapper theme={theme} changeTheme={changeTheme}/>
            <HeaderInput/>
            <Search/>
            {/* <User name='Artem Malkin' abbr='AM'/> */}
            <NonAutorized/>
        </div>
    )
}

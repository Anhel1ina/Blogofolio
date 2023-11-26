import { Wrapper } from './MenuWrapper/Wrapper'
import { Search } from './Search/Search'
import styles from './header.module.scss'
import { HeaderInput } from './HeaderInput/HeaderInput'
import { NonAutorized } from './User/NonAutorized/NonAutorized'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Wrapper/>
            <HeaderInput/>
            <Search/>
            {/* <User name='Artem Malkin' abbr='AM'/> */}
            <NonAutorized/>
        </div>
    )
}

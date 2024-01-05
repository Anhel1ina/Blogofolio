import { Link } from 'react-router-dom'
import styles from './menu_button.module.scss'

type Props = {
    title: string
    forMenuClosed?: () => void
    linkTo?: string
    toLog?: () => void
}

export const MenuButton = ({title, forMenuClosed, linkTo, toLog}: Props) => {
    return (
        <Link to={linkTo!} onClick={forMenuClosed}>
            <button onClick={toLog} className={styles.menu_button}>
                {title}
            </button>
        </Link>
        
    )
}

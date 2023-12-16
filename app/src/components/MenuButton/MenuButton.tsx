import { Link } from 'react-router-dom'
import styles from './menu_button.module.scss'

type Props = {
    title: string
    forMenuClosed: () => void
}

export const MenuButton = ({title, forMenuClosed}: Props) => {
    return (
        <Link to='/signin' onClick={forMenuClosed}>
            <button className={styles.menu_button}>
                {title}
            </button>
        </Link>
        
    )
}

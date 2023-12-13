import { Link } from 'react-router-dom'
import styles from './menu_button.module.scss'

type Props = {
    title: string
}

export const MenuButton = ({title}: Props) => {
    return (
        <Link to='/signin'>
            <button className={styles.menu_button}>
                {title}
            </button>
        </Link>
        
    )
}

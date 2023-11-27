import { MoreIcon } from './MoreIcon'
import styles from './more.module.scss'

export const More = () => {
    return (
        <button className={styles.more}>
            <MoreIcon/>
        </button>
    )
}

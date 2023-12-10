import styles from './like-styles.module.scss';
import { ThumbsUpIcon } from './ThumbsUpIcon'

export const LikeFullButton = () => {
    return (
        <button className={styles.like_button}>
            <ThumbsUpIcon/>
        </button>
    )
}

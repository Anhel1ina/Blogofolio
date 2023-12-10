import styles from '../LikeFullButton/like-styles.module.scss'
import { ThumbsDownIcon } from './ThumbsDownIcon';


export const DislikeFullButton = () => {
    return (
        <button className={styles.dislike_button}>
            <ThumbsDownIcon/>
        </button>
    )
}

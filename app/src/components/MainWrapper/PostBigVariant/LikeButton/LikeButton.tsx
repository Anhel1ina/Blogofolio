import { ThumbsUpIcon } from './ThumbsUpIcon';
import styles from './like-styles.module.scss';

type Props = {
    setMark: boolean
    isLiked: boolean
    isDisliked: boolean,
    like: () => void
    undo: () => void
}

export const LikeButton = ({setMark, isLiked, isDisliked, like, undo}: Props) => {
    return (
        <div className={styles.button_block}>
            <button onClick={setMark && isLiked ? undo : like} className={`${styles.like_button} ${styles.like_change} ${isLiked ? styles.set_liked_post : ''} ${isDisliked ? styles.shadow_button : ''}`}>
                <ThumbsUpIcon/>
            </button>
            <p>{isLiked ? 21 : 20}</p>
        </div>
    )
}

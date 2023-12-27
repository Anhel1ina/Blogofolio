import styles from '../LikeButton/like-styles.module.scss'
import { DislikeButtonIcon } from './DislikeButtonIcon'


type Props = {
    setMark: boolean
    isLiked: boolean
    isDisliked: boolean,
    dislike: () => void
    undo: () => void
}

export const DislikeButton = ({setMark, isLiked, isDisliked, dislike, undo}: Props) => {
    return (
        <div className={styles.button_block}>
            <button onClick={setMark && isDisliked  ? undo : dislike} className={`${styles.dislike_button} ${styles.dis_change} ${isDisliked ? styles.set_disliked_post : ''} ${isLiked ? styles.shadow_button : ''}`}>
                <DislikeButtonIcon/>
            </button>
            <p>{isDisliked ? 1 : ''}</p>
        </div>
    )
}

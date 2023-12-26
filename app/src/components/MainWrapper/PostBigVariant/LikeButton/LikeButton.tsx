import { useSelector, useDispatch } from 'react-redux';
import { ThumbsUpIcon } from './ThumbsUpIcon';
import styles from './like-styles.module.scss';
import { setLike } from '../../../../store/likes/selector';
import { SetLikeAction, UndoAction } from '../../../../store/likes/action';

type Props = {
    setMark: boolean
    isLiked: boolean
    isDisliked: boolean,
    like: () => void
    undo: () => void
}

export const LikeButton = ({setMark, isLiked, isDisliked, like, undo}: Props) => {
    // const {isLiked, isDisliked, setMark} = useSelector(setLike)
    // const dispatch = useDispatch()

    // const like = () =>  dispatch(SetLikeAction())
    // const undo = () => dispatch(UndoAction())
    return (
        <div className={styles.button_block}>
            <button onClick={setMark && isLiked ? undo : like} className={`${styles.like_button} ${styles.like_change} ${isLiked ? styles.set_liked_post : ''} ${isDisliked ? styles.shadow_button : ''}`}>
                <ThumbsUpIcon/>
            </button>
            <p>{isLiked ? 21 : 20}</p>
        </div>
    )
}

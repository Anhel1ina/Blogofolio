import { useState } from 'react'
import styles from '../LikeButton/like-styles.module.scss'
import { DislikeButtonIcon } from './DislikeButtonIcon'

type Props = {
    disabled?: boolean
}

export const DislikeButton = (props: Props) => {
    const {disabled = false} = props
    let [dislike, setDisike] = useState<number>(0)
    let [dislikedFlag, setDislikedFlag] = useState<boolean>(false)
    
    const dislikedPost = () => {
        return dislikedFlag ? (
            setDisike(dislike - 1),
            setDislikedFlag(!dislikedFlag)
        ) : (
            setDisike(dislike + 1),
            setDislikedFlag(!dislikedFlag)
        )
    }
    return (
        <div className={styles.button_block}>
            <button onClick={dislikedPost} className={`${styles.dislike_button} ${styles.dis_change} ${dislikedFlag ? styles.set_disliked_post : ''}`} disabled={disabled}>
                <DislikeButtonIcon/>
            </button>
            <p>{dislike ? dislike : ''}</p>
        </div>
    )
}

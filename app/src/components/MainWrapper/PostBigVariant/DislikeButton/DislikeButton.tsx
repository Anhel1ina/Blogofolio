import React from 'react'
import styles from '../LikeButton/like-styles.module.scss'
import { DislikeButtonIcon } from './DislikeButtonIcon'

export const DislikeButton = () => {
    return (
        <div>
            <button className={styles.dislike_button}>
                <DislikeButtonIcon/>
            </button>
            <p>0</p>
        </div>
    )
}

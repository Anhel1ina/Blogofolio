import React from 'react'
import { LikeButton } from '../LikeButton/LikeButton'
import { DislikeButton } from '../DislikeButton/DislikeButton'

export const LikeDisButtonsWrapper = () => {
    return (
        <div style={{display: 'flex'}}>
            <LikeButton/>
            <DislikeButton/>
        </div>
    )
}

import React from 'react'
import { LikeButton } from '../LikeButton/LikeButton'
import { DislikeButton } from '../DislikeButton/DislikeButton'
import { useSelector, useDispatch } from 'react-redux'
import { setLike } from '../../../../store/likes/selector'
import { SetLikeAction, SetDislikeAction, UndoAction } from '../../../../store/likes/action'

export const LikeDisButtonsWrapper = () => {
    const {isLiked, isDisliked, setMark} = useSelector(setLike)
    const dispatch = useDispatch()

    const like = () =>  dispatch(SetLikeAction())
    const undo = () => dispatch(UndoAction())
    const dislike = () =>  dispatch(SetDislikeAction())
    return (
        <div style={{display: 'flex'}}>
            <LikeButton isLiked={isLiked} isDisliked={isDisliked} setMark={setMark} like={like} undo={undo}/>
            <DislikeButton isLiked={isLiked} isDisliked={isDisliked} setMark={setMark} dislike={dislike} undo={undo}/>
        </div>
    )
}

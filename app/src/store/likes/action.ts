import { LikeAction } from "./types";

export const SetLikeAction = (): LikeAction => ({
    type: 'SET_LIKE_MARK',
})

export const SetDislikeAction = (): LikeAction => ({
    type: 'SET_DISLIKE_MARK',
})

export const UndoAction = (): LikeAction => ({
    type: 'UNDO_MARKS',
})
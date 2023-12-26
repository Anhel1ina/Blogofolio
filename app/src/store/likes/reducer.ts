import { LikeAction, LikedState } from "./types";

export const LikeInitState: LikedState = {
    isLiked: false,
    isDisliked: false,
    setMark: false
}

export const likeReducer = (state = LikeInitState, action: LikeAction): LikedState => {
    switch(action.type){
        case 'SET_LIKE_MARK':
            return{
                isLiked: true,
                isDisliked: false,
                setMark: true
            }
        case 'SET_DISLIKE_MARK':
            return{
                isLiked: false,
                isDisliked: true,
                setMark: true
            }
        case 'UNDO_MARKS':
            return{
                isLiked: false,
                isDisliked: false,
                setMark: false
            }
        default: return state
    }
} 


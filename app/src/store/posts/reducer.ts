import { PostState, PostAction } from "./types"


export const PostInitState: PostState = {
    amountPosts: [],
    page: 1,
    limit: 11

}

export const postReducer = (state = PostInitState, action: PostAction): PostState => {
    // debugger
    switch(action.type){
        case 'LOAD_POSTS':
            return {
                ...state,
                amountPosts: action.amountPosts!,
                page: action.page!
            }
        case 'OPEN_POST':
            return{
                ...state,
                amountPosts: action.amountPosts!
            }
        default: return state
    }
}
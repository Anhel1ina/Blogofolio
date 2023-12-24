import { PostAction } from "./types"
import { Posts } from "../../components/MainWrapper/Tabs/TabContent/TabContent"
import { AppThunk } from "../store"
import { getPageData } from "../../helpers/getPageData"
import { url } from "inspector"

export const LoadPostAction = (posts: Posts[], page?: number): PostAction => ({
    type: 'LOAD_POSTS',
    amountPosts: posts,
    // limit: limit,
    page: page
})


///async action

export const LoadPostAsyncAction = (page: number = 1) : AppThunk => {      
    const {limit} = getPageData(page)
    const url = new URL('https://65670f6864fcff8d730fa806.mockapi.io/posts')
    const url2 = url
    url2.searchParams.append('page', `${page}`);
    url2.searchParams.append('limit', `${limit}`);
    return (dispatch) => {
        fetch(url2)
            .then(res => res.json())
            .then(res => {
                dispatch(LoadPostAction(res, page))
            })    
    }
}
import styles from "../tabs-content.module.scss"
import { useEffect } from "react"
import { PostImage } from "../../../PostImage/PostImage"
import { useSelector, useDispatch } from "react-redux"
import { CloseImageAction } from "../../../../store/postImage/action"
import { postImage } from "../../../../store/postImage/selectors"
import { selectPosts } from "../../../../store/posts/selector"
import { LoadPostAsyncAction } from "../../../../store/posts/action"
import { AppDispatch } from "../../../../store/store"
import { AllPosts } from "../AllPosts/AllPosts"
import { FavoritePosts } from "../FavoritePosts/FavoritePosts"


export type Posts = {
    id: number
    date: Date
    title: string
    description: string
    image: string
}

type Props = {
    data_type: number
}


export const TabContent = (props: Props) => {
    const {data_type} = props
    const {amountPosts, page} = useSelector(selectPosts)
    const {isOpened, idOfPost} = useSelector(postImage)   
    const dispatch = useDispatch<AppDispatch>()

    const closeImagePost = () => dispatch(CloseImageAction())

    useEffect(() => {
        dispatch(LoadPostAsyncAction())
    }, [dispatch])

    if (amountPosts.length === 0) {
        return null
    }
    return (
        <>
            <div className={styles.tab_content}>
            {
                data_type === 0 ? (
                    <AllPosts/>
                ) : (
                    data_type === 1 ? (
                        <FavoritePosts/>
                    ) : (
                        <div>
                            {/* ПОПУЛЯРНЫЕ ПОСТЫ */}
                        </div>
                    )
                )
            }
            </div>
            {
                isOpened ? (
                    <PostImage dataLength={amountPosts.length} idOfPost={idOfPost ? idOfPost : 1} closeImage={closeImagePost}/>
                ) : (
                    null
                )
            }
        </>
    )
}

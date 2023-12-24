import styles from "./tabs-content.module.scss"
import { PostBigVariant } from '../../PostBigVariant/PostBigVariant'
import { PostMiddleVariant } from "../../PostMiddleVariant/PostMiddleVariant"
import { PostSmallVariant } from "../../PostSmallVariant/PostSmallVariant"
import { useEffect } from "react"
import { PostImage } from "../../../PostImage/PostImage"
import { useSelector, useDispatch } from "react-redux"
import { OpenImageAction, CloseImageAction } from "../../../../store/postImage/action"
import { postImage } from "../../../../store/postImage/selectors"
import { selectPosts } from "../../../../store/posts/selector"
import { LoadPostAsyncAction } from "../../../../store/posts/action"
import { AppDispatch } from "../../../../store/store"


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

    const openImagePost = (id: number) => dispatch(OpenImageAction(id))
    const closeImagePost = () => dispatch(CloseImageAction())

    useEffect(() => {
        dispatch(LoadPostAsyncAction())
    }, [])

    if (amountPosts.length === 0) {
        return null
    }
    return (
        <>
            <div className={styles.tab_content}>
            {/* тут лежат все посты */}
            {
                data_type === 0 ? (
                    <>
                    {
                        page === 1 ? (
                            <div className={styles.big_post}>
                                <PostBigVariant post={amountPosts[0]} openImage={() => openImagePost(amountPosts[0].id)}/>
                            </div>
                        ) : (
                            <div className={styles.middle_posts}>
                                {amountPosts
                                .filter((post, index) => index >= 0 && index <= 1)
                                .map((filteredPost) => (
                                        <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)}/>
                                    ))}
                            </div>
                        )
                    }
                    {
                        page === 1 ? (
                            <div className={styles.middle_posts}>
                            {amountPosts
                            .filter((post, index) => index >= 1 && index <= 4)
                            .map((filteredPost) => (
                                    <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)}/>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.middle_posts}>
                            {amountPosts
                            .filter((post, index) => index >= 2 && index <= 5)
                            .map((filteredPost) => (
                                    <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)}/>
                                ))}
                            </div>
                        )
                    }
                    {
                        page === 1 ? (
                            <div className={styles.small_posts}>
                            {
                                amountPosts
                                .filter((post, index) => index >= 5)
                                .map((filteredPost) => (
                                    <PostSmallVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)}/>
                                ))
                            }
                            </div>
                        ) : (
                            <div className={styles.small_posts}>
                            {
                                amountPosts
                                .filter((post, index) => index > 5)
                                .map((filteredPost) => (
                                    <PostSmallVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)}/>
                                ))
                            }
                            </div>
                        )
                    }
                    </>
                    
                ) : (
                    data_type === 1 ? (
                        <div>
                            {/* ЛЮБИМЫЕ ПОСТЫ */}
                        </div>
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

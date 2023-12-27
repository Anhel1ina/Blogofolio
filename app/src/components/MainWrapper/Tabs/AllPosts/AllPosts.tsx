import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { selectPosts } from "../../../../store/posts/selector"
import { AppDispatch } from "../../../../store/store"

import { OpenImageAction} from "../../../../store/postImage/action"
import { LoadPostAsyncAction } from "../../../../store/posts/action"
import { PostBigVariant } from "../../PostBigVariant/PostBigVariant"
import { PostMiddleVariant } from "../../PostMiddleVariant/PostMiddleVariant"
import { PostSmallVariant } from "../../PostSmallVariant/PostSmallVariant"

import styles from '../tabs-content.module.scss'


export const AllPosts = () => {
    const {amountPosts, page} = useSelector(selectPosts)
    const dispatch = useDispatch<AppDispatch>()
    const openImagePost = (id: number) => dispatch(OpenImageAction(id))

    useEffect(() => {
        dispatch(LoadPostAsyncAction())
    }, [])

    if (amountPosts.length === 0) {
        return null
    }

    return (
        <>
            {
                page === 1 ? (
                    <div className={styles.big_post}>
                        <PostBigVariant post={amountPosts[0]} openImage={() => openImagePost(amountPosts[0].id)} />
                    </div>
                ) : (
                    <div className={styles.middle_posts}>
                        {amountPosts
                            .filter((post, index) => index >= 0 && index <= 1)
                            .map((filteredPost) => (
                                <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
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
                                <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                            ))}
                    </div>
                ) : (
                    <div className={styles.middle_posts}>
                        {amountPosts
                            .filter((post, index) => index >= 2 && index <= 5)
                            .map((filteredPost) => (
                                <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
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
                                    <PostSmallVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                                ))
                        }
                    </div>
                ) : (
                    <div className={styles.small_posts}>
                        {
                            amountPosts
                                .filter((post, index) => index > 5)
                                .map((filteredPost) => (
                                    <PostSmallVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                                ))
                        }
                    </div>
                )
            }
        </>
    )
}

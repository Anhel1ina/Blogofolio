import { useDispatch, useSelector } from 'react-redux'
import styles from '../tabs-content.module.scss'
import { AppDispatch } from '../../../../store/store'
import { selectPosts } from '../../../../store/posts/selector'
import { useEffect } from 'react'
import { LoadAllPostAsyncAction } from '../../../../store/posts/action'
import { setFavs } from '../../../../store/favs/selector'
import { PostMiddleVariant } from '../../PostMiddleVariant/PostMiddleVariant'
import { PostSmallVariant } from '../../PostSmallVariant/PostSmallVariant'
import { OpenImageAction } from '../../../../store/postImage/action'

export const FavoritePosts = () => {
    const { amountPosts } = useSelector(selectPosts)
    const data = useSelector(setFavs)
    const dispatch = useDispatch<AppDispatch>()
    const openImagePost = (id: number) => dispatch(OpenImageAction(id))

    useEffect(() => {
        dispatch(LoadAllPostAsyncAction())
    }, [dispatch])

    const favoritePosts = amountPosts.filter(post => {
        return data[post.id]?.isAdded
    })

    return (
        <>
        {
        <div className={styles.middle_posts}>
            {favoritePosts
                .filter((post, index) => index >= 0 && index <= 1)
                .map((filteredPost) => (
                    <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                ))}
        </div>
        }
        {
        <div className={styles.middle_posts}>
            {favoritePosts
                .filter((post, index) => index >= 2 && index <= 5)
                .map((filteredPost) => (
                    <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                ))}
        </div>
        }
        {
        <div className={styles.small_posts}>
            {
                favoritePosts
                    .filter((post, index) => index > 5)
                    .map((filteredPost) => (
                        <PostSmallVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                    ))
            }
        </div>
        }
        </>
    )
}

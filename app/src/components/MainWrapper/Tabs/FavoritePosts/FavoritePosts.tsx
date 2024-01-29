import { useDispatch, useSelector } from 'react-redux'
import styles from '../tabs-content.module.scss'
import { AppDispatch } from '../../../../store/store'
import { selectPosts } from '../../../../store/posts/selector'
import { useEffect } from 'react'
import { LoadAllPostAsyncAction, LoadFavPosts, setPageAction } from '../../../../store/posts/action'
import { setFavs } from '../../../../store/favs/selector'
import { PostMiddleVariant } from '../../PostMiddleVariant/PostMiddleVariant'
import { PostSmallVariant } from '../../PostSmallVariant/PostSmallVariant'
import { OpenImageAction } from '../../../../store/postImage/action'
import { AllNavigation } from '../../../AllNavigation/AllNavigation'

import { getCustomPostPages} from '../../../../helpers/getPageData'
import { getPages } from '../../../../helpers/getPages'

export const FavoritePosts = () => {
    const { amountPosts, page } = useSelector(selectPosts)
    const data = useSelector(setFavs)
    const dispatch = useDispatch<AppDispatch>()
    const openImagePost = (id: number) => dispatch(OpenImageAction(id))

    useEffect(() => {
        dispatch(LoadAllPostAsyncAction())
        dispatch(setPageAction())
    }, [dispatch])

    const favoritePosts = amountPosts.filter(post => {
        return data[post.id]?.isAdded
    })

    const showedPosts = getCustomPostPages(favoritePosts, page!, 12)
    let pages: string[] = getPages(favoritePosts.length, 12, 12, page!)

    const onFavPage = (page: number) => {
        dispatch(setPageAction(page))
    }

    return (
        <>
        {
        <div className={styles.middle_posts}>
            {showedPosts
                .filter((post, index) => index >= 0 && index <= 1)
                .map((filteredPost) => (
                    <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                ))}
        </div>
        }
        {
        <div className={styles.middle_posts}>
            {showedPosts
                .filter((post, index) => index >= 2 && index <= 5)
                .map((filteredPost) => (
                    <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                ))}
        </div>
        }
        {
        <div className={styles.small_posts}>
            {
                showedPosts
                    .filter((post, index) => index > 5)
                    .map((filteredPost) => (
                        <PostSmallVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                    ))
            }
        </div>
        }
        <AllNavigation onPage={onFavPage} page={page?.toString()!} pages={pages}/>
        </>
    )
}

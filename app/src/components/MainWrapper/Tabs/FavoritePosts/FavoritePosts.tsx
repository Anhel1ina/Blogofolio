import { useDispatch, useSelector } from 'react-redux'
import styles from '../tabs-content.module.scss'
import { AppDispatch } from '../../../../store/store'
import { selectPosts } from '../../../../store/posts/selector'
import { useEffect } from 'react'
import { LoadAllPostAsyncAction, LoadFavPosts, setPageAction } from '../../../../store/posts/action'
import { setFavs } from '../../../../store/favs/selector'
import { PostMiddleVariant } from '../../PostMiddleVariant/PostMiddleVariant'
import { PostSmallVariant } from '../../PostSmallVariant/PostSmallVariant'
import { CloseImageAction, OpenImageAction } from '../../../../store/postImage/action'
import { AllNavigation } from '../../../AllNavigation/AllNavigation'

import { getCustomPostPages} from '../../../../helpers/getPageData'
import { getPages } from '../../../../helpers/getPages'
import { PostImage } from '../../../PostImage/PostImage'
import { postImage } from '../../../../store/postImage/selectors'

export const FavoritePosts = () => {
    const { amountPosts, page } = useSelector(selectPosts)
    const data = useSelector(setFavs)
    const {isOpened, idOfPost} = useSelector(postImage)  
    
    const dispatch = useDispatch<AppDispatch>()
    const openImagePost = (id: number) => dispatch(OpenImageAction(id))
    const closeImagePost = () => dispatch(CloseImageAction())

    useEffect(() => {
        dispatch(LoadAllPostAsyncAction())
        dispatch(setPageAction())
    }, [dispatch])

    const favoritePosts = amountPosts.filter(post => data[post.id]?.isAdded)

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
        {/* {
                isOpened ? (
                    <PostImage dataLength={showedPosts.length} idOfPost={idOfPost ? idOfPost : 1} closeImage={closeImagePost}/>
                ) : (
                    null
                )
        } */}
        </>
    )
}

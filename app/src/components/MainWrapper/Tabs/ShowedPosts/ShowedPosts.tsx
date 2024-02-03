import { useDispatch } from 'react-redux'
import { PostMiddleVariant } from '../../PostMiddleVariant/PostMiddleVariant'
import { PostSmallVariant } from '../../PostSmallVariant/PostSmallVariant'
import { Posts } from '../TabContent/TabContent'
import styles from '../tabs-content.module.scss'
import { OpenImageAction } from '../../../../store/postImage/action'

type Props = {
    usedPosts: Posts[]
}

export const ShowedPosts = ({usedPosts}: Props) => {
    const dispatch = useDispatch()
    const openImagePost = (id: number) => dispatch(OpenImageAction(id))
    return (
        <>
            {
            <div className={styles.middle_posts}>
                {usedPosts
                    .filter((post, index) => index >= 0 && index <= 1)
                    .map((filteredPost) => (
                        <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                    ))}
            </div>
            }
            {
            <div className={styles.middle_posts}>
                {usedPosts
                    .filter((post, index) => index >= 2 && index <= 5)
                    .map((filteredPost) => (
                        <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(filteredPost.id)} />
                    ))}
            </div>
            }
            {
            <div className={styles.small_posts}>
                {
                    usedPosts
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

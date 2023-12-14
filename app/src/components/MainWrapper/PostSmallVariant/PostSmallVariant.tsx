import styles from './post_small.module.scss'
import { LikeButton } from '../PostBigVariant/LikeButton/LikeButton'
import { DislikeButton } from '../PostBigVariant/DislikeButton/DislikeButton'
import { Bookmark } from '../PostBigVariant/Bookmark/Bookmark'
import { More } from '../PostBigVariant/More/More'
import { Link } from 'react-router-dom'

type Post = {
    id: number
    date: Date
    title: string
    description: string
    image: string
}

type Props = {
    post: Post
    searchRes?: boolean
}

export const PostSmallVariant = (props: Props) => {
    const {post, searchRes = false} = props
    return (
        <div className={`${styles.small_post} ${searchRes ? styles.search_results : null}`} id={post.id.toString()}>
            <div>
                <h4>{new Date(post.date).toLocaleDateString()}</h4>
                <Link to={`openpost/${post.id}`}>
                    <h3>{post.title}</h3>
                </Link>
            </div>
            <div className={styles.small_post_img}>
                <img src={post.image} alt="Astronaut"/>
            </div>
            <div className={styles.all_buttons}>
                <div>
                    <div className={styles.like_buttons}>
                        <LikeButton/>
                    </div>
                    <DislikeButton/>
                </div>
                <div className={styles.mark_buttons}>
                    <Bookmark/>
                    <More/>
                </div>
            </div>
        </div>
    )
}

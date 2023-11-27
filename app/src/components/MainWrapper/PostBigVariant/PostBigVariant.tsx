import styles from './post.module.scss'
// import cosmo1 from '../../../images/cosmo1.png'
import { LikeButton } from './LikeButton/LikeButton'
import { DislikeButton } from './DislikeButton/DislikeButton'
import { Bookmark } from './Bookmark/Bookmark'
import { More } from './More/More'

type Post = {
    id: number
    date: string
    title: string
    description: string
    image: string
}

type Props = {
    post: Post
}

export const PostBigVariant = (props: Props) => {
    const {post} = props
    return (
        <div className={styles.post}>
            <div>
                <h4>{post.date}</h4>
                <h2>{post.title}</h2>
                <p className={styles.body_text}>{post.description}</p>
            </div>
            <div>
                <img src={post.image} alt="Astronaut" />
            </div>
            <div className={styles.like_dis}>
                <div className={styles.like_buttons}>
                    <LikeButton/>
                </div>
                <div className={styles.like_buttons}>
                    <DislikeButton/>
                </div>
            </div>
            <div className={`${styles.like_dis} ${styles.dop_buttons}`}>
                <Bookmark/>
                <More/>
            </div>
        </div>
    )
}

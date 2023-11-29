import styles from './post_middle.module.scss'
import { LikeButton } from '../PostBigVariant/LikeButton/LikeButton'
import { DislikeButton } from '../PostBigVariant/DislikeButton/DislikeButton'
import { Bookmark } from '../PostBigVariant/Bookmark/Bookmark'
import { More } from '../PostBigVariant/More/More'

type Post = {
    id: number
    date: Date
    title: string
    description: string
    image: string
}

type Props = {
    post: Post
}

export const PostMiddleVariant = (props: Props) => {
    const {post} = props
    return (
        <div className={styles.middle_post}>
            <div className={styles.middle_post_img}>
                <img src={post.image} alt="Astronaut"/>
            </div>
            <h4>{new Date(post.date).toLocaleDateString()}</h4>
            <h3>{post.title}</h3>
            <div className={styles.buttons_block}>
                <div className={styles.buttons_block__inner}>
                    <div className={styles.button_space}>
                        <LikeButton/>
                    </div>
                    <DislikeButton/>
                </div>
                <div>
                    <Bookmark/>
                    <More/>
                </div>
            </div>
        </div>
    )
}

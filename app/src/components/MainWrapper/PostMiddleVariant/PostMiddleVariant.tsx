import styles from './post_middle.module.scss'
import { LikeButton } from '../PostBigVariant/LikeButton/LikeButton'
import { DislikeButton } from '../PostBigVariant/DislikeButton/DislikeButton'
import { Bookmark } from '../PostBigVariant/Bookmark/Bookmark'
import { More } from '../PostBigVariant/More/More'
import { Link } from 'react-router-dom'
import { LikeDisButtonsWrapper } from '../PostBigVariant/LikeDisButtonsWrapper/LikeDisButtonsWrapper'

type Post = {
    id: number
    date: Date
    title: string
    description: string
    image: string
}

type Props = {
    post: Post
    openImage: (id: number) => void
}

export const PostMiddleVariant = (props: Props) => {
    const {post, openImage} = props
    return (
        <div className={styles.middle_post} id={post.id.toString()}>
            <div className={styles.middle_post_img}>
                <img src={post.image} alt="Astronaut" onClick={() => openImage(post.id)}/>
            </div>
            <h4>{new Date(post.date).toLocaleDateString()}</h4>
            <Link to={`openpost/${post.id}`}>
                <h3>{post.title}</h3>
            </Link>
            <div className={styles.buttons_block}>
                <div className={styles.buttons_block__inner}>
                    <LikeDisButtonsWrapper/>
                </div>
                <div>
                    <Bookmark/>
                    <More/>
                </div>
            </div>
        </div>
    )
}

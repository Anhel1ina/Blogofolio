import styles from './post.module.scss'
import { LikeButton } from './LikeButton/LikeButton'
import { DislikeButton } from './DislikeButton/DislikeButton'
import { Bookmark } from './Bookmark/Bookmark'
import { More } from './More/More'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { postImage } from '../../../store/postImage/selectors'
import { CloseImageAction, OpenImageAction } from '../../../store/postImage/action'
import { ImageAction } from '../../../store/postImage/types'

type Props = {
    openImage: (id: number) => ImageAction
    posts: Posts[]
}

type Posts = {
    title: string
    description: string
    image: string
    date: Date
    id: number
}

export const PostBigVariant = ({posts, openImage}: Props) => {
    if (posts.length === 0) {
        return null; 
    }
    
    return (
        <div className={styles.post} id={posts[0].id.toString()}>
            <>
                <div>
                    <h4>{new Date(posts[0].date).toLocaleDateString()}</h4>
                    <Link to={`openpost/${posts[0].id}`}>
                        <h2>{posts[0].title}</h2>
                    </Link>
                    <p className={styles.body_text}>{posts[0].description}</p>
                </div>
                <div className={styles.post_image}>
                    <img src={posts[0].image} alt="post" onClick={() => openImage(posts[0].id)}/>
                </div>
                <div className={styles.like_dis}>
                    <div className={styles.like_buttons}>
                        <LikeButton />
                    </div>
                    <div className={styles.like_buttons}>
                        <DislikeButton />
                    </div>
                </div>
                <div className={`${styles.like_dis} ${styles.dop_buttons}`}>
                    <Bookmark />
                    <More />
                </div>
            </>
        </div>
    );
};


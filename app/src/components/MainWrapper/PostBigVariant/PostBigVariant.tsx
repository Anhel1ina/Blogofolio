import styles from './post.module.scss'
import { LikeButton } from './LikeButton/LikeButton'
import { DislikeButton } from './DislikeButton/DislikeButton'
import { Bookmark } from './Bookmark/Bookmark'
import { More } from './More/More'


type Posts = {
    title: string
    description: string
    image: string
    date: Date
    id: number
}

export const PostBigVariant: React.FC<{ posts: Posts[] }> = ({ posts }) => {
    if (posts.length === 0) {
        return null; 
    }

    return (
        <div className={styles.post}>
            <>
                <div>
                    <h4>{new Date(posts[0].date).toLocaleDateString()}</h4>
                    <h2>{posts[0].title}</h2>
                    <p className={styles.body_text}>{posts[0].description}</p>
                </div>
                <div className={styles.post_image}>
                    <img src={posts[0].image} alt="post" />
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


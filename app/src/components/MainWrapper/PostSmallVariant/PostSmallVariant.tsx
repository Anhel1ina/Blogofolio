import React from 'react'
import styles from './post_small.module.scss'
import { LikeButton } from '../PostBigVariant/LikeButton/LikeButton'
import { DislikeButton } from '../PostBigVariant/DislikeButton/DislikeButton'
import { Bookmark } from '../PostBigVariant/Bookmark/Bookmark'
import { More } from '../PostBigVariant/More/More'

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

export const PostSmallVariant = (props: Props) => {
    const {post} = props
    return (
        <div className={styles.small_post}>
            <div>
                <h4>{post.date}</h4>
                <h3>{post.title}</h3>
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

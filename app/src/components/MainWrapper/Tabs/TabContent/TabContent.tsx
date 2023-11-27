import styles from "./tabs-content.module.scss"
import { PostBigVariant } from '../../PostBigVariant/PostBigVariant'
import { PostMiddleVariant } from "../../PostMiddleVariant/PostMiddleVariant"
import { PostSmallVariant } from "../../PostSmallVariant/PostSmallVariant"


type Posts = {
    id: number
    date: string
    title: string
    description: string
    image: string
}

type Props = {
    data_type: number
    posts: Posts[]
}


export const TabContent = (props: Props) => {
    const {data_type, posts} = props
    let middlePostIndex: number = 10
    return (
        <div className={styles.tab_content}>
            {/* тут лежат все посты */}
            {
                data_type === 0 ? (
                    
                    <>
                    <PostBigVariant post={posts[0]}/>
                    <div className={styles.middle_posts}>
                    {posts.map((post) => (
                            <PostMiddleVariant key={middlePostIndex++} post={post} />
                        ))}
                    </div>
                    <div className={styles.small_posts}>
                        {Array.from({ length: 6 }).map((_, index) => {
                            const postIndex = index % posts.length
                            const post = posts[postIndex]
                            return <PostSmallVariant key={index} post={post} />
                        })}
                    </div>
                    </>
                    
                ) : (
                    data_type === 1 ? (
                        <div>ЛЮБИМЫЕ ПОСТЫ</div>
                    ) : (
                        <div>ПОПУЛЯРНЫЕ ПОСТЫ</div>
                    )
                )
            }
        </div>
    )
}

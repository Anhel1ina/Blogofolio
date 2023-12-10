import styles from "./tabs-content.module.scss"
import { PostBigVariant } from '../../PostBigVariant/PostBigVariant'
import { PostMiddleVariant } from "../../PostMiddleVariant/PostMiddleVariant"
import { PostSmallVariant } from "../../PostSmallVariant/PostSmallVariant"
import { useState, useEffect } from "react"
import { SignForm } from "../../../SignForm/SignForm"


type Posts = {
    id: number
    date: Date
    title: string
    description: string
    image: string
}

type Props = {
    data_type: number
    // posts: Posts[]
}


export const TabContent = (props: Props) => {
    const {data_type} = props
    const [data, setData] = useState<Posts[]>([])

    useEffect(() => {
        fetch('https://65670f6864fcff8d730fa806.mockapi.io/posts')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    if (data.length === 0) {
        return null
    }
    return (
        <div className={styles.tab_content}>
            {/* тут лежат все посты */}
            {
                data_type === 0 ? (
                    
                    <>
                    <div>
                        <PostBigVariant posts={data}/>
                    </div>

                    <div className={styles.middle_posts}>
                    {data
                    .filter((post) => post.id >= 2 && post.id <= 5)
                    .map((filteredPost) => (
                            <PostMiddleVariant key={filteredPost.id} post={filteredPost} />
                        ))}
                    </div>
                    <div className={styles.small_posts}>
                        {
                            data
                            .filter((post) => post.id > 5)
                            .map((filteredPost) => (
                                <PostSmallVariant key={filteredPost.id} post={filteredPost}/>
                            ))
                        }
                    </div>
                    </>
                    
                ) : (
                    data_type === 1 ? (
                        <div>
                            {/* ЛЮБИМЫЕ ПОСТЫ */}
                        </div>
                    ) : (
                        <div>
                            {/* ПОПУЛЯРНЫЕ ПОСТЫ */}
                        </div>
                    )
                )
            }
        </div>
    )
}
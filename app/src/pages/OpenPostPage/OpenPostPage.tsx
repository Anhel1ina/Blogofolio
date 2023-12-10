import { useState, useEffect } from 'react'
import { PageHeader } from '../../components/PageHeader/PageHeader'

import mainStyles from '../SignInPage/sign_in_page.module.scss' 
import styles from './open_post.module.scss'
import { LikeFullButton } from '../../components/LikeFullButton/LikeFullButton'
import { DislikeFullButton } from '../../components/DislikeFullButton/DislikeFullButton'
import { AddToFavoritesButton } from '../../components/AddToFavoritesButton/AddToFavoritesButton'

type Posts = {
    title: string
    description: string
    image: string
    date: Date
    id: number
}

export const OpenPostPage = () => {
    const [data, setData] = useState<Posts>()

    useEffect(() => {
        fetch('https://65670f6864fcff8d730fa806.mockapi.io/posts/1')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    if(!data){
        return null
    }
    return (
        <div className={mainStyles.wrapper}>
            <div className={mainStyles.page}>
                <h1 className={styles.open_post_header}>{data.title}</h1>
                <div className={styles.open_page_content}>
                    <div className={styles.open_page_image}>
                        <img src={data.image}/>
                    </div>
                    <p className={styles.open_page_text}>
                        {data.description}
                    </p>
                    <div className={styles.open_page_buttons}>
                        <div>
                            <LikeFullButton/>
                            <DislikeFullButton/>
                        </div>
                        <AddToFavoritesButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

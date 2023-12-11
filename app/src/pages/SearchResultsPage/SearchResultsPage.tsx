import React from 'react'
import styles from '../sign_in_page.module.scss'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { PostSmallVariant } from '../../components/MainWrapper/PostSmallVariant/PostSmallVariant'
import { useState, useEffect } from 'react'

type Posts = {
    id: number
    date: Date
    title: string
    description: string
    image: string
}

export const SearchResultsPage = () => {
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
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <PageHeader title="Search results"/>
                <div>
                    {
                        data
                        .map((post) => (
                            <PostSmallVariant searchRes={true} key={post.id} post={post}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

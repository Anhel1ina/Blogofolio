import React from 'react'
import styles from '../sign_in_page.module.scss'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { PostSmallVariant } from '../../components/MainWrapper/PostSmallVariant/PostSmallVariant'
import { useState, useEffect } from 'react'
import { useSearchText } from '../../helpers/SearchResultsContext'

type Posts = {
    id: number
    date: Date
    title: string
    description: string
    image: string
}

export const SearchResultsPage = () => {
    const [data, setData] = useState<Posts[]>([])
    const {searchText} = useSearchText()

    useEffect(() => {
        fetch('https://65670f6864fcff8d730fa806.mockapi.io/posts')
            .then(res => res.json())
            .then(res => {
                window.scrollTo(0, 0)
                setData(res)
            })
    }, [])
    if (data.length === 0) {
        return null
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <PageHeader title={`Search results for '${searchText}'`}/>
                <div>
                    {
                        data
                        .filter((post) => post.title.toLowerCase().includes(searchText.toLowerCase()) || post.description.toLowerCase().includes(searchText.toLowerCase()))
                        .map((post) => (
                            <PostSmallVariant searchRes={true} key={post.id} post={post}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

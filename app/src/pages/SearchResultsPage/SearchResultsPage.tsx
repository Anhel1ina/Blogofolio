import styles from '../sign_in_page.module.scss'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { PostSmallVariant } from '../../components/MainWrapper/PostSmallVariant/PostSmallVariant'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { LoadAllPostAsyncAction } from '../../store/posts/action'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/posts/selector'
import { searchPosts } from '../../store/search/selector'

type Posts = {
    id: number
    date: Date
    title: string
    description: string
    image: string
}

export const SearchResultsPage = () => {
    const {amountPosts} = useSelector(selectPosts)
    const {searchText} = useSelector(searchPosts)

    useEffect(() => {
        dispatch(LoadAllPostAsyncAction())
    }, [])
    const dispatch = useDispatch<AppDispatch>()


    if (amountPosts.length === 0) {
        return null
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <PageHeader title={`Search results for '${searchText}'`}/>
                <div>
                    {
                        amountPosts
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

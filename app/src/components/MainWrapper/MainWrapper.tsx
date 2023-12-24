import { useSelector } from 'react-redux'
import { BlogNavigation } from '../BlogNavigation/BlogNavigation'
import { NextPageButton } from '../NextPageButton/NextPageButton'
import { PrevPageButton } from '../PrevPageButton/PrevPageButton'
import styles from './main.module.scss'
import { Tabs } from './Tabs/Tabs'
import { selectPosts } from '../../store/posts/selector'
import { useEffect, useState } from 'react'
import { Posts } from '../MainWrapper/Tabs/TabContent/TabContent'
import { getPageCount } from '../../helpers/getPageData'

export const MainWrapper = () => {
    const {page} = useSelector(selectPosts)

    const [data, setData] = useState<Posts[]>()
    useEffect(() => {
        fetch(`https://65670f6864fcff8d730fa806.mockapi.io/posts`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    let pages: number[] = []
    if(data){
        pages = getPageCount(data)
    }

    return (
        <div className={styles.main}>
            <h1>Blog</h1>
            <Tabs/>
            <div className={styles.nav}>
                <PrevPageButton disabled={page === 1 ? true : false}/>
                <BlogNavigation pages={pages}/>
                <NextPageButton disabled={page === pages.length ? true : false}/>
            </div>
        </div>
    )
}

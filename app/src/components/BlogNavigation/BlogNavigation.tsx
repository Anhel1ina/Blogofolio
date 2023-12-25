import styles from './blog_navigation.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { LoadPostAsyncAction } from '../../store/posts/action'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/posts/selector'

type Props = {
    pages: number[]
}

export const BlogNavigation = ({pages}: Props) => {
    const {page} = useSelector(selectPosts)
    const dispatch = useDispatch<AppDispatch>()
    const onPageClick = (page: number) => {
        dispatch(LoadPostAsyncAction(page))
        window.scrollTo(0, 0)
    }
    
    return (
        <div className={styles.navigation}>
            {
                <div>
                    {
                        pages.map(
                            (item) => (
                                <span key={item} className={page == item ? styles.active : ''} onClick={() => onPageClick(item)}>{item}</span>
                            )
                        )
                    }
                </div>
            }
        </div>
    )
}

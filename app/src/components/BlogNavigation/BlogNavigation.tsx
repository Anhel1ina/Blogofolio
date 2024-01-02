import styles from './blog_navigation.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { LoadPostAsyncAction } from '../../store/posts/action'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/posts/selector'

type Props = {
    pages: number[]
    page: number
    onPage: (page: number) => void
}

export const BlogNavigation = ({page, pages, onPage}: Props) => {
    return (
        <div className={styles.navigation}>
            {
                <div>
                    {
                        pages.map(
                            (item) => (
                                <span key={item} className={page == item ? styles.active : ''} onClick={() => onPage(item)}>{item}</span>
                            )
                        )
                    }
                </div>
            }
        </div>
    )
}

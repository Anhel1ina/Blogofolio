import { BookmarkIcon } from './BookmarkIcon'
import styles from './bookmark.module.scss'

type Props = {
    disabled?: boolean
}

export const Bookmark = (props: Props) => {
    const {disabled = false} = props
    return (
        <button className={styles.bookmark} disabled={disabled}>
            <BookmarkIcon/>
        </button>
    )
}

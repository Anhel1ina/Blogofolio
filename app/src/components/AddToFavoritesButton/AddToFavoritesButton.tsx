import { BookmarkIcon } from '../MainWrapper/PostBigVariant/Bookmark/BookmarkIcon'
import styles from './add_to_fav.module.scss'

export const AddToFavoritesButton = () => {
    return (
        <button className={styles.add_to_fav_button}>
            <BookmarkIcon/>
            <p>Add to favorites</p>
        </button>
    )
}

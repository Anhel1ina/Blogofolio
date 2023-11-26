import styles from './like-styles.module.scss';

export const LikeButton = () => {
    return (
        <div>
            <button className={styles.like_button}>
                <LikeButton/>
            </button>
            <p>20</p>
        </div>
    )
}

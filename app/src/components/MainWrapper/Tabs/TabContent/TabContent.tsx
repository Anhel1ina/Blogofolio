
// import { DislikeButton } from "../../PostBigVariant/DislikeButton/DislikeButton"
// import { LikeButton } from "../../PostBigVariant/LikeButton/LikeButton"
import styles from "./tabs-content.module.scss"
import { PostBigVariant } from '../../PostBigVariant/PostBigVariant'

type Props = {
    data_type: number
}

export const TabContent = ({data_type}: Props) => {
    return (
        <div className={styles.tab_content}>
            {/* тут лежат все посты */}
            {
                data_type === 0 ? (
                    
                    <>
                    <PostBigVariant/>
                    </>
                    
                ) : (
                    data_type === 1 ? (
                        <div>ЛЮБИМЫЕ ПОСТЫ</div>
                    ) : (
                        <div>ПОПУЛЯРНЫЕ ПОСТЫ</div>
                    )
                )
            }
        </div>
    )
}

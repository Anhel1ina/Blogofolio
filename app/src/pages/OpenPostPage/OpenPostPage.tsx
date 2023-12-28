import { useEffect } from 'react'
import mainStyles from '../sign_in_page.module.scss' 
import styles from './open_post.module.scss'
import { LikeFullButton } from '../../components/LikeFullButton/LikeFullButton'
import { DislikeFullButton } from '../../components/DislikeFullButton/DislikeFullButton'
import { AddToFavoritesButton } from '../../components/AddToFavoritesButton/AddToFavoritesButton'
import { Link, useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { selectPosts } from '../../store/posts/selector'
import { AppState } from '../../store/store'
import { SetLikeAction, UndoAction, SetDislikeAction } from '../../store/likes/action'

export const OpenPostPage = () => {
    const {id} = useParams()

    const {amountPosts} = useSelector(selectPosts)
    useEffect(() => { window.scrollTo(0, 0) }, [])
    const data = amountPosts.find(post => post.id == +id!)

    const likeState = useSelector((state: AppState) => state.like[id!])
    const dispatch = useDispatch()
    const {isLiked, isDisliked, setMark} = likeState || {}

    const like = () =>  dispatch(SetLikeAction(id!))
    const undo = () => dispatch(UndoAction(id!))
    const dislike = () =>  dispatch(SetDislikeAction(id!))

    if(!data){
        return null
    }
    return (
        <div className={mainStyles.wrapper}>
            <div className={mainStyles.page}>
                <div className={styles.open_post_backlink}>
                    <Link to='/'><p>Home</p></Link>
                    <span>|</span>
                    <p>Post {id}</p>
                </div>
                <h1 className={styles.open_post_header}>{data.title}</h1>
                <div className={styles.open_page_content}>
                    <div className={styles.open_page_image}>
                        <img alt={`post ${data.id}`} src={data.image}/>
                    </div>
                    <p className={styles.open_page_text}>
                        {data.description}
                    </p>
                    <div className={styles.open_page_buttons}>
                        <div>
                            <LikeFullButton isLiked={isLiked} isDisliked={isDisliked} setMark={setMark} like={like} undo={undo}/>
                            <DislikeFullButton isLiked={isLiked} isDisliked={isDisliked} setMark={setMark} dislike={dislike} undo={undo}/>
                        </div>
                        <AddToFavoritesButton postId={id!.toString()}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

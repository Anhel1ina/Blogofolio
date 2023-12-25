import { useState, useEffect, useRef } from 'react'
import mainStyles from '../sign_in_page.module.scss' 
import styles from './open_post.module.scss'
import { LikeFullButton } from '../../components/LikeFullButton/LikeFullButton'
import { DislikeFullButton } from '../../components/DislikeFullButton/DislikeFullButton'
import { AddToFavoritesButton } from '../../components/AddToFavoritesButton/AddToFavoritesButton'
import { Link, useParams } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { LoadOpenPostAsyncAction } from '../../store/posts/action'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/posts/selector'


export const OpenPostPage = () => {
    const {id} = useParams()

    const {amountPosts} = useSelector(selectPosts)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(LoadOpenPostAsyncAction(+id!))
    }, [])

    if(!amountPosts){
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
                <h1 className={styles.open_post_header}>{amountPosts[0].title}</h1>
                <div className={styles.open_page_content}>
                    <div className={styles.open_page_image}>
                        <img src={amountPosts[0].image}/>
                    </div>
                    <p className={styles.open_page_text}>
                        {amountPosts[0].description}
                    </p>
                    <div className={styles.open_page_buttons}>
                        <div>
                            <LikeFullButton/>
                            <DislikeFullButton/>
                        </div>
                        <AddToFavoritesButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

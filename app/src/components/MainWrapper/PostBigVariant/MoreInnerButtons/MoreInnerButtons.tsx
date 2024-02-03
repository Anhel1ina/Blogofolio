import { useDispatch } from 'react-redux'
import styles from '../MoreInnerButtons/more_inner_buttons.module.scss'
import { useNavigate } from 'react-router-dom'
import { setEditAction } from '../../../../store/edit/action'
import { useEditPostState } from '../../../../store/edit/selector'
import { useAddPostState } from '../../../../store/addPost/selector'
import { setDescriptionAction, setImageAction, setTitleAction } from '../../../../store/addPost/action'
import { useEffect } from 'react'
import { setCloseMoreAction } from '../../../../store/more/action'

type Props = {
    typeOfPost: string
    postId: string
}

export const MoreInnerButtons = ({ typeOfPost, postId }: Props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const close = () => dispatch(setCloseMoreAction(postId))

    const edit = () => {
        navigate('editpost')
        close()
    }

    return (
        <div className={`${styles.more_inner_buttons} ${styles[typeOfPost]}`}>
            <div onClick={edit}>Edit</div>
            <div>Delete</div>
        </div>
    )
}

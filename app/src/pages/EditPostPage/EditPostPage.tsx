import { FormEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { AddPostForm } from '../../components/AddPostForm/AddPostForm'
import { useEditPostState } from '../../store/edit/selector'
import { deletePostAction, editPostAction, setDescriptionAction, setImageAction, setTitleAction } from '../../store/addPost/action'

export const EditPostPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const editData = useEditPostState()

    const title = () => dispatch(setTitleAction(editData.title!))
    const description = () => dispatch(setDescriptionAction(editData.description!))
    const image = () => dispatch(setImageAction(editData.image!))

    useEffect(() => {
        window.scrollTo(0, 0)
        title()
        description()
        image()
    }, [])

    const editPost = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(editPostAction())
    }

    const deletePost = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(deletePostAction())
    }

    return (
        <AddPostForm isEdit={true} deletePost={deletePost} addPost={editPost} isDeletePostBlocked={false} pageTitle="Edit post"/>
    )
}

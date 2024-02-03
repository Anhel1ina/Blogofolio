import { FormEvent, useEffect } from "react"
import { AddPostForm } from "../../components/AddPostForm/AddPostForm"
import { useDispatch } from "react-redux"
import { addPostAction } from "../../store/addPost/action"
import { AppDispatch } from "../../store/store"

export const AddPostPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const dispatch = useDispatch<AppDispatch>()
    const addPost = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addPostAction())
    }
    
    return (
        <AddPostForm addPost={addPost} isDeletePostBlocked={true} pageTitle="Add post"/>
    )
}

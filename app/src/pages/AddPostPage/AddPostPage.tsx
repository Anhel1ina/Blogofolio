import { Link } from "react-router-dom"
import baseStyle from '../sign_in_page.module.scss'
import styles from './add_post.module.scss'
import { Input } from "../../components/SignForm/Input/Input"
import { FormEvent, useEffect, useRef } from "react"
import { AddImageInput } from "../../components/AddImageInput/AddImageInput"
import { ButtonSecondary } from "../../components/ButtonSecondary/ButtonSecondary"
import { useDispatch } from "react-redux"
import { addPostAction, setDescriptionAction, setImageAction, setTitleAction } from "../../store/addPost/action"
import { AppDispatch } from "../../store/store"
import { useAddPostState } from "../../store/addPost/selector"
import myStyles from '../../components/SignForm/sign_form.module.scss'

export const AddPostPage = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch<AppDispatch>()

    const addPostData = useAddPostState()

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const addPost = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addPostAction())
    } 

    return (
        <div className={baseStyle.wrapper}>
            <div className={baseStyle.page}>
                <div className={styles.add_post_backline}>
                    <Link to='/'><p>Home</p></Link>
                    <span>|</span>
                    <p>Add post</p>
                </div>
                <h1 className={styles.add_post_header}>Add post</h1>
                <form onSubmit={addPost}>
                    <Input onChange={(text: string) => {
                                dispatch(setTitleAction(text))
                            }} 
                            value={addPostData.title || ''} 
                            reference={inputRef} index={0} 
                            type="text" 
                            label="Title" 
                            placeholder="Post title..." 
                            errorType="title"
                            errorsData={addPostData}/>
                    {addPostData.isPostAdded === false && addPostData.errors?.title && (
                        <p className={myStyles.error_fields}>
                            {JSON.stringify(addPostData.errors.title).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                    <div className={styles.add_post_image_container}>
                        <Input value="" type="text" label="Lesson number" placeholder="Lesson number..." />
                        <AddImageInput onInput={(text: string) => {
                                dispatch(setImageAction(text))
                        }}
                        errorType="image"
                        errorsData={addPostData}/>
                        {addPostData.isPostAdded === false && addPostData.errors?.image && (
                            <p className={`${myStyles.error_fields} ${myStyles.error_field_side}`}>
                                {JSON.stringify(addPostData.errors.image).replace(/^\["(.+)"\]$/, '$1')}
                            </p>
                        )}
                    </div>
                    <div className={styles.textarea_container}>
                        <Input onChange={(text: string) => {
                                dispatch(setDescriptionAction(text))
                            }}
                            value={addPostData.description || ''} 
                            isTextArea={true} 
                            label="Description"
                            placeholder="Add your text"
                            errorType="description"
                            errorsData={addPostData}/>
                        {addPostData.isPostAdded === false && addPostData.errors?.description && (
                            <p className={`${myStyles.error_fields} ${myStyles.error_field_side}`}>
                                {JSON.stringify(addPostData.errors.description).replace(/^\["(.+)"\]$/, '$1')}
                            </p>
                        )}
                        <Input value="" isTextArea={true} label="Text" placeholder="Add your text"/>
                    </div>
                    <div className={styles.buttons_block}>
                        <button>Delete post</button>
                        <div>
                            <ButtonSecondary name="Cancel" classType="button_secondary_add_post_cancel"/>
                            <ButtonSecondary name="Add post" classType="button_secondary_add_post"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

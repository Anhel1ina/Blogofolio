import { Link } from "react-router-dom"
import baseStyle from '../sign_in_page.module.scss'
import styles from './add_post.module.scss'
import { Input } from "../../components/SignForm/Input/Input"
import { useEffect, useRef } from "react"
import { AddImageInput } from "../../components/AddImageInput/AddImageInput"
import { ButtonSecondary } from "../../components/ButtonSecondary/ButtonSecondary"

export const AddPostPage = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <div className={baseStyle.wrapper}>
            <div className={baseStyle.page}>
                <div className={styles.add_post_backline}>
                    <Link to='/'><p>Home</p></Link>
                    <span>|</span>
                    <p>Add post</p>
                </div>
                <h1 className={styles.add_post_header}>Add post</h1>
                <form>
                    <Input reference={inputRef} index={0} type="text" label="Title" placeholder="Post title..." />
                    <div className={styles.add_post_image_container}>
                        <Input type="text" label="Lesson number" placeholder="Lesson number..." />
                        <AddImageInput/>
                    </div>
                    <div className={styles.textarea_container}>
                        <Input isTextArea={true} label="Description" placeholder="Add your text"/>
                        <Input isTextArea={true} label="Text" placeholder="Add your text"/>
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

import { Link } from "react-router-dom"
import baseStyle from '../sign_in_page.module.scss'
import styles from './add_post.module.scss'
import { Input } from "../../components/SignForm/Input/Input"
import { useState } from "react"

export const AddPostPage = () => {
    const [selectedFile, setSelectedFile] = useState('');

    const showFile = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length){
            const file = e.currentTarget.files[0]
            file.name ? setSelectedFile(file.name) : setSelectedFile('')
            
        }
    };

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
                    <Input type="text" label="Title" placeholder="Post title..."/>
                    <div className={styles.add_post_image_container}>
                        <Input type="text" label="Lesson number" placeholder="Lesson number..."/>
                        <label className={styles.input_file}>
                            <p>Image</p>
                            <span className={styles.input_file_text}>{selectedFile}</span>
                            <input onChange={showFile} type="file" name="file"/>        
                            <span className={styles.input_file_btn}>Upload new</span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

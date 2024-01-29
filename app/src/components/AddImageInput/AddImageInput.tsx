import { ActivationStateType } from '../../store/activation/types';
import { AddPostType } from '../../store/addPost/types';
import { AuthState } from '../../store/auth/types';
import { SignUpType } from '../../store/signUp/types';
import styles from './add_image.module.scss'
import errorStyle from '../SignForm/Input/input-styles.module.scss'
import { useState } from 'react';

type Props = {
    onInput: (text: string) => void
    errorType?: string,
    errorsData?: SignUpType | AuthState | ActivationStateType | AddPostType
}

export const AddImageInput = ({onInput, errorType, errorsData}: Props) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const showFile = (e: React.FormEvent<HTMLInputElement>) => {
        debugger
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0]
            file ? setSelectedFile(file) : setSelectedFile(null)
            onInput && onInput(e.currentTarget.value)
        }

    }

    const clearFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const fileInput = document.getElementById('file1') as HTMLInputElement
        if (fileInput) {
            const newFileInput = document.createElement('input')
            newFileInput.type = 'file'
            newFileInput.id = 'file1'
            newFileInput.addEventListener('change', (e: any) => showFile(e as React.FormEvent<HTMLInputElement>));
            fileInput.parentNode?.replaceChild(newFileInput, fileInput);
            setSelectedFile(null)
        }
    }

    return (
        <div>
            <label className={styles.input_file}>
            <p>Image</p>
            <input value='' onChange={showFile} id="file1" type="file"/>
            <span className={styles.input_file_btn}>
                Upload new
            </span>
            {
                selectedFile ? (
                    <button type="button" onClick={clearFileInput}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5839 11.8426L17.5184 7.62478L16.387 6.49341L12.4335 10.7315L8.30466 6.74365L7.15381 7.8552L11.3426 11.901L7.40813 16.1188L8.5395 17.2502L12.493 13.012L16.6218 16.9999L17.7726 15.8883L13.5839 11.8426Z" fill="#FD3419" />
                        </svg>
                    </button>
                ) : (
                    null
                )
            }
            </label>
            <span id='file_text' className={`${styles.input_file_text} ${errorsData?.errors && (errorsData?.errors[errorType as keyof typeof errorsData.errors])  ? errorStyle.error : null} ${styles.input}`}>{selectedFile?.name}</span>
        </div>
    )
}

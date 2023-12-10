import { useRef, useEffect } from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { SignLogButton } from './SignLogButton/SignLogButton'

type InputType = {
    title: string
    text: string
    type: string
}

type Props = {
    innerItems: InputType[]
    buttonName: string
    underTitle?: string
    underLink?: string

    forgetLink?: string
}

export const SignForm = ({innerItems, buttonName, underTitle, underLink, forgetLink}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    })

    return (
        <form className={styles.sign_form}>
            {
                innerItems.map((item, i) => (
                    <Input key={i} index={i} reference={inputRef} label={item.title} placeholder={item.text} type={item.type}/>
                ))
            }
            {
                forgetLink ? (
                    <p className={styles.forget_link} >
                        <a href="#">{forgetLink}</a>
                    </p>
                ) : (
                    null
                )
            }
            <SignLogButton name={buttonName}/>
            {
                underTitle && underLink ? (
                    <div className={styles.sign_text}>
                        <p>{underTitle + " "}<a href="#">{underLink}</a></p>
                    </div>
                ) : (
                    null
                )
            }
        </form>
    )
}

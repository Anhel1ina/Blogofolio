import { useRef, useEffect } from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { SignLogButton } from './SignLogButton/SignLogButton'
import { Link } from 'react-router-dom'
import { link } from 'fs'

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
    linkTo?: string
}

export const SignForm = ({innerItems, buttonName, underTitle, underLink, forgetLink, linkTo}: Props) => {

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
                        <p>{underTitle + " "}
                            {
                                linkTo ? (
                                    <Link to={linkTo}>{underLink}</Link>
                                ) : (
                                    null
                                )
                            }
                        </p>
                    </div>
                ) : (
                    null
                )
            }
        </form>
    )
}

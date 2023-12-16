import { useRef, useEffect } from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { Link } from 'react-router-dom'

type InputType = {
    title: string
    text: string
    type: string
}

type Props = {
    innerItems: InputType[]

    disabled?: boolean
    buttonName: string
    underTitle?: string
    underLink?: string
    submitLink: string

    forgetLink?: string
    linkTo?: string
}

export const SignForm = ({innerItems, buttonName, underTitle, underLink, forgetLink, linkTo, submitLink, disabled=false}: Props) => {

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
                    <Link to={forgetLink} className={styles.forget_link}>
                        <p>Forgot password ?</p>
                    </Link>
                ) : (
                    null
                )
            }
            <Link to={submitLink}>
                <input type="submit" className={styles.primary_button} disabled={disabled} value={buttonName} />
            </Link>
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

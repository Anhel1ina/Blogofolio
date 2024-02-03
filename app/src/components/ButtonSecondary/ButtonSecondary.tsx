import React from "react";
import styles from './styles.module.scss';

type Props = {
    name: string
    disabled?: boolean
    classType?: string
    buttonType: string
    onClick?: () => void
}

export const ButtonSecondary = (props: Props) => {
    const {name, disabled = false, classType='button_secondary', onClick, buttonType} = props
    return (
        <input onClick={onClick} type={buttonType} className={styles[classType]} disabled={disabled} value={name}/>
    )
}

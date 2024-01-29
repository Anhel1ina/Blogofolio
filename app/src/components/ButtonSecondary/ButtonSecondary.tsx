import React from "react";
import styles from './styles.module.scss';

type Props = {
    name: string
    disabled?: boolean
    classType?: string
    onClick?: () => void
}

export const ButtonSecondary = (props: Props) => {
    const {name, disabled = false, classType='button_secondary', onClick} = props
    return (
        <input type="submit" className={styles[classType]} disabled={disabled} value={name}/>
    )
}

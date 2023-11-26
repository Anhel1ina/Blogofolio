import React from "react";
import styles from './styles.module.scss';

type Props = {
    name: string
    disabled?: boolean
    classType?: string
}

export const ButtonSecondary = (props: Props) => {
    const {name, disabled = false, classType='button_secondary'} = props
    return (
        <button className={styles[classType]} disabled={disabled}>
            {name}
        </button>
    )
}

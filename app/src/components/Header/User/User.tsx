import React, { useState } from "react";
import styles from './user-styles.module.scss';

type Props = {
    name: string
    abbr: string
}

export const User = (props: Props) => {
    const {name, abbr} = props// деструктуризация

    return (
        <div className={styles.fullBlock}>
            <div className={styles.fullBlock_child}>
                {abbr}
            </div>
            <div className={styles.fullBlock_child}>
                {name}
            </div>
        </div>
    )
}

import React from 'react'
import styles from './non_autor.module.scss'
import { NonAutorizedIcon } from './NonAutorizedIcon'

export const NonAutorized = () => {
    return (
        <div className={styles.non_author}>
            <NonAutorizedIcon/>
        </div>
    )
}

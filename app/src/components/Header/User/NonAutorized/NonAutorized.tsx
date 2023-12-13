import React from 'react'
import styles from './non_autor.module.scss'
import { NonAutorizedIcon } from './NonAutorizedIcon'
import { Link } from 'react-router-dom'

export const NonAutorized = () => {
    return (
        <Link to='signup'>
            <div className={styles.non_author}>
                <NonAutorizedIcon/>
            </div>
        </Link>
    )
}

import React from 'react'
import { SearchIcon } from './SearchIcon'
import styles from './search.module.scss'

export const Search = () => {
    return (
        <button className={styles.search}>
            <SearchIcon/>
        </button>
    )
}

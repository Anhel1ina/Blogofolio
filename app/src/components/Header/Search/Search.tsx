import React from 'react'
import { SearchIcon } from './SearchIcon'
import styles from './search.module.scss'
import { Link } from 'react-router-dom'
import { useSearchText } from '../../../helpers/SearchResultsContext'

export const Search = () => {
    return (
        <Link to='search' >
            <button className={styles.search}>
                <SearchIcon/>
            </button>
        </Link>
    )
}

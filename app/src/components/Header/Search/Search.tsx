import React from 'react'
import { SearchIcon } from './SearchIcon'
import styles from './search.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SetSearchTextAction } from '../../../store/search/action'

export const Search = () => {
    const dispatch = useDispatch()
    const find = () => dispatch(SetSearchTextAction())
    return (
        <Link to='search'>
            <button className={styles.search} onClick={find}>
                <SearchIcon/>
            </button>
        </Link>
    )
}

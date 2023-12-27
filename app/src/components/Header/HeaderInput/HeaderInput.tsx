import { ReactNode, useState } from 'react'
import styles from './header_input.module.scss'
import { DelIcon } from './DelIcon'
import { createContext, useContext } from 'react'

import { useSearchText } from '../../../helpers/SearchResultsContext'
import { useDispatch } from 'react-redux'
import { ClearTextAction, SearchTextAction } from '../../../store/search/action'
import { useSelector } from 'react-redux'
import { searchPosts } from '../../../store/search/selector'


export const HeaderInput = () => {
    const {searchText} = useSelector(searchPosts)
    const dispatch = useDispatch()
    const clear = () => dispatch(ClearTextAction(''))

    const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(SearchTextAction(e.currentTarget.value))
    };


    return (
        <div className={styles.header_input}>
            <input autoComplete='off' placeholder='Search...' type="text" onInput={inputChange} value={searchText} id="header-input" />
            <button onClick={clear}>
                {<DelIcon />}
            </button>
        </div>
    )
}


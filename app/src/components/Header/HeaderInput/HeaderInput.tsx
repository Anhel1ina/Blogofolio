import styles from './header_input.module.scss'
import { DelIcon } from './DelIcon'

import { useDispatch } from 'react-redux'
import { ClearTextAction, SearchTextAction, SetSearchTextAction } from '../../../store/search/action'
import { useSelector } from 'react-redux'
import { searchPosts } from '../../../store/search/selector'


export const HeaderInput = () => {
    const {forSearch} = useSelector(searchPosts)
    const dispatch = useDispatch()
    const clear = () => dispatch(ClearTextAction(''))

    const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(SearchTextAction(e.currentTarget.value))
    };

    return (
        <div className={styles.header_input}>
            <input autoComplete='off' placeholder='Search...' type="text" onInput={inputChange} value={forSearch || ''} id="header-input" />
            <button onClick={clear}>
                {<DelIcon />}
            </button>
        </div>
    )
}


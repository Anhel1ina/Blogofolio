import { useState } from 'react'
import styles from './header_input.module.scss'
import { DelIcon } from './DelIcon'

export const HeaderInput = () => {
    const [searchText, setSearchText] = useState('')

    const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value);
    };

    const clearInput = () => {
        setSearchText('');
    };

    return (
        <div className={styles.header_input}>
            <input placeholder='Search...' type="text" value={searchText} onChange={inputChange} id="header-input" />
            <button onClick={clearInput}>
                {<DelIcon />}
            </button>
        </div>
    )
}

import { useEffect } from 'react'
import styles from './main.module.scss'
import { Tabs } from './Tabs/Tabs'


export const MainWrapper = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.main}>
            <h1>Blog</h1>
            <Tabs/>
        </div>
    )
}

import styles from './main.module.scss'
import { Tabs } from './Tabs/Tabs'
export const MainWrapper = () => {
    return (
        <div className={styles.main}>
            <h1>Blog</h1>
            <Tabs/>
        </div>
    )
}

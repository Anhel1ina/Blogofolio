import styles from './user-styles.module.scss';

type Props = {
    name: string | undefined
    abbr: string | undefined
    onClick?: () => void
}

export const User = (props: Props) => {
    const {name, abbr, onClick} = props// деструктуризация

    return (
        <div className={styles.fullBlock} onClick={onClick}>
            <div className={styles.fullBlock_child}>
                {abbr}
            </div>
            <div className={styles.fullBlock_child}>
                {name}
            </div>
        </div>
    )
}

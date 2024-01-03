import styles from './user-styles.module.scss';

type Props = {
    name: string | undefined
    abbr: string | undefined
}

export const User = (props: Props) => {
    const {name = 'Artem Malkin', abbr = 'AM'} = props// деструктуризация

    return (
        <div className={styles.fullBlock}>
            <div className={styles.fullBlock_child}>
                {abbr}
            </div>
            <div className={styles.fullBlock_child}>
                {name}
            </div>
        </div>
    )
}

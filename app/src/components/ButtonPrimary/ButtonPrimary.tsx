import styles from './styles.module.scss';

type Props = {
    name: string
    disabled?: boolean
}

export const ButtonPrimary = (props: Props) => {
    const {name, disabled = false} = props
    return(
        <button className={styles.primary_button} disabled={disabled}>
            {name}
        </button>
    )
}
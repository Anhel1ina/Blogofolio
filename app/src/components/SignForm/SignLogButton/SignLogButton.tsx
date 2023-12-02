import styles from './sign_log_button.module.scss';

type Props = {
    name: string
    disabled?: boolean
}

export const SignLogButton = (props: Props) => {
    const {name, disabled = false} = props
    return(
        <button className={styles.primary_button} disabled={disabled}>
            {name}
        </button>
    )
}
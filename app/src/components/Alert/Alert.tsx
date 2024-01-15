import { AlertIcon } from './AlertIcon'
import styles from './alert.module.scss'

type Props = {
    showed?: boolean
    errorText: string
    closeAlert: () => void
}

export const Alert = (props: Props) => {
    const {showed = true, errorText, closeAlert} = props
    return (
        <div className={`${styles.alert} ${showed ? styles.showed : ''}`}>
            <div className={styles.alert_message}>
                <AlertIcon/>
                <p>{errorText!}</p>
            </div>
            <div>
                <button onClick={() => closeAlert()}>
                    &#10006;
                </button>
            </div>
        </div>
    )
}

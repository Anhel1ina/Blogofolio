import { AlertIcon } from './AlertIcon'
import styles from './alert.module.scss'

type Props = {
    showed?: boolean
    errorText: string

    isHide: boolean
    closeAlert: () => void
}

export const Alert = (props: Props) => {
    const {showed = true, errorText, closeAlert, isHide} = props
    return (
        <div id='alert' className={`${styles.alert} ${showed ? styles.showed : ''} ${isHide ? styles.hide : ''}`}>
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

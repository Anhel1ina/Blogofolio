import { SignLogBButton } from './SignLogButton/SignLogBButton'
import { DayThemeIcon } from './ThemeButton/DayThemeIcon'
import { NightThemeIcon } from './ThemeButton/NightThemeIcon'
import { ThemeButton } from './ThemeButton/ThemeButton'
import styles from './menu.module.scss'

type Props = {
    open: boolean
}

const data = ["Home"]

export const Menu = (props: Props) => {
    if(!props.open){
        return null
    }

    return (
        <div className={styles.menu}>
            <div className={styles.user_style}>
                {/* <User name='Artem Malkin' abbr='AM'/> */}
                <ul>
                {
                    data.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
                </ul>
            </div>
            <div>
                <ThemeButton mode={<DayThemeIcon/>} chosen={true}/>
                <ThemeButton mode={<NightThemeIcon/>} chosen={false}/>
                <SignLogBButton title='Sign in'/>
            </div>
        </div>
    )
}

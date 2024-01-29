import React from 'react'
import styles from '../MoreInnerButtons/more_inner_buttons.module.scss'

type Props = {
    typeOfPost: string
}

export const MoreInnerButtons = ({typeOfPost}: Props) => {
    return (
        <div className={`${styles.more_inner_buttons} ${styles[typeOfPost]}`}>
            <div>Edit</div>
            <div>Delete</div>
        </div>
    )
}

import React from 'react'
import { BurgerIcon } from './BurgerIcon'
import { OpenMenuIcon } from './OpenMenuIcon'
import styles from './burger.module.scss'

type Props = {
    open: boolean
    onClick: () => void
}

export const Burger = (props: Props) => {

    return (
        <div onClick={props.onClick}>
        {
            props.open ? (
                <button className={styles.open_icon}>
                    <OpenMenuIcon/>
                </button>
            ) : (
                <button className={styles.burger}>
                    <BurgerIcon/>
                </button>
            )
        }
        </div>
    )
}

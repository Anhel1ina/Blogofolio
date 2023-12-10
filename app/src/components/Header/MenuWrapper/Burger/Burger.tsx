import React from 'react'
import { BurgerIcon } from './BurgerIcon'
import { OpenMenuIcon } from './OpenMenuIcon'
import styles from './burger.module.scss'
import { useReducer, useContext, createContext, ReactNode} from 'react'
import { useBurgerContext } from '../../../helpers/BurgerContext'

export const Burger = () => {
    const { state, dispatch } = useBurgerContext()

    const open = () => dispatch({ type: 'open' })
    const close = () => dispatch({ type: 'close' })

    return (
        <div onClick={state.isOpened ? close : open}>
            {state.isOpened ? (
                <button className={styles.open_icon}>
                    <OpenMenuIcon />
                </button>
            ) : (
                <button className={styles.burger}>
                    <BurgerIcon />
                </button>
            )}
        </div>
    )
}

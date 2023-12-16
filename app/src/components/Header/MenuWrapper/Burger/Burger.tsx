import React from 'react'
import { BurgerIcon } from './BurgerIcon'
import { OpenMenuIcon } from './OpenMenuIcon'
import styles from './burger.module.scss'
import { useSelector } from 'react-redux'
import { setMenu } from '../../../../store/burgerMenu/selectors'
import { useDispatch } from 'react-redux'
import { setCloseAction, setOpenAction } from '../../../../store/burgerMenu/action'

export const Burger = () => {
    const state = useSelector(setMenu)
    const dispatch = useDispatch()

    const setOpenMenu = () => dispatch(setOpenAction())
    const setCloseMenu = () => dispatch(setCloseAction())

    return (
        <div onClick={state.isOpened ? setCloseMenu : setOpenMenu}>
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

import React from 'react'
import { BurgerIcon } from './BurgerIcon'
import { OpenMenuIcon } from './OpenMenuIcon'
import styles from './burger.module.scss'
import { useSelector } from 'react-redux'
import { setMenu } from '../../../../store/burgerMenu/selectors'
import { useDispatch } from 'react-redux'
import { setCloseAction, setHideAction, setOpenAction } from '../../../../store/burgerMenu/action'

export const Burger = () => {
    const state = useSelector(setMenu)
    const dispatch = useDispatch()

    const setOpenMenu = () => dispatch(setOpenAction())
    const setCloseMenu = () => {
        dispatch(setHideAction())
        setTimeout(() => {
            dispatch(setCloseAction())
        }, 700);
    } 

    return (
        <div onClick={state.isOpened ? setCloseMenu : setOpenMenu}>
            {state.isOpened ? (
                <button id='burger_open' className={styles.open_icon}>
                    <OpenMenuIcon />
                </button>
            ) : (
                <button id='burger_close' className={styles.burger}>
                    <BurgerIcon />
                </button>
            )}
        </div>
    )
}

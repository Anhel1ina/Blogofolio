export type BurgerState = {
    isOpened?: boolean
    isHide?: boolean
}

export type BurgerAction = {
    type: 'open' | 'close' | 'hide'
}
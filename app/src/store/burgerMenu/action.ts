import { BurgerAction } from "./types"

export const setOpenAction = (): BurgerAction => ({
    type: 'open'
})

export const setCloseAction = (): BurgerAction => ({
    type: 'close'
})
import { BurgerState, BurgerAction } from "./types"

export const burgerInitState: BurgerState = {//burger inintial state
    isOpened: false
}

export const burgerReducer = (state = burgerInitState, action: BurgerAction): BurgerState => {
    switch (action.type) {
        case 'open':
            return {
                isOpened: true,
                isHide: false
            }
        case 'close':
            return {
                isHide: false,
                isOpened: false
            }
        case 'hide':
            return {
                ...state,
                isHide: true
            }
        default:
            return state
    }
}
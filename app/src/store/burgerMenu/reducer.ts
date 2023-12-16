import { BurgerState, BurgerAction } from "./types"

export const burgerInitState: BurgerState = {//burger inintial state
    isOpened: false
}

export const burgerReducer = (state = burgerInitState, action: BurgerAction): BurgerState => {
    switch (action.type) {
        case 'open':
            return {
                isOpened: true
            }
        case 'close':
            return {
                isOpened: false
            }
        default:
            return state
    }
}
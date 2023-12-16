import { AuthAction } from "./types"

export const loginAction = (): AuthAction => ({
    type: 'login',
    userName: 'Artem Malkin',
    initials: 'AM'
})

export const logoutAction = (): AuthAction => ({
    type: 'logout'
})
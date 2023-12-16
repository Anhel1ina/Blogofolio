export type AuthState = {
    isLoged: boolean
    userName?: string
    initials?: string
}

export type AuthAction = {
    type: string
    userName?: string
    initials?: string
}
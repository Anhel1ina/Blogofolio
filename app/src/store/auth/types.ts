export type AuthState = {
    isLoged: boolean
    userName?: string
    initials?: string

    email?: string
    password?: string

    token?: string
    errors?: any
}

export type AuthAction = {
    type: string
    userName?: string
    initials?: string

    email?: string
    password?: string

    token?: string
    errors?: any 
}
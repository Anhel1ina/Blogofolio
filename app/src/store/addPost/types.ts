export type addPostErrorsType = {
    title?: string
    image?: string
    description?: string
}

export type AddPostType = {
    isPostAdded?: boolean
    title?: string
    image?: string
    description?: string

    errors?: Omit<AddPostType, 'errors, isPostAdded'>
}

export type addPostActionType = {
    type: string
    title?: string
    image?: string
    description?: string
    errors?: addPostErrorsType
}
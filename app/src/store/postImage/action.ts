import { ImageAction } from "./types"

export const OpenImageAction = (id?: number): ImageAction => ({
    type: 'opened',
    idOfPost: id
}
)

export const CloseImageAction = (): ImageAction => ({
    type: 'closed'
})
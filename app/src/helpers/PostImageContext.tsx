import { createContext, ReactNode, useReducer, useContext } from "react"
import { ImageState, ImageAction } from "../store/postImage/types"
import { ImageInitState, imageReducer } from "../store/postImage/reducer"
import { OpenImageAction, CloseImageAction } from "../store/postImage/action"

type ImageContextType = {
    state: ImageState
    open: () => void
    close: () => void
}

export const ImageContext = createContext<ImageContextType>({} as ImageContextType)

type ProviderProps = {
    children: ReactNode
}


export const ImageContextProvider = ({children}: ProviderProps) => {
    const [state, dispatch] = useReducer(imageReducer, ImageInitState)


    const value = {
        state: state,
        open: () => dispatch(OpenImageAction(state.idOfPost)),
        close: () => dispatch(CloseImageAction())
    }

    return(
        <ImageContext.Provider value={value}>
            {children}
        </ImageContext.Provider>
    )
}

export const useImageContext = () => {
    return useContext(ImageContext)
}
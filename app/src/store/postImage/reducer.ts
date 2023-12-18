import { current } from "@reduxjs/toolkit"
import { ImageState, ImageAction } from "./types"
import { act } from "react-dom/test-utils"

export const ImageInitState: ImageState = {
    isOpened: false,
    idOfPost: 1
}

export const imageReducer = (state = ImageInitState, action: ImageAction): ImageState => {
    // debugger
    switch(action.type){
        case 'opened':
            return{
                isOpened: true,
                idOfPost: action.idOfPost
            }  
        case 'closed':
            return{
                isOpened: false
            }
        case 'next':
        case 'prev':
            return{
                isOpened: true,
                idOfPost: action.idOfPost
            }
        default: return state
    }
}
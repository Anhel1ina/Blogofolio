import { combineReducers } from "redux";
import { themeReducer } from "./theme/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { burgerReducer } from "./burgerMenu/reducer";
import { authReducer } from "./auth/reducer";


//add all reducers from contexts
const rootReducer = combineReducers({
    theme: themeReducer,
    menu: burgerReducer,
    auth: authReducer
})

const store = configureStore({
    reducer: rootReducer
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {
    store as appStore
}
import { Action, combineReducers } from "redux";
import { themeReducer } from "./theme/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { burgerReducer } from "./burgerMenu/reducer";
import { authReducer } from "./auth/reducer";
import { imageReducer } from "./postImage/reducer";
import { tabReducer } from "./tabs/reducer";
import { postReducer } from "./posts/reducer";
import { ThunkAction} from "redux-thunk";
import { likeReducer } from "./likes/reducer";
import { searchReducer } from "./search/reducer";
import { addToFavsReducer } from "./favs/reducer";

//add all reducers from contexts
const rootReducer = combineReducers({
    theme: themeReducer,
    menu: burgerReducer,
    auth: authReducer,
    openPostImage: imageReducer,
    tabs: tabReducer,
    posts: postReducer,
    like: likeReducer,
    search: searchReducer,
    favs: addToFavsReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()//add concat to use other features
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export {
    store as appStore
}
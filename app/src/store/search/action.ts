import { SearchActionType } from "./types"

export const SearchTextAction = (searchText: string): SearchActionType => ({
    type: 'SEARCH',
    searchText: searchText
})

export const ClearTextAction = (clearText: string): SearchActionType => ({
    type: 'CLEAR',
    searchText: clearText
})
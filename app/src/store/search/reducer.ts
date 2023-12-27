import { SearchType, SearchActionType } from "./types"

const SearchInitState: SearchType = {
    searchText: ''
}

export const searchReducer = (state = SearchInitState, action: SearchActionType): SearchType => {
    switch(action.type){
        case 'SEARCH':
            return{
                searchText: action.searchText
            }
        case 'CLEAR':
            return{
                searchText: action.searchText
            }
        default: return state
    }
}
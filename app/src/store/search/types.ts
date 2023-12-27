export type SearchType = {
    searchText: string
}
export type SearchActionType = {
    type: 'SEARCH' | 'CLEAR'
    searchText: string
}
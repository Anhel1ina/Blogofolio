import React from 'react'
import { useReducer, useContext, createContext, ReactNode, useState} from 'react'

// type SearchTextContextType = {
//     searchText: string
//     setSearchText: React.Dispatch<React.SetStateAction<string>>
//     clearSearchText: () => void
// }

// const SearchTextContext = createContext<SearchTextContextType>({} as SearchTextContextType)

// type ProviderProps = {
//     children: ReactNode
// }

// export const SearchTextProvider = ({ children }: ProviderProps) => {
//     const [searchText, setSearchText] = useState('');

//     const clearSearchText = () => {
//         setSearchText('')
//     }

//     const contextValue: SearchTextContextType = {
//         searchText,
//         setSearchText,
//         clearSearchText,
//     }

//     return (
//         <SearchTextContext.Provider value={contextValue}>
//             {children}
//         </SearchTextContext.Provider>
//     )
// }

// export const useSearchText = () => {
//     const context = useContext(SearchTextContext)
//     return context
// };

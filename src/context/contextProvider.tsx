import { useState, createContext } from "react";

type StateContextProviderProps = {
    children:React.ReactNode
}

type StateContextType = {
    sidebar:boolean;
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>
    search:string;
    setSearch:React.Dispatch<React.SetStateAction<string>>
    clicksearch:boolean
    setClicksearch: React.Dispatch<React.SetStateAction<boolean>>
}

export const StateContext = createContext<StateContextType | null>(null)

export const ContextProvider = ({children}:StateContextProviderProps) => {
    const [sidebar , setSidebar] = useState(false)
    const [search, setSearch] = useState('')
    const [clicksearch, setClicksearch] = useState(false)
    return (
        <StateContext.Provider value={{
            sidebar, 
            setSidebar,
            search,
            setSearch,
            clicksearch,
            setClicksearch
        }}>
            {children}
        </StateContext.Provider>
    )
}



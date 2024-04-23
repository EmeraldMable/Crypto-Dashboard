import { useState, createContext, useEffect } from "react";

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
    mode:any,
    setMode: React.Dispatch<React.SetStateAction<any>>
}

export const StateContext = createContext<StateContextType | null>(null)

export const ContextProvider = ({children}:StateContextProviderProps) => {
    const [sidebar , setSidebar] = useState(false)
    const [search, setSearch] = useState('')
    const [clicksearch, setClicksearch] = useState(false)

   const selectedTheme = localStorage.getItem('theme')
   const [mode, setMode] = useState(selectedTheme)
   

   useEffect(() => {
     document.querySelector('#root')?.setAttribute('data-theme' , `${selectedTheme}`)
   },[])
    return (
        <StateContext.Provider value={{
            sidebar, 
            setSidebar,
            search,
            setSearch,
            clicksearch,
            setClicksearch,
            mode,
            setMode
        }}>
            {children}
        </StateContext.Provider>
    )
}



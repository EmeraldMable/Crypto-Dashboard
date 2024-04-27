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
    setMode: React.Dispatch<React.SetStateAction<any>>;
    date: any
    setDate: React.Dispatch<any>
    events: any
    setEvents: React.Dispatch<React.SetStateAction<any>>
    current: number
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

function getDate() {
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()
    return `${month}/${date}/${year}`
}

export const StateContext = createContext<StateContextType | null>(null)

export const ContextProvider = ({children}:StateContextProviderProps) => {
    const eventData = [
        {
            id:'1',
            title:'Morning Meeting',
            start:'2024-04-30'
        },
        {
            id:'2',
            title:'Report',
            start:'2024-04-28'
        }
    ]
    const [sidebar , setSidebar] = useState(false)
    const [search, setSearch] = useState('')
    const [clicksearch, setClicksearch] = useState(false)
    const [date, setDate] = useState(getDate())
   const selectedTheme = localStorage.getItem('theme')
   const [mode, setMode] = useState(selectedTheme)
    const [events, setEvents] = useState(eventData)
   const [current, setCurrent] = useState(0)
  

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
            setMode,
            date, 
            setDate,
            events, 
            setEvents,
            current, 
            setCurrent
        }}>
            {children}
        </StateContext.Provider>
    )
}



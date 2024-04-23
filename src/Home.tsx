
import { useEffect } from 'react'
import './App.css'
import { StateContext } from './context/contextProvider'
import { useContext } from 'react'

function App() {
  const states = useContext(StateContext)
    useEffect(() => {
      states?.setSidebar(false)
    },[])

  return (
    <>
      Home
    </>
  )
}

export default App

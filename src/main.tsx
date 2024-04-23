import React from 'react'
import Nav from './components/Nav'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import Sidebar from './components/Sidebar.tsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import {ContextProvider} from './context/contextProvider'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
    <Nav/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)

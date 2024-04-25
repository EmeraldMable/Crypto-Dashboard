import React from 'react'
import Nav from './components/Nav'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import Sidebar from './components/Sidebar.tsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import {ContextProvider} from './context/contextProvider'
import Schedule from './pages/Schedule.tsx'
import Data from './pages/Data.tsx'
import Member from './pages/Members.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
    <Nav/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Schedule' element={<Schedule/>}></Route>
      <Route path='/data' element={<Data/>}></Route>
      <Route path='/members' element={<Member/>}></Route>
    </Routes>
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)

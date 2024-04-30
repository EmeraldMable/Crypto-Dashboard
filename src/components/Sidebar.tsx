import { IoMdCloseCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { StateContext } from "../context/contextProvider";
import { useContext, useEffect } from "react";
import {links} from '../data/data'

const Sidebar = () => {

  const sidebar = useContext(StateContext)


  const chosenMode = (value: string) :boolean => sidebar?.mode === value

  const handleMode = (e: React.ChangeEvent<HTMLInputElement>) :void=> {
    sidebar?.setMode(e.currentTarget.value)
    if(sidebar?.mode === 'light'){
        document.querySelector('#root')?.setAttribute('data-theme' , 'dark')
        localStorage.setItem('theme' , 'dark')
    }else{
        document.querySelector('#root')?.setAttribute('data-theme' , 'light')
        localStorage.setItem('theme' , 'light')
    }
    sidebar?.setSidebar(false)
  }

  useEffect(() => {
    if(sidebar?.sidebar){
      document.body.style.overflowY = 'hidden'
   }else{
      document.body.style.overflowY = 'scroll'
   }
  })
 

 
  return (
    <>
    {  sidebar?.sidebar ?
      <div className='sidebar flex items-center text-left transition-transform ease-in-out'>
       
        <div className='leftside w-52 md:w-56 lg:w-68 min-h-screen relative rounded-r-md'>   
        <IoMdCloseCircle className="absolute right-4 top-5" size={24}
        onClick={() => sidebar?.setSidebar(!sidebar.sidebar)}/>
        <h2 id="logo-small" className="ibm-plex-sans-condensed-regular text-xl mx-3 md:mx-4 lg:mx-6 my-4">Step to NEX
        <span>T</span></h2>

        <div className="ibm-plex-sans-condensed-regular flex flex-col mx-6 md:mx-6 lg:mx-12 my-5 md:text-lg">
            {
              links.map((link) => (
                <NavLink to={`${link?.route}`}  key={link?.id}
            onClick={()=> sidebar.setSidebar(false)}
            className={({isActive}) => isActive ? 'triangle translate-x-4 p-3' : ' hover:translate-x-6 p-3'}>
                {link?.name}
            </NavLink>
              ))
            }
           
            
        </div>
           <div className=" mx-4 md:mx-4 lg:mx-6 md:text-lg">
            <span className="ibm-plex-sans-condensed-semibold block">Theme</span>
           <div className="ibm-plex-sans-condensed-regular flex flex-col justify-center">
               <div className="mb-3 mt-3">
               <input type="radio" id="radio" value='light' name="mode" 
                checked={chosenMode('light')}
                onChange={handleMode} /> Light Mode
               </div>
               <div>
               <input type="radio" id="radio" value='dark'
               checked={chosenMode('dark')}
                name="mode" onChange={handleMode}/> Dark Mode
               </div>
           </div>
           </div>
        </div>
       <div className=' bg-transparent flex-1 '> </div>
       
    </div> : <div className=" -translate-y-20 "></div>
    }
    </>
  )
}

export default Sidebar
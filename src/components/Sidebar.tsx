import { IoMdCloseCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { StateContext } from "../context/contextProvider";
import { useContext } from "react";

const Sidebar = () => {

  const sidebar = useContext(StateContext)
  console.log(sidebar?.mode)

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
  }

 

 
  return (
    <>
    {  sidebar?.sidebar ?
      <div className='sidebar flex items-center text-left transition-transform ease-in-out'>
       
        <div className='leftside w-52 md:w-56 lg:w-68 min-h-screen relative rounded-r-md'>   
        <IoMdCloseCircle className="absolute right-4 top-5" size={24}
        onClick={() => sidebar?.setSidebar(!sidebar.sidebar)}/>
        <h2 id="logo-small" className="ibm-plex-sans-condensed-regular text-xl mx-3 md:mx-4 lg:mx-6 my-4">CRYPTO NEX
        <span>T</span></h2>

        <div className="ibm-plex-sans-condensed-regular flex flex-col mx-6 md:mx-6 lg:mx-12 my-5 md:text-lg">
            <NavLink to='/' 
            onClick={()=> sidebar.setSidebar(false)}
            className={({isActive}) => isActive ? 'triangle translate-x-4 p-3' : ' hover:translate-x-6 p-3'}>
                Dashboard
            </NavLink>
           
            <NavLink to='/' className={({isActive}) => isActive ? ' hover:translate-x-4 p-3' : 'hover:translate-x-4 p-3'}>
                Wallet
            </NavLink>
            <NavLink to='/' className={({isActive}) => isActive ? 'hover:translate-x-4 p-3' : 'hover:translate-x-4 p3'}>
                Transactions
            </NavLink>
            <NavLink to='/' className={({isActive}) => isActive ? 'hover:translate-x-4 p-3' : 'hover:translate-x-4 p-3'}>
                Charts
            </NavLink>
            <NavLink to='/' className={({isActive}) => isActive ? 'hover:translate-x-4 p-3' : 'hover:translate-x-4 p-3'}>
                Mail
            </NavLink>
           
            <NavLink to='/' className={({isActive}) => isActive ? 'hover:translate-x-4 p-3' : 'hover:translate-x-4 p-3'}>
                Log Out
            </NavLink>
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
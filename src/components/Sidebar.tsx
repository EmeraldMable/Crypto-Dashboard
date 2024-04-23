import { IoMdCloseCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { StateContext } from "../context/contextProvider";
import { useContext } from "react";

const Sidebar = () => {

  const sidebar = useContext(StateContext)

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
            <NavLink to='/' className={({isActive}) => isActive ? 'triangle translate-x-4 p-3' : ' hover:translate-x-6 p-3'}>
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
       
        </div>
       <div className=' bg-transparent flex-1 '> </div>
       
    </div> : <div className=" -translate-y-20 "></div>
    }
    </>
  )
}

export default Sidebar
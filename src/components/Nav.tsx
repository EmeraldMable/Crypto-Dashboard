
import { MdOutlineLocationSearching } from "react-icons/md";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { MdNotifications } from "react-icons/md";
import { useContext } from "react";
import { StateContext } from "../context/contextProvider";
import { Link } from "react-router-dom";
import { IoIosRibbon } from "react-icons/io";


const Nav = () => {
    const states = useContext(StateContext)
   
   
  return (
    <div className="nav mx-1 pt-5 md:mx-4 lg:mx-6 relative">
        <div id="menu" onClick={() => states?.setSidebar(!states.sidebar)} >
            <span className="first-bar"></span>
            <span className="second-bar"></span>
        </div>
        <Link id="logo" to='/' className="ibm-plex-sans-condensed-regular hidden md:block lg:block  text-xl mx-0"
        >
          Step to NEX
        <span>T</span></Link>

        <div className="flex absolute right-5 md:right-10 lg:right-10 items-center ">


        {
          states?.clicksearch ?
          <div className="searchbox flex items-center mx-2 md:mx-4 lg:mx-6 w-32 md:w-56 lg:w-72 p-3 transition-[width] ">
        <MdOutlineLocationSearching style={{marginRight:'10px'  , color:'white'}} size={20}
        className="hover:scale-125"
        onClick={() => states?.setClicksearch(!states.clicksearch)}/>

        <input type="text" id="textbox" className="ibm-plex-sans-condensed-regular w-32 md:w-56 lg:w-72"
        placeholder="Search"
        value={states?.search} onChange={(e) => states?.setSearch(e.target.value) }/>
        </div>
        :
        <div className="icon w-8 transition-transform ease-in-out">
              <MdOutlineLocationSearching style={{marginRight:'10px' , color:'white'}} size={20}
                className="hover:scale-125"
              onClick={() => states?.setClicksearch(!states.clicksearch)}/>
              <p className="tooltip">Search</p>
         </div>
        }
       
      
          <div className="icon2 relative">
          <p className="noti-nu absolute -top-1 left-3 ">5</p>
         <Link to='/messages/1'>
         <TbMessageCircle2Filled size={26}
         style={{color:'white'}} className="hover:scale-125 transition-transform ease-in-out"/>
         </Link>
          <p className="tooltip2">Messages</p>
          </div>
        
        <div className="icon3 relative">
         
          <div>
          <p className="noti-nu absolute -top-1 left-5 ">3</p>
          <Link to='/noti'>
          <MdNotifications size={26} style={{marginLeft:'8px' , marginRight:'8px' , color:'white'}} 
          className="hover:scale-125 transition-transform ease-in-out"/>
         </Link>
        </div>
        <p className="tooltip3" >Noti</p>
        </div>
        <div className="icon4 relative">
        <div className=" w-10 rounded-full relative hover:scale-125 dark:border-white transition-transform ease-in-out">
        <img className="rounded-full border-2 border-white" src="https://variety.com/wp-content/uploads/2021/12/Bitcoin-Cryptocurrency-Placeholder.jpg" alt="profile pic" />
       
        </div>
       <div className="tooltip4 z-50 rounded-2xl ">
       <IoIosRibbon size={32} className="absolute left-3 top-3"/>
        <img className="w-12 h-12 rounded-full mt-6 ml-16" src="https://variety.com/wp-content/uploads/2021/12/Bitcoin-Cryptocurrency-Placeholder.jpg" alt="profile pic"/>
        <div className="name-card mt-5 mb-10 text-lg">
          <p className="ibm-plex-sans-condensed-regular mb-2 "> Name : Josh Steve</p>
          <p className="ibm-plex-sans-condensed-regular mb-2">Position : Sales Executive</p>
          <span className="ibm-plex-sans-condensed-regular">Joined in 12.01.2023</span>
          <p className="mt-5 text-right hover:underline cursor-pointer">Edit</p>
        </div>
       </div>
        </div>
        
      </div>

        
    </div>
  )
}

export default Nav
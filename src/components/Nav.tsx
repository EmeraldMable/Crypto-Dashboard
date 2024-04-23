
import { MdOutlineLocationSearching } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { MdNotifications } from "react-icons/md";
import { useContext } from "react";
import { StateContext } from "../context/contextProvider";


const Nav = () => {
    const states = useContext(StateContext)
   
   
  return (
    <div className="nav mx-1 my-1 md:mx-4 lg:mx-6 relative">
        <div id="menu" onClick={() => states?.setSidebar(!states.sidebar)} >
            <span className="first-bar"></span>
            <span className="second-bar"></span>
        </div>
        <h2 id="logo" className="ibm-plex-sans-condensed-regular hidden md:block lg:block  text-xl mx-0">CRYPTO NEX
        <span>T</span></h2>

        <div className="flex absolute right-5 md:right-10 lg:right-10 items-center ">


        {
          states?.clicksearch ?
          <div className="searchbox flex items-center mx-2 md:mx-4 lg:mx-6 w-32 md:w-56 lg:w-72 p-3 transition-[width] ">
        <MdOutlineLocationSearching style={{marginRight:'10px' }} size={20}
        className="hover:scale-125"
        onClick={() => states?.setClicksearch(!states.clicksearch)}/>

        <input type="text" id="textbox" className="ibm-plex-sans-condensed-regular w-32 md:w-56 lg:w-72"
        placeholder="Search"
        value={states?.search} onChange={(e) => states?.setSearch(e.target.value) }/>
        </div>
        :
        <div className="icon w-8 transition-transform ease-in-out">
              <MdOutlineLocationSearching style={{marginRight:'10px'}} size={20}
                className="hover:scale-125"
              onClick={() => states?.setClicksearch(!states.clicksearch)}/>
              <p className="tooltip">Search</p>
         </div>
        }
       
      
          <div className="icon2 relative">
          <CiMail size={26} className="hover:scale-125 transition-transform ease-in-out"/>
          <p className="tooltip2">Mails</p>
          </div>
        
        <div className="icon3 relative">
        <MdNotifications size={26} style={{marginLeft:'8px' , marginRight:'8px'}} 
        className="hover:scale-125 transition-transform ease-in-out"/>
        <p className="tooltip3">Noti</p>
        </div>
        <div className="icon4 relative">
        <div className=" w-10 rounded-full relative hover:scale-125 dark:border-white transition-transform ease-in-out">
        <img className="rounded-full border-2 border-black" src="https://variety.com/wp-content/uploads/2021/12/Bitcoin-Cryptocurrency-Placeholder.jpg" alt="profile pic" />
       
        </div>
        <p className="tooltip4">Profile</p>
        </div>
        
      </div>

        
    </div>
  )
}

export default Nav
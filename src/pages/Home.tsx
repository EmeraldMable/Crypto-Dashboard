
import { useEffect } from 'react'
import '../App.css'
import { StateContext } from '../context/contextProvider'
import { useContext } from 'react'
import Monitor from '../components/Monitor'
import LineChart from '../components/LineChart'
import { formatDate } from '@fullcalendar/core/index.js';
import { Link } from 'react-router-dom'
import { RxDrawingPinFilled } from "react-icons/rx";
import { GraphData as data , updates , geodata , features} from '../data/data'
import Button from '../components/Button'
import { GoPlusCircle } from "react-icons/go";
import Geo from '../components/Geo'
import Breadcrumb from '../components/Breadcrumb'


function App() {
  const states = useContext(StateContext)
  console.log(states?.events)
    useEffect(() => {
      states?.setSidebar(false)
      window.scrollTo(0,0)
    },[])

  return (
    <>
    <div className=' mx-4 lg:mx-16 my-8 md:mx-10 '>
      <Breadcrumb/>
     <div className='flex'>
     <h1 className='ibm-plex-sans-condensed-semibold text-white text-3xl flex-1'>Dashboard</h1>
      <Button type='Add New' className='button mx-6 text-sm p-2 hover:scale-95 cursor-pointer' icon={<GoPlusCircle/>}/>
     </div>
      <Monitor/>
    </div>


    <h2 className='ibm-plex-sans-condensed-semibold text-2xl text-white mx-5 md:mx-10 lg:mx-20 mt-5'>Report Graph</h2>
    <div className='flex flex-col lg:flex-row'>

  
   
   <Link className='data-link h-80 flex-1 gap-3 mb-10 lg:mx-5 '
   to='/data'>
    
   <LineChart data={data} />
   <p className='link-tooltip absolute -bottom-4'> Click to go to Data</p>
   </Link>
   
   <Link className='list w-full md:w-1/2 md:mr-36 lg:w-64 h-full mx-auto mr-10'
  to='/Schedule'>
  <h2 className='ibm-plex-sans-condensed-semibold mb-4 text-center pt-3 text-white '>
    <RxDrawingPinFilled className='absolute left-8 top-3 ' size={20}/>My Schedule</h2>
    <p className='schedule-tooltip z-50'> Click to go to Calender</p>
    {
      states?.events.map((event:any) => (
        <div className='addtodo z-40 mb-1' key={event.id}>
          <p>{event.title}</p>
          <p>{formatDate(event.start)}</p>
        </div>
      ))
    }
   
  </Link>

    </div>
  
    <h2 className='ibm-plex-sans-condensed-semibold text-2xl text-white mx-5 md:mx-10 lg:mx-20 mt-10 mb-5'>Geography Graph</h2>
    <div className='flex flex-col lg:flex-row'>
    <Link className='data-link h-80 flex-1 gap-3 mb-10 lg:mx-5 '
   to='/data'>
  <Geo data={geodata} features={features} dashboard={true} />
  <p className='link-tooltip absolute -bottom-4'> Click to go to Data</p>
   </Link>

    <Link className="list w-full md:w-1/2 md:mr-36 lg:w-64 h-full mx-auto mt-10 md:mt-0 lg:mt-10 mr-10"
  to='/update'>
  <h2 className='ibm-plex-sans-condensed-semibold mb-4 text-center pt-3 text-white '>
   News & Updates</h2>
   <p className='schedule-tooltip z-50'> Click to go to check news</p>
        {
            updates.map((update) => (
                <div className="addtodo mb-1" key={update.id}> 
                   <div className="flex ">
                   <h2 className="flex-1 mb-2 tracking-wide">{ update.title}</h2>
                    <div className="flex flex-col gap-1">
                   <span>{update.time}</span>
                   <span>{update.date}</span>
                   </div>
                   </div>
                   
                </div>
            ))
        }
     
    </Link>
   
   

    </div>
 
  
    </>
  )
}

export default App



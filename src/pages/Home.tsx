
import { useEffect } from 'react'
import '../App.css'
import { StateContext } from '../context/contextProvider'
import { useContext } from 'react'
import Monitor from '../components/Monitor'
import LineChart from '../components/LineChart'
import { formatDate } from '@fullcalendar/core/index.js';
import { Link } from 'react-router-dom'
import { RxDrawingPinFilled } from "react-icons/rx";
import { GraphData as data } from '../data/data'

function App() {
  const states = useContext(StateContext)
  console.log(states?.events)
    useEffect(() => {
      states?.setSidebar(false)
    },[])

  return (
    <>
    <div className=' mx-4 lg:mx-16 my-8 md:mx-10 '>
      <h1 className='ibm-plex-sans-condensed-semibold text-white text-3xl'>Dashboard</h1>
      <Monitor/>
    </div>

    <div className='flex flex-col lg:flex-row'>

   <Link className='data-link h-72 flex-1 gap-3 mb-10 lg:mx-5 relative'
   to='/data'>
   <LineChart data={data} mode={states?.mode}/>
   <p className='link-tooltip absolute -bottom-4'> Click to go to Data</p>
   </Link>
  
  
  <Link className='list w-2/3 md:w-64 lg:w-64 h-full mx-auto relative right-4'
  to='/Schedule'>
  <h2 className='ibm-plex-sans-condensed-semibold mb-4 text-center pt-3 text-white '>
    <RxDrawingPinFilled className='absolute left-8 top-3 ' size={20}/>My Schedule</h2>
    <p className='schedule-tooltip z-50'> Click to go to Calender</p>
    {
      states?.events.map((event) => (
        <div className='addtodo z-40' key={event.id}>
          <p>{event.title}</p>
          <p>{formatDate(event.start)}</p>
        </div>
      ))
    }
   
  </Link>
   

    </div>
 
    </>
  )
}

export default App

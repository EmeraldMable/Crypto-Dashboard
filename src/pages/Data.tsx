
import { GraphData as data , geodata , features } from '../data/data'
import LineChart from '../components/LineChart'
import { StateContext } from '../context/contextProvider'
import { useContext } from 'react'
import Geo from '../components/Geo'

const Data=() => {
    const graphContext = useContext(StateContext)
    return (
       <div className='data mt-5 '>
           <h2 className='ibm-plex-sans-condensed-semibold  text-center text-3xl mb-10'>Data</h2>
         <div className='line-chart mt-2 mx-5'>
         <h2 className='ibm-plex-sans-condensed-regular text-xl pl-8'>Report Graph</h2>
            <LineChart data={data} mode={graphContext?.mode}/>
           
        </div>


        <div className='geo-chart mt-2 mx-5 mb-5'>
        <h2 className='ibm-plex-sans-condensed-regular text-xl pl-8 mb-10 mt-10'>Geography Graph</h2>
        <Geo data={geodata} features={features} dashboard={false}/>
        </div>
       
       </div>
    )
}



export default Data
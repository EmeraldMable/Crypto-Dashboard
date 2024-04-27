
import { GraphData as data , geodata , features } from '../data/data'
import LineChart from '../components/LineChart'
import { StateContext } from '../context/contextProvider'
import { useContext } from 'react'
import Geo from '../components/Geo'
import Breadcrumb from '../components/Breadcrumb'

const Data=() => {
    const graphContext = useContext(StateContext)
    return (
       <div className='data'>
        <div className='mx-4 lg:mx-16 mt-5 md:mx-10'>
        <Breadcrumb />
        </div>
           <h2 className='ibm-plex-sans-condensed-semibold mx-4 lg:mx-16 mt-3 md:mx-10 text-4xl mb-8'>Data</h2>
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

import { GraphData as data } from '../data/data'
import LineChart from '../components/LineChart'
import { StateContext } from '../context/contextProvider'
import { useContext } from 'react'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Data=() => {
    const graphContext = useContext(StateContext)
    return (
       <div className='data'>
         
         <div className='line-chart mt-2'>
         <h2 className='ibm-plex-sans-condensed-semibold  text-center text-3xl'>Data</h2>
            <LineChart data={data} mode={graphContext?.mode}/>
        </div>
       </div>
    )
}



export default Data
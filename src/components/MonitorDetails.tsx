import { useContext } from "react"
import { StateContext } from "../context/contextProvider"
import { PiArrowBendLeftUpBold } from "react-icons/pi";
import { PiArrowBendLeftDownBold } from "react-icons/pi";

type propsType = {
    title:String,
    icon:React.ReactElement<any>,
    percentage:string,
    rate:string,
    number:string
}

const MonitorDetails = ({title, icon, percentage, rate , number }:propsType) => {
   const monitorCon = useContext(StateContext)
  return (
    <div className="card w-full md:w-80 lg:w-80 p-3 md:p-5 lg:p-5 mx-auto rounded-md">
        <div className="flex items-center mb-4 gap-5 shadow-lg p-2">
            <div className="flex items-center gap-2 flex-1">
            <h3 className="ibm-plex-sans-condensed-regular text-2xl">
            {title}
            </h3> 
            {icon}
        </div>
        <span className=" block text-sm">{monitorCon?.date}</span>
        </div>
      
       
      
      
        <div className={`flex justify-center`}>
        <p className="rounded-full shadow-xl border-4 w-20 h-20 flex items-center justify-center">{number}</p>
        </div>
   
        <div className="flex items-center">
            <span className="mr-1">{percentage} %</span>
            <span>{rate == 'increase' ? <PiArrowBendLeftUpBold color="yellow"/> : <PiArrowBendLeftDownBold color="brown"/>}</span>
        </div>
    </div>
  )
}

export default MonitorDetails
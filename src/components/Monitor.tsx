
import MonitorDetails from "./MonitorDetails"
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { GiTrafficLightsReadyToGo } from "react-icons/gi";



const Monitor = () => {

   
   
  return (
    <div className="monitor-card flex  flex-col md:flex-row lg:flex-row gap-1 my-6 md:my-10 lg:my-10" >
       <MonitorDetails title='Sales' icon={<MdOutlineShoppingCartCheckout/>} percentage='5' rate='increase' number='145'/>
       <MonitorDetails title='Revenue'  icon={<FaDollarSign/>} percentage='10' rate='increase' number='$309'/>
       <MonitorDetails title='Customers'  icon={<GoPeople/>} percentage='3' rate='decrease' number='45'/>
       <MonitorDetails title='Traffic ' icon={<GiTrafficLightsReadyToGo/>} percentage='2' rate='increase' number='1,875'/>
    </div>
  )
}

export default Monitor
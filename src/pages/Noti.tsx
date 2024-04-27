import { messages , mails } from "../data/data"
import { Link } from "react-router-dom"

const Noti = () => {
  return (
    <div className=' mx-4 lg:mx-12 mt-10 md:mx-10 '>
      <h1 className='ibm-plex-sans-condensed-semibold  text-3xl text-white'>Notifications</h1>
      

      <div className="flex gap-5 flex-col lg:flex-row overflow-auto relative">
        <div className="message md:w-64 lg:w-64 flex-1 text-center">
        <h2 className="mb-8 text-xl tracking-wide">Messages</h2>
      
        {
          messages.map((message) => (
            <Link className="mailbox flex gap-20 mb-1 items-center mx-10 rounded-md "
            to={`/messages/${message.id}`}
            key={message.id}>
                <span className="message-tooltip absolute -top-10 left-0 z-50 p-2 rounded-md">Click to go to chatbox.</span>
              <div className="flex pl-2">
                <span>From</span>
                <p className=" pl-6 w-full">{message.from}</p>
              </div>
               {
                message.messages?.map((each,index) => (
                 <div key={index}>
                     <p className=" w-full">{each.send.slice(0,20)}...</p>
                  <p className="w-2/3">{each.time}</p>
                  <p className="w-2/3">{each.date}</p>
                 </div>
                ))
               }
                {
                  message.seen == true ?
                  <p className="seen mr-5">Seen</p>
                  : <p  className="new mr-5">New</p>
                }
            </Link>
          ))
        }
        </div>
        <div className="mail w-full md:w-64 lg:w-64 text-center mx-4 lg:mx-12  md:mx-10  md:mt-8 lg:mt-8">
          <h2 className="mb-5 text-xl tracking-wide mt-5">Mails</h2>
          {
          mails.map((mail) => (
            <div className="mailbox flex flex-col mb-1 rounded-md " key={mail.id}>
               <div className="flex ">
               <span className="text-left flex-1">From</span>
               <span className={mail.checked == false ? 'mail-new'  : ''}>{mail.checked == true ? 'checked'  : 'New'}</span>
               </div>
              <div className="flex flex-col items-center">
               
                <p className="text-lg mt-3 mb-6">{mail.from}</p>
             
             
                <div className="flex gap-10">
                <p className=" opacity-85">{mail.time}</p>
                <p className=" opacity-85">{mail.date}</p>
                </div>
                </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Noti
import { messages } from '../data/data'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { IoMdSend } from "react-icons/io";
import { Link } from 'react-router-dom';
import { SiTicktick } from "react-icons/si";

const Message = () => {
    const param = useParams()
    
  return (
    <div className=' mx-4 mt-5 lg:mx-16 md:mx-10 pb-10'>
        <h1 className='ibm-plex-sans-condensed-semibold mb-5 text-white text-3xl flex-1'>Message box</h1>
       <div className='flex flex-col lg:flex-row'>
        <div className='flex lg:block w-30 relative gap-6'>
           {
            messages.map((message)  => message.id == param.id ? 
           <div className='active mt-6'>
            <Link to={`/messages/${message.id}`} className='relative'>
              <SiTicktick className='absolute left-4 top-4'/>
            <img className='w-12 h-12 rounded-full mb-3 opacity-50' src={message.profile} alt="avatar photo" /></Link>
           </div>
          :
          <Link to={`/messages/${message.id}`}>
            <img className='w-12 h-12 rounded-full mb-3 mt-5' src={message.profile} alt="avatar photo" /></Link>
          )
           }
        </div>


        <div className='message-box mt-1 lg:mt-10 lg:mx-56 mb-12 rounded-md mx-5 relative lg:flex-1 overflown-auto'>
          {
            messages.map((message) => message.id == param.id ?
            <>
             {message.messages?.map((each,index) => (
             
              <>
           <div className='flex items-center gap-2 mb-12 mt-6 justify-end'>
          
           <div className='send-message p-3 rounded-2xl ' key={index}>
               
                  {each.send}
                 
            </div>
            <img className='w-10 h-10 rounded-full' src={message.profile} alt="member photo" />
            
            
           </div>

          <div className='flex items-center gap-3 mb-12 ' key={index}>
          <img className=' w-10 h-10 rounded-full' src='https://variety.com/wp-content/uploads/2021/12/Bitcoin-Cryptocurrency-Placeholder.jpg' alt="member photo" />


          <div className='reply-message  p-3 rounded-2xl' key={index}>
                  
              {each.answer}
                    
            </div>
            
          </div>
             
         </>
        ))}

        </>
        : '' )
       
        }
        
        </div>
        
       </div>
      
       <div className='search-box flex justify-center '>
        <input type='type'  className="ibm-plex-sans-condensed-regular outline-none pl-5 w-1/2" id='send-box'
        placeholder="Search"/>
          <Button type='Send' className='send-button mx-2 text-sm hover:scale-75 transition-transform ease-in-out' icon={<IoMdSend/>}/>
        </div>
   
    </div>
  )
}

export default Message
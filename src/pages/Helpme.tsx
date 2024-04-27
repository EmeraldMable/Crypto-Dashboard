import { questions } from "../data/data"
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { StateContext } from "../context/contextProvider";
import { useContext } from "react";

const Helpme = () => {
   const HelpContext = useContext(StateContext)
   
  return (
    <div className=' mx-4 lg:mx-16 my-8 md:mx-10 '>
        <h1 className='ibm-plex-sans-condensed-semibold text-white text-3xl'>User Guide</h1>
        <div className="help">
        
            {
                questions.map((question, index ) => (
                  
                   <div className='toggle rounded-xl' key={question.id}
                   onClick={() => HelpContext?.setCurrent(index+1)}>
                   
                   <div className="question flex" >
                       <h2 className="flex-1">{question.question}</h2>
                       {
                        question.id == HelpContext?.current ? <IoMdArrowDropup size={25}/>
                        :<IoMdArrowDropdown size={25}/>
                       }
                   </div>

                 
                     <div className={ question.id == HelpContext?.current ? 'w-full mb-5 pb-5 mx-5 mt-3 opacity-100' : 'h-0 w-full opacity-0'}>
                      <p className="w-2/3">{question.answer}</p>
                     </div>
                     
                  
                   
                   </div>
                  
                ))
            }
        </div>
    </div>
  )
}

export default Helpme
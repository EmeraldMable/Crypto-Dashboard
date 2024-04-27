import { updates } from "../data/data"
import Breadcrumb from "../components/Breadcrumb"

const News = () => {
  return (
    <div className=' mx-4 lg:mx-16 my-4 md:mx-10 '>
      <Breadcrumb/>
    <h1 className='ibm-plex-sans-condensed-semibold mb-4 mt-2 text-3xl text-white'>News & Updates</h1>
    

    <div className="update w-full p-10">
        {
            updates.map((update) => (
                <div className="news" key={update.id}> 
                   <div className="flex ">
                   <h2 className="flex-1 mb-2 tracking-wide text-xl">{ update.title}</h2>
                    <div className="flex gap-5">
                   <span>{update.time}</span>
                   <span>{update.date}</span>
                   </div>
                   </div>
                    <p className=" indent-16 leading-10">{update.subject}...</p>
                </div>
            ))
        }
     
    </div>
  </div>
  )
}

export default News
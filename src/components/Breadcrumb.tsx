
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const link = useLocation()
    const paths = link.pathname.split('/').filter((x) => x)
    let links = ""
    
   
  return (
    <div className=' text-white'>
        <Link to='/' className=' hover:underline'>
        Home
        </Link>
       {paths.map((path, index) => {
            links += `/${path}`
            
            const isLast = index == path.length-1 


            return isLast ?  <span key={index}> /  {path}</span> :
            <span> / <Link to={links} key={index}>{path}</Link></span>
       })}
    </div>
  )
}

export default Breadcrumb
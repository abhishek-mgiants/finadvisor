import { useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const navigate=useNavigate();
  const handleLogoClick =()=>{
    navigate('/');
  }
  return (
    
       <>
       <div className="navbar-container">
        <div  className="navbar-logo">
           <p className='logo-text' onClick={()=>handleLogoClick()}>Taxवित्त</p>
        </div>
        <div >
          <ul className="navlinks">
            
            <li ><a href="/taxation"  className="links">Taxation</a>
            
            </li>
            <li><a href="#" className="links">Funding</a></li>
            <li><a href="#" className="links">Compliance</a></li>
            <li><a href="#" className="links">Start up</a></li>
            <li><a href="#" className="links">Case Studies</a></li>
            <li><a href="#" className="links">Contact Us</a></li>
            
          </ul>
        </div>
       </div>
       </>
  )
}

export default Navbar
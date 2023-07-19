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
           <p className='logo-text' onClick={()=>handleLogoClick()}>  <img src="src/assets/TaxVITT2.png" style={{width:'160px', height:'60px'}} alt="" /> </p>
        </div>
        <div >
          <ul className="navlinks">
            
            <li ><a href="/taxation"  className="links">TAXATION</a>
            
            </li>
            <li><a href="#" className="links">FUNDING</a></li>
            <li><a href="#" className="links">COMPLIANCE</a></li>
            <li><a href="#" className="links">START UP</a></li>
            <li><a href="#" className="links">CONTACT US</a></li>
            
          </ul>
        </div>
       </div>
       </>
  )
}

export default Navbar
import './Navbar.css'
const Navbar = () => {
  return (
    
       <>
       <div className="navbar-container">
        <div className="navbar-logo">
           <p className='logo-text' >FinAdvisor</p>
        </div>
        <div >
          <ul className="navlinks">
            <li><a href="/" className="links">Home</a></li>
            <li className='menu-item'><a href="/taxation"  className="links">Taxation</a>
            
            </li>
            <li><a href="#" className="links">Funding</a></li>
            <li><a href="#" className="links">Compliance</a></li>
            <li><a href="#" className="links">Start up</a></li>
            <li><a href="#" className="links">Contact Us</a></li>
            
          </ul>
        </div>
       </div>
       </>
  )
}

export default Navbar
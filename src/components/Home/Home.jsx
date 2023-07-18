import './Home.css' 
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
   },[]) 
  return (
    <div className="home-container" >
        <div className="text-container">
         <div data-aos='zoom-in' className="home-heading">
         Don't change your ideas <br /> Change tax
         </div>
         <div className="text-content">
            <p>We're the financial experts you need to help your business achieve its full
potential. Let us help you multiply your profits, cut your taxes, and stay compliant.</p>
         </div>
         <div className="button-section">
            <button className="btn">Contact Us</button>
         </div>
        </div>
        <div className="hero-img-container"> 
            
        </div>

    </div>
  )
}

export default Home
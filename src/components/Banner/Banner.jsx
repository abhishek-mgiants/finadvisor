import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Banner = () => {
  AOS.init({duration:1000})
  return (
    <div className='whyTaxvit-container'>
        <div className="headerVit">
          Who We Are
        </div>
       
      <ul>
        <li > <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',  }} /> 
         </li>

        <li > <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',   }} />  
        </li>
        <li> <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',  }} /> 
         </li>
        <li> <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',  }} />  </li> 
     </ul>
    </div>
  )
}

export default Banner
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
        <div className="whyTaxvit-para">
        We are the leading tax preparation and consulting firm that has been serving individuals and
businesses in the india.
<br />
We are committed to providing our clients with the highest quality tax
services, and we are dedicated to helping them save money and stay compliant with the latest
tax laws. <br />
Our team of experienced tax professionals has a deep understanding of the tax code, and we
are always up-to-date on the latest changes..
        </div>
       
      {/* <ul>
        <li > <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',  }} /> 
         </li>

        <li > <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',   }} />  
        </li>
        <li> <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',  }} /> 
         </li>
        <li> <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',  }} />  </li> 
     </ul> */}
    </div>
  )
}

export default Banner
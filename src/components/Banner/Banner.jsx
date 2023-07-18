import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Banner = () => {
  AOS.init()
  return (
    <div className='whyTaxvit-container'>
       
      <ul>
        <li> <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',  }} /> <p>
          <span>Expertise and Experience:</span> <br/>
          Our team of highly skilled tax professionals stays up-to-date with the
latest tax laws and regulations, so you can be confident that you are receiving accurate and
reliable guidance.
        </p> </li>
        <li> <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',   }} /> <p>
          <span>Tailored Solutions:</span> <br/>
          We tailor our services to your specific needs. Whether you&#39;re an individual, a
small business owner, or a large corporation, we can handle your tax returns with precision.
        </p> </li>
        <li> <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',  }} /> <p>
          <span>Maximum Returns, Minimum Effort:</span> <br/>
          We maximize your tax returns by leveraging our knowledge
of tax laws and deductions.
        </p> </li>
        <li> <img data-aos='fade-right' src="src/assets/Diamond.png" alt="" style={{ width: '50px', height: '50px',  }} /> <p>
          <span>Time-Saving Convenience:</span> <br/>
          Let us handle your tax return filing so you can focus on what matters
      most.
        </p> </li> 
     </ul>
    </div>
  )
}

export default Banner
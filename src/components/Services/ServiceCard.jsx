
import './ServiceCard.css'; // Assuming you have a separate CSS file for styling
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
const ServiceCard = () => {
  AOS.init({duration:1000})
  const services = [
    {  id:1,
      imgPath: 'assets/TaxationTilt.png',
      heading: 'Taxation',
      description: 'Description random text to fill the container ',
    }, 
    {  id:2,
      imgPath: 'assets/Compliance.png',
      heading: 'Compliance',
      description: 'Description random text to fill the container ',
    },
    { id:3,
      imgPath: 'assets/StartUp.png',
      heading: 'Startup',
      description: 'Description random text to fill the container ',
    },
    {  id:4,
      imgPath: 'assets/Funding.png',
      heading: 'Funding',
      description: 'Description random text to fill the container ',
    },
    {
      id:5,
      imgPath: 'assets/StartUp.png',
      heading: 'GST',
      description:'Random Text'
    },
    {
      id:6,
      imgPath: 'assets/StartUp.png',
      heading: 'GST',
      description:'Random Text'
    },
    {
      id:7,
      imgPath: 'assets/StartUp.png',
      heading: 'GST',
      description:'Random Text'
    },
    {
      id:8,
      imgPath: 'assets/StartUp.png',
      heading: 'GST',
      description:'Random Text'
    }
 
  ];

  return (
   <div className='mainServiceContainer'>
 <div className="serviceHeading">
        We're Open and Here to Help You
      </div>
      <div className="service-card-container">
     
     {services.map((service) => (
       
       <div data-aos='zoom-in-down' className="service-card" key={service.id}>
         <img  src={service.imgPath} alt="Service" className="service-image" />
         <div   className="service-details">
           <h3 className="service-heading">{service.heading}</h3>
           <div>
          
           </div>
         </div>
       </div>
      
       
      
       
     ))}
   </div>
   </div>
  
  );
};

export default ServiceCard;

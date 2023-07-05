import React from 'react';
import './ServiceCard.css'; // Assuming you have a separate CSS file for styling

const ServiceCard = () => {
  const services = [
    {
      imgPath: 'src/assets/TaxationTilt.png',
      heading: 'Taxation',
      description: 'Description random text to fill the container ',
    }, 
    {
      imgPath: 'src/assets/Compliance.png',
      heading: 'Compliance',
      description: 'Description random text to fill the container ',
    },
    {
      imgPath: 'src/assets/StartUp.png',
      heading: 'Startup',
      description: 'Description random text to fill the container ',
    },
    {
      imgPath: 'src/assets/Funding.png',
      heading: 'Funding',
      description: 'Description random text to fill the container ',
    },
  ];

  return (
    <div className="service-card-container">
      {services.map((service, index) => (
        <>
        <div className="service-card" key={index}>
          <img src={service.imgPath} alt="Service" className="service-image" />
          <div className="service-details">
            <h3 className="service-heading">{service.heading}</h3>
            <div>
           
            </div>
          </div>
        </div>
       
        
        </>
        
      ))}
    </div>
  );
};

export default ServiceCard;

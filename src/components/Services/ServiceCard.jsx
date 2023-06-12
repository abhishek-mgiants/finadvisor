import React from 'react';
import './ServiceCard.css'; // Assuming you have a separate CSS file for styling

const ServiceCard = () => {
  const services = [
    {
      imgPath: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Taxation',
      description: 'Description random text to fill the container ',
    }, 
    {
      imgPath: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Compliance',
      description: 'Description random text to fill the container ',
    },
    {
      imgPath: 'https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Startup',
      description: 'Description random text to fill the container ',
    },
    {
      imgPath: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Funding',
      description: 'Description random text to fill the container ',
    },
  ];

  return (
    <div className="service-card-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.imgPath} alt="Service" className="service-image" />
          <div className="service-details">
            <h3 className="service-heading">{service.heading}</h3>
            <p className="service-description">{service.description}</p>
            <div>
            <button className="read-more-button">
              Read More <i className="fa fa-arrow-right"></i>
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;

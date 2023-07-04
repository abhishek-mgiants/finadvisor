import React from 'react';
import './Team.css'; // Assuming you have a separate CSS file for styling

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-member-upper">
        <div className="image-container-upper">
          <img
            src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="John Doe"
            className="zoom-image"
          />
        </div>
        <div className="text-container">
          <h2 className="name">John Doe</h2>
          <p className="designation">CEO of FinAdvisor</p>
        </div>
      </div> 

      <div className="team-member-lower">
        
        <div className="text-container">
          <h2 className="name">John Doe</h2>
          <p className="designation">CEO of FinAdvisor</p>
        </div>
        <div className="image-container-lower ">
          <img
            src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="John Doe"
            className="zoom-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;

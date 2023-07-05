import './Team.css'; // Assuming you have a separate CSS file for styling

const Team = () => {
  return (
    // <div className="team-container">
    //   <div className="team-member-upper">
    //     <div className="image-container-upper">
    //       <img
    //         src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=600"
    //         alt="John Doe"
    //         className="zoom-image"
    //       />
    //     </div>
    //     <div className="text-container">
    //       <h2 className="name">John Doe</h2>
    //       <p className="designation">CEO of FinAdvisor</p>
    //     </div>
    //   </div> 

    //   <div className="team-member-lower"> 
        
    //     <div className="text-container">
    //       <h2 className="name">John Doe</h2>
    //       <p className="designation">CEO of FinAdvisor</p>
    //     </div>
    //     <div className="image-container-lower ">
    //       <img
    //         src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=600"
    //         alt="John Doe"
    //         className="zoom-image"
    //       />
    //     </div>
    //   </div>
    // </div>
    <>
    
     <div className="team-container">
      <div className="team-information">
        <img src="path_to_image" alt="Team Member" />
        <div className="name-designation">
          <h3>John Doe</h3>
          <p>Our Specialist</p>
        </div>
      </div>

      <div className="team-information">
      <div className="name-designation">
          <h3>Jane Smith</h3>
          <p>Our Specialist</p>
        </div>
        <img src="path_to_image" alt="Team Member" />
        
      </div>
      <div className="icon-container">
      <img className='taxation-img' src="src/assets/Taxation.png" alt="" />

      </div>
    </div>
   
    </>
  );
};

export default Team;

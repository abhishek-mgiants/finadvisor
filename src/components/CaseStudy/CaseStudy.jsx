import React from 'react';
import './CaseStudy.css'
const CaseStudies = () => {
  const caseStudiesData = [
    {
      id: 1,
      heading: 'Proactive Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
      imgPath: 'https://www.finadvisorsllp.com/assets/images/blog/2.jpg'
    },
    {
      id: 2,
      heading: 'NGO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
      imgPath: 'https://www.finadvisorsllp.com/assets/images/blog/1.jpg'
    },
    {
      id: 3,
      heading: 'Operating a $300M IT service company',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
      imgPath: 'https://images.pexels.com/photos/5905522/pexels-photo-5905522.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="casestudies-container">
      <header>
        <h1>Case Studies</h1>
        <p>
          Our firm has served many projects in the startup, Manufacturing, FMCG, IT Services, Charitable trusts (NGO’s and Schools), Electrical and Commercial Real Estate sectors successfully.
        </p>
      </header>
      <div className="casestudies-card-container">
        {caseStudiesData.map((caseStudy) => (
          <div key={caseStudy.id} className="casestudies-card">
            <img src={caseStudy.imgPath} alt={caseStudy.heading} />
            <div className="casestudies-card-overlay">
              <h3>{caseStudy.heading}</h3>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;

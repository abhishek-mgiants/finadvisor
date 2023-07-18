import  { useState, useEffect, useMemo } from 'react';
import './CaseStudy.css';

const CaseStudies = () => {
  const caseStudiesData = useMemo(
    () => [
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
      },
      {
        id: 4,
        heading: 'random text',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
        imgPath: 'https://images.pexels.com/photos/5905522/pexels-photo-5905522.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 5,
        heading: 'random text',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
        imgPath: 'https://images.pexels.com/photos/5905522/pexels-photo-5905522.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardData, setCardData] = useState(caseStudiesData.slice(0, 3));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [caseStudiesData.length]);

  useEffect(() => {
    const startIndex = activeIndex === 0 ? caseStudiesData.length - 1 : activeIndex - 1;
    const endIndex = activeIndex + 1 === caseStudiesData.length ? 0 : activeIndex + 1;
    const newCardData = [caseStudiesData[startIndex], caseStudiesData[activeIndex], caseStudiesData[endIndex]];
    setCardData(newCardData);
  }, [activeIndex, caseStudiesData]);

  return (
    <div className="casestudies-container">
      <header>
        <h1>Client Stories</h1>
        <p>
          Our firm has served many projects in the startup, Manufacturing, FMCG, IT Services, Charitable trusts (NGO’s and Schools), Electrical and Commercial Real Estate sectors successfully.
        </p>
      </header>
      <div className="casestudies-card-container">
        {cardData.map((caseStudy) => (
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

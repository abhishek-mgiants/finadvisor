import  { useState, useEffect, useMemo } from 'react';
import './CaseStudy.css';

const CaseStudies = () => {
  const caseStudiesData = useMemo(
    () => [
      {
        id: 1,
        heading: 'Tax Audit & Bookkeeping Simplified',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
        imgPath: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGF4JTIwYXVkaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 2,
        heading: 'Streamlined Operations for a Fabric Company',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
        imgPath: 'https://plus.unsplash.com/premium_photo-1679860750641-0ab67ed5e69a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9pbmclMjB0YXhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 3,
        heading: 'Debt Recovery and Lower Interest Rates',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
        imgPath: 'https://images.pexels.com/photos/5905522/pexels-photo-5905522.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 4,
        heading: 'Government Tender Success on GEM Portal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
        imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bCBOQTerqu4diXPKlxzpAHT850Gu4osmpg&usqp=CAU'
      },
      {
        id: 5,
        heading: 'One of Our Clients Receives a Whopping Refund of Rs. 12 Lakhs!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
        imgPath: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 6,
        heading: 'How We Helped a Client Slash GST Rate from 18% to 6% Legally!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices mi elit.',
        imgPath: 'https://images.pexels.com/photos/68912/pexels-photo-68912.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardData, setCardData] = useState(caseStudiesData.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
    }, 3000);

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
        <span>Client Stories</span>
        <p>
          Here are some Amazing clients stories showing our Proof of work, how we helped our clients!
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

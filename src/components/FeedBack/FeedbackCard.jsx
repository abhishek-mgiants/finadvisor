import  { useState } from 'react';
import './FeedbackCard.css';

const FeedbackCard = () => {
  const feedbackData = [
    {
      imgPath: 'https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Apple',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imgPath:
        'https://images.pexels.com/photos/15913546/pexels-photo-15913546/free-photo-of-sign-of-bar.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Crown Burgers',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imgPath:
        'https://images.pexels.com/photos/15979303/pexels-photo-15979303/free-photo-of-maserati-logo-on-the-car-grill.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Maserati',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imgPath:
        'https://images.pexels.com/photos/10158866/pexels-photo-10158866.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Indian Oil',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? feedbackData.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === feedbackData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const renderCards = () => {
    const startIndex = currentSlide;
    const endIndex = (currentSlide + 2) % feedbackData.length;

    if (startIndex <= endIndex) {
      return feedbackData.slice(startIndex, endIndex + 1);
    } else {
      return [...feedbackData.slice(startIndex), ...feedbackData.slice(0, endIndex + 1)];
    }
  };

  return (
    <div className="feedback-card-container">
      <div className="heading">
        <h2>Feedback</h2>
      </div>
      <div className="feedback-card-wrapper">
        <div className="left-arrow" onClick={prevSlide}>
        <img className='diamond-left' src="src/assets/Diamond.png" alt="" />
        </div>
        <div className="feedback-cards-container">
          {renderCards().map((feedback, index) => (
            <div className={`feedback-card ${index === 1 ? 'active' : ''}`} key={index}>
              <img src={feedback.imgPath} alt={feedback.name} />
              <h3>{feedback.name}</h3>
              <p>{feedback.feedback}</p>
            </div>
          ))}
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          {/* <i className="fas fa-arrow-right"></i> */}
          <img className='diamond-right' src="src/assets/Diamond.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

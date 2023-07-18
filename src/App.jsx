// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import FeedbackCard from './components/FeedBack/FeedbackCard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import Portfolio from './components/Portfolio/Portfolio';
import ServiceCard from './components/Services/ServiceCard';
import Taxation from './components/Taxation/Taxation';
import Team from './components/Team/Team';
import WhyUs from './components/WhyUs/WhyUs';
import Footer from './components/Footer/Footer';
import CaseStudies from './components/CaseStudy/CaseStudy';
import ExperimentContainer from './components/Experiment/Experiment';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taxation" element={<Taxation />} />
      </Routes>
      <Banner />
      <ServiceCard />
      <WhyUs />
      <Team/>
      <CaseStudies/>
      <FeedbackCard/>
      <Footer />
      {/* <ExperimentContainer/> */}
    </Router>
  );
};

export default App;

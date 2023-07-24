// Navbar.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showClientStoriesDropdown, setShowClientStoriesDropdown] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleServicesMouseEnter = () => {
    setShowServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    setShowServicesDropdown(false);
  };

  const handleClientStoriesMouseEnter = () => {
    setShowClientStoriesDropdown(true);
  };

  const handleClientStoriesMouseLeave = () => {
    setShowClientStoriesDropdown(false);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          <p className="logo-text" onClick={handleLogoClick}>
            <img src="assets/TaxVITT2.png" style={{ width: '160px', height: '60px' }} alt="" />
          </p>
        </div>
        <div>
          <ul className="navlinks">
            <li
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              className="dropdown-container"
            >
              <a href="/services" className="links">
                SERVICES
              </a>
              {showServicesDropdown && (
                <ul className="sub-menu">
                  <li>
                    <a href="#">Income Tax Services</a>
                  </li>
                  <li>
                    <a href="#">Goods and Services Tax(GST)</a>
                  </li>
                  <li>
                    <a href="#">Contract Drafting Services</a>
                  </li>
                  <li>
                    <a href="#">Real Estate Regulatory Authority(RERA) Services</a>
                  </li>
                  <li>
                    <a href="#">Registrar of Companies(ROC)</a>
                  </li>
                  <li>
                    <a href="#">Accounting</a>
                  </li>
                  <li>
                    <a href="#">Consultancy and Advisory Services</a>
                  </li>
                  <li>
                    <a href="#">Miscellaneous Services</a>
                  </li>
                  
                </ul>
              )}
            </li>
            <li
              onMouseEnter={handleClientStoriesMouseEnter}
              onMouseLeave={handleClientStoriesMouseLeave}
              className="dropdown-container"
            >
              <a href="#" className="links">
                CLIENT STORIES
              </a>
              {showClientStoriesDropdown && (
                <ul className="sub-menu">
                  <li>
                    <a href="#">Tax Audit & Bookkeeping Simplified</a>
                  </li>
                  <li>
                    <a href="#">Streamlined Operations for a Fabric Company</a>
                  </li>
                  <li>
                    <a href="#">Debt Recovery and Lower Interest Rates</a>
                  </li>
                  <li>
                    <a href="#">Government Tender Success on GEM Portal</a>
                  </li>
                  <li>
                    <a href="#">One of Our Clients Receives a Whopping Refund of Rs. 12 Lakhs!</a>
                  </li>
                  <li>
                    <a href="#">How We Helped a Client Slash GST Rate from 18% to 6% Legally!</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="links">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

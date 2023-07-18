
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column"> 
          <h3 className="heading">FinAdvisor</h3>
          <p className="subheading">Why Choose Us</p>
          <ul>
            <li>Reason 1</li>
            <li>Reason 2</li>
            <li>Reason 3</li>
            <li>Reason 4</li>
          </ul>
        </div>
        <div className="separator" />
        <div className="column">
          <h3 className="heading">Our Services</h3>
          <ul className='services'>
            <li><a href="#">Taxation</a></li>
            <li><a href="#">Compliance</a></li>
            <li><a href="#">StartUp</a></li>
            <li><a href="#">Funding</a></li>
          </ul>
        </div> 
        <div className="separator" />
        <div className="column">
          <h3 className="heading">Social Media</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="separator" />
        <div className="column">
          <h3 className="heading">Contact Us</h3>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Taxation.css';

const Taxation = () => {
  return (
    <div className="taxation-container">
      <div className="hero">
  <div className="content">
    <h2>TAXATION</h2>
      </div>
  <div className="waves"></div>
</div>

      <div className="content-container">
        <div className="section section-1">
          <h2>About Taxation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea numquam quidem nemo explicabo nam consequuntur aliquam provident rem ullam, possimus laudantium ratione est iusto! Provident pariatur asperiores autem excepturi, odit hic necessitatibus?<br/> Nam recusandae fuga libero, magni distinctio cum officia obcaecati esse quaerat, doloremque neque repellat. Non amet pariatur cupiditate adipisci iusto laudantium commodi magnam libero. Error eum hic, assumenda dolorem<br/> tempora odio aliquid? Voluptatem animi sed facere quos ipsam? Iusto ullam quasi repudiandae maiores tempore mollitia esse. Alias velit repudiandae, nesciunt illum excepturi hic Inventore reprehenderit exercitationem fuga omnis. Corporis rem assumenda soluta eum ipsum consectetur atque officia?</p>
          <ul>
            <li>Inventore reprehenderit exercitationem</li>
            <li>Inventore reprehenderit exercitationem</li>
            <li>Inventore reprehenderit exercitationem</li>
          </ul>
          
          <hr />
          <h2>More Taxation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea numquam quidem nemo explicabo nam consequuntur aliquam provident rem ullam, possimus laudantium ratione est iusto! Provident pariatur asperiores autem excepturi, odit hic necessitatibus?<br/> Nam recusandae fuga libero, magni distinctio cum officia obcaecati esse quaerat, doloremque neque repellat. Non amet pariatur cupiditate adipisci iusto laudantium commodi magnam libero. Error eum hic, assumenda dolorem tempora odio aliquid? Voluptatem animi sed facere quos ipsam?<br/> Iusto ullam quasi repudiandae maiores tempore mollitia esse. Alias velit repudiandae, nesciunt illum excepturi hic inventore reprehenderit exercitationem fuga omnis. Corporis rem assumenda soluta eum ipsum consectetur atque officia?</p>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
        

        <div className="section section-2">
          <h2>Our Services</h2>
          <ul>
            <li>
              <a href="#">Taxation</a>
            </li>
            <li>
              <a href="#">Compliance</a>
            </li>
            <li>
              <a href="#">Startup</a>
            </li>
            <li>
              <a href="#">Funding</a>
            </li>
          </ul>
        </div>

        <div className="section section-3">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Business Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="service">Choose a Service</label>
              <select id="service">
                <option value="taxation">Taxation</option>
                <option value="compliance">Compliance</option>
                <option value="startup">Startup</option>
                <option value="funding">Funding</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="queries">Your Queries</label>
              <textarea id="queries" cols="29" rows="5"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Taxation;

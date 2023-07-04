import './Banner.css'
const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-text-container' >
            <header>
                Who We Are
            </header>
            <section className='banner-cta'>
                <ul>
                  <li className="about-us">
                  <i className="fa-solid fa-check" style={{color: 'green'}}> </i>
                    Random Text for content 
                  </li>
                  <li className="about-us">
                  <i className="fa-solid fa-check" style={{color: 'green'}}> </i>Random Text for content</li>
                  <li className="about-us">
                  <i className="fa-solid fa-check" style={{color: 'green'}}> </i>Random Text for content</li>
                  <li className="about-us">
                  <i className="fa-solid fa-check" style={{color: 'green'}}> </i>Random Text for content</li>
                </ul>
            </section>
        </div>
        <div className='banner-img-container'>
                
        </div>

    </div>
  )
}

export default Banner
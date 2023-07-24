import './WhyTaxvitt.css'

const WhyTaxvitt = () => {

  return (
    <div  className='whyTaxVit-container' >
       <h1>Why Choose Us</h1>
       <div className="whyChooseUsPoints">
        <div className="pointers">
                <div className="pointerHeader">
                  <img src="assets/MaximumReturnsIcon.png" alt="" />
                  <h2>Maximum Returns</h2>
                </div>
                <div className="pointerPara">
                  <p>
                  We maximize your tax returns by leveraging our knowledge
of tax laws and deductions.
                  </p>
                </div>
        </div>
        <div className="pointers">
        <div className="pointerHeader">
                  <img src="assets/Security.png" alt="" />
                  <h2>Security</h2>
                </div>
                <div className="pointerPara">
                  <p>
                  We protect your financial information with robust security systems
and protocols. You can be confident that your data is safe and secure with us.
                  </p>
                </div>

        </div>
        <div className="pointers">
        <div className="pointerHeader">
                  <img src="assets/TailoredSolutionsIcon.png" alt="" />
                  <h2>Tailored Solutions</h2>
                </div>
                <div className="pointerPara">
                  <p>
                  We tailor our services to your specific needs. Whether you're an individual, a
small business owner, or a large corporation, we can handle your tax returns with precision.
                  </p>
                </div>

        </div>
        <div className="pointers">
        <div className="pointerHeader">
                  <img src="assets/TimesavingIcon.png" alt="" />
                  <h2>Time Saving</h2>
                </div>
                <div className="pointerPara">
                  <p>
                  Let us handle your tax return filing so you can focus on what matters
most. Filling Taxes in minimum time with high accuracy and efficency. 
                  </p>
                </div>

        </div>
       </div>
    </div>
  )
}

export default WhyTaxvitt
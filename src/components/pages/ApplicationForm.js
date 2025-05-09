import "./ApplicationForm.css"

function ApplicationForm() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Get Certified</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="application-content">
        <div className="application-info">
          <h2>Start Your Certification Journey</h2>
          <p>
            Thank you for your interest in EcoCertification. Complete this form to begin the certification process. Our
            team will review your application and contact you within 2-3 business days to discuss the next steps.
          </p>

          <div className="certification-types">
            <h3>Available Certification Types</h3>
            <div className="cert-type-grid">
              <div className="cert-type-item">
                <div className="cert-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <div>
                  <h4>Organic Certification</h4>
                  <p>For farms and producers following organic practices</p>
                </div>
              </div>

              <div className="cert-type-item">
                <div className="cert-icon">
                  <i className="fas fa-tree"></i>
                </div>
                <div>
                  <h4>EUDR Compliance</h4>
                  <p>For deforestation-free supply chains</p>
                </div>
              </div>

              <div className="cert-type-item">
                <div className="cert-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div>
                  <h4>Fairtrade Certification</h4>
                  <p>For ethical trade and fair labor practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="application-form-container">
          <h2>Application Form</h2>
          <form className="application-form">
            <div className="form-section">
              <h3>Organization Information</h3>

              <div className="form-group">
                <label htmlFor="orgName">Organization Name*</label>
                <input type="text" id="orgName" name="orgName" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="orgType">Organization Type*</label>
                  <select id="orgType" name="orgType" required>
                    <option value="">Select type</option>
                    <option value="farm">Farm</option>
                    <option value="processor">Processor</option>
                    <option value="cooperative">Cooperative</option>
                    <option value="trader">Trader</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="employees">Number of Employees</label>
                  <input type="number" id="employees" name="employees" min="1" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address*</label>
                <input type="text" id="address" name="address" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City*</label>
                  <input type="text" id="city" name="city" required />
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country*</label>
                  <input type="text" id="country" name="country" required />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Contact Information</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name*</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name*</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="position">Position/Title*</label>
                <input type="text" id="position" name="position" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>

            <div className="form-section">
              <h3>Certification Details</h3>

              <div className="form-group">
                <label htmlFor="certType">Certification Type*</label>
                <select id="certType" name="certType" required>
                  <option value="">Select certification</option>
                  <option value="organic">Organic Certification</option>
                  <option value="eudr">EUDR Compliance</option>
                  <option value="fairtrade">Fairtrade Certification</option>
                  <option value="multiple">Multiple Certifications</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="products">Products/Crops*</label>
                <input type="text" id="products" name="products" placeholder="e.g., Coffee, Cocoa, Honey" required />
              </div>

              <div className="form-group">
                <label htmlFor="landSize">Land Size (hectares, if applicable)</label>
                <input type="number" id="landSize" name="landSize" min="0" step="0.1" />
              </div>

              <div className="form-group">
                <label htmlFor="currentCert">Current Certifications (if any)</label>
                <input type="text" id="currentCert" name="currentCert" placeholder="e.g., Rainforest Alliance, UTZ" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Please provide any additional details that might be relevant to your certification application"
                ></textarea>
              </div>
            </div>

            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">I agree to the terms and conditions*</label>
            </div>

            <button type="submit" className="submit-button">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm

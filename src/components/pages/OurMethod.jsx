import "./OurMethod.css"

function OurMethod() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Digitally-Driven Certification</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="two-column-layout image-offset">
        <div className="column-item">
          <div className="image-card primary-image">
            <img 
            // src="/images/warren-J33qmCVr02A-unsplash.jpg" alt="Digital certification" 
            className="small-image" />
          </div>
        </div>

        <div className="column-item">
          <div className="image-card secondary-image">
            <img 
            // src="/images/eco-hero.jpg" alt="Eco landscape" 
            className="small-image" />
          </div>
        </div>
      </div>

      <div className="content-text">
        <p>
          At EcoCertification, we streamline certification through digital innovation. Our online platform—built in
          cooperation with EVC—simplifies communication, documentation, and tracking throughout the certification
          process.
        </p>
        <p>From application to final approval, our digital tools:</p>

        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="value-content">
              <h3>Reduce paperwork</h3>
              <p>some text</p>
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="value-content">
              <h3>Improve data accuracy</h3>
              <p>.....</p>
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-sync-alt"></i>
            </div>
            <div className="value-content">
              <h3>Real-time status updates</h3>
              <p>...</p>
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-search"></i>
            </div>
            <div className="value-content">
              <h3>Increase transparency</h3>
              <p>....</p>
            </div>
          </div>
        </div>

        <p>
          We combine technology with a human approach, ensuring that producers are never left alone with complex
          requirements.
        </p>
      </div>
    </div>
  )
}

export default OurMethod

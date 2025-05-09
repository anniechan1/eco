import "./Sustainability.css"

function Sustainability() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Commitment</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="image-showcase">
        <div className="showcase-main">
          <img src="/images/farmer.jpg" alt="Sustainable farming" className="showcase-image" />
        </div>
      
      </div>

      <div className="content-text">
        <p>
          Sustainability is at the core of our mission. Our certifications are designed not only to meet global market
          standards but to drive real ecological and social change.
        </p>
        <p>We promote:</p>

        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <div className="value-content">
              <h3>Biodiversity protection</h3>
              <p>Some text???</p> 
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <div className="value-content">
              <h3>Ethical labor practices</h3>
               <p>Some text???</p> 
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="value-content">
              <h3>Transparent supply chains</h3>
              {/* <p>Creating visibility from producer to consumer through digital tracking</p> */}
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="value-content">
              <h3>Local empowerment</h3>
              {/* <p>Building capacity within communities to manage their resources sustainably</p> */}
            </div>
          </div>
        </div>

        <p>
          By cooperating with initiatives like Ecopia Value Chain, we ensure our certifications align with broader
          efforts to build resilient, fair, and environmentally sound value chains.
        </p>
      </div>
    </div>
  )
}

export default Sustainability

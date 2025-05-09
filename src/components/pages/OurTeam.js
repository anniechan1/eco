import "./OurTeam.css"

function OurTeam() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Team</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="two-column-layout">
        <div className="column-item">
          <div className="image-card">
            <img 
            // src="/images/farmer.jpg" alt="Team members in field" 
            className="small-image" />
          </div>
        </div>

        <div className="column-item">
          <div className="image-card">
            <img 
            // src="/images/warren-J33qmCVr02A-unsplash.jpg" alt="Team member" 
            className="small-image" />
          </div>
        </div>
      </div>

      <div className="content-text">
        <p>
          Our international team brings together years of expertise in organic agriculture, forest and apiculture
          systems, digital auditing tools, and international certification schemes. We believe in cooperation, ongoing
          learning, and listening to the needs of the people behind every certified product.
        </p>
      </div>
    </div>
  )
}

export default OurTeam

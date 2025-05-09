import "./History.css"

function History() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Company History</h1>
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
            // src="/images/eco-hero.jpg" alt="Eco landscape" 
            className="small-image" />
          </div>
        </div>

        <div className="column-item">
          <div className="image-card">
            <img 
            // src="/images/farmer.jpg" alt="Farmer" 
            className="small-image" />
          </div>
        </div>
      </div>

      <div className="content-text">
        <p>
          Founded with the vision of creating a certification body that is both credible and collaborative,
          EcoCertification emerged from a network of sustainability experts, agricultural cooperatives, and technology
          partners. Since our beginning, we have expanded our reach across multiple regions, offering tailored
          certification services to producers of all scales.
        </p>
      </div>
    </div>
  )
}

export default History

import "./IndependenceIntegrity.css"

function IndependenceIntegrity() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Independence & Integrity</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="integrity-banner">
        <div className="banner-content">
          <h2>Our Commitment to Impartiality</h2>
          <p>We maintain rigorous impartiality through:</p>
        </div>
      </div>

      <div className="principles-container">
        <div className="principles-image">
          <div className="principles-image-placeholder">
            <span>Photo: Integrity in action</span>
          </div>
        </div>

        <div className="principles-list">
          <div className="principle-item">
            <div className="principle-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <div className="principle-text">
              <p>Separation of certification and consultancy services.</p>
            </div>
          </div>

          <div className="principle-item">
            <div className="principle-icon">
              <i className="fas fa-user-shield"></i>
            </div>
            <div className="principle-text">
              <p>Auditor independence, with rotation policies to prevent bias.</p>
            </div>
          </div>

          <div className="principle-item">
            <div className="principle-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <div className="principle-text">
              <p>A robust conflict-of-interest policy.</p>
            </div>
          </div>

          <div className="principle-item">
            <div className="principle-icon">
              <i className="fas fa-comments"></i>
            </div>
            <div className="principle-text">
              <p>Transparent appeals and complaints processes.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="governance-container">
        <div className="governance-content">
          <div className="governance-text">
            <div className="governance-icon">
              <i className="fas fa-landmark"></i>
            </div>
            <h2>Governance Structure</h2>
            <div className="governance-divider"></div>
            <p>
              Our governance structure includes an oversight committee to ensure objectivity and continuous compliance.
            </p>
          </div>

          <div className="governance-image">
            <div className="governance-image-placeholder">
              <span>Photo: Oversight committee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndependenceIntegrity

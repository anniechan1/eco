import "./InternationalStandards.css"

function InternationalStandards() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>International Standard Compliance</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="standards-container">
        <div className="standards-intro">
          <p>We strictly adhere to:</p>
        </div>

        <div className="standards-grid">
          <div className="standard-card">
            <div className="standard-icon">
              <i className="fas fa-clipboard-check"></i>
            </div>
            <h3>ISO/IEC 17065</h3>
            <p>Conformity assessment for certification bodies.</p>
            <div className="standard-image-placeholder">
              <span>Photo: ISO certification</span>
            </div>
          </div>

          <div className="standard-card">
            <div className="standard-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>IFOAM Norms</h3>
            <p>Best practices in organic certification.</p>
            <div className="standard-image-placeholder">
              <span>Photo: IFOAM compliance</span>
            </div>
          </div>

          <div className="standard-card">
            <div className="standard-icon">
              <i className="fas fa-globe-europe"></i>
            </div>
            <h3>National & International Organic Regulations</h3>
            <p>Including the EU Organic Regulation (2018/848) and USDA NOP.</p>
            <div className="standard-image-placeholder">
              <span>Photo: International regulations</span>
            </div>
          </div>
        </div>

        <div className="traceability-section">
          <div className="traceability-content">
            <div className="traceability-icon">
              <i className="fas fa-route"></i>
            </div>
            <h2>Traceability & Transparency</h2>
            <p>We ensure complete traceability and transparency, backed by robust documentation and audit trails.</p>
          </div>
          <div className="traceability-visual">
            <div className="traceability-image-placeholder">
              <span>Photo: Traceability system in action</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InternationalStandards

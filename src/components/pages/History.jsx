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

      <div className="asymmetric-layout">
        <div className="top-left-image">
          <img src="/images/image.jpg" alt="Team" className="history-image" />
        </div>

        <div className="content-text main-content">
          <p>
            Founded with the vision of creating a certification body that is both credible and collaborative,
            EcoCertification emerged from a network of sustainability experts, agricultural cooperatives, and technology
            partners. Since our beginning, we have expanded our reach across multiple regions, offering tailored
            certification services to producers of all scales.
          </p>
        </div>

        <div className="section-divider"></div>

        <div className="content-text team-content">
          <p>
            Our international team brings together years of expertise in organic agriculture, forest and apiculture
            systems, digital auditing tools, and international certification schemes. We believe in cooperation, ongoing
            learning, and listening to the needs of the people behind every certified product.
          </p>
        </div>

        <div className="bottom-right-image">
          <img src="/images/lab.jpg" alt="Laboratory work" className="history-image" />
        </div>
      </div>
    </div>
  )
}

export default History

import "./About.css"

function About() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Who We Are</h1>
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
            //  src="/images/about-image-1.jpg" alt="Farmers in field" 
             className="small-image" /> 
          </div>
        </div>

        <div className="column-item">
          <div className="image-card">
            <img 
            // src="/images/eco-hero.jpg" alt="Eco landscape" 
            className="small-image" />
          </div>
        </div>
      </div>

      <div className="content-text">
        <p>
          <span className="highlight-text">EcoCertification</span> is a modern certification company with deep roots in
          sustainability and digital innovation. Our mission is to guide and support stakeholders across agricultural,
          forestry, and apiculture value chains in achieving meaningful certification that reflects ecological
          responsibility and social fairness.
        </p>
        <p>
          We believe certification should not be a burden—it should be a tool for empowerment. That's why we work
          closely with farmers, cooperatives, and businesses to ensure that certification processes are accessible,
          efficient, and adapted to local realities. Through partnerships like with the{" "}
          <a href="https://ecopiavaluechain.com/" target="_blank" rel="noopener noreferrer" className="highlight-link">
            Ecopia Value Chain (EVC)
          </a>{" "}
          platform, we help bridge the gap between compliance and long-term impact.
        </p>
      </div>
    </div>
  )
}

export default About

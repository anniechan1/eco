import "./FarmerTraining.css"

function FarmerTraining() {
  return (
    <div className="training-container">
      <div className="page-header">
        <h1>Training & Education</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="training-intro">
        <p>Empowering Farmers, Inspectors & Auditors for Sustainable Success</p>
        <p>
          As part of our mission, we provide comprehensive training programs designed to build knowledge, improve
          practices, and ensure full compliance with international organic standards. Our training services are tailored
          to Ethiopia's unique agricultural context and aligned with global best practices.
        </p>
      </div>

      <div className="training-sections">
        <div className="training-card">
          <div className="card-header">
            <i className="fas fa-seedling"></i>
            <h2>For Farmers & Producers</h2>
          </div>
          <div className="card-content">
            <p>We empower farmers to:</p>
            <ul>
              <li>
                <strong>Understand Organic Standards:</strong> Clear guidance on EU Organic, USDA NOP, and other global
                standards.
              </li>
              <li>
                <strong>Improve Farm Management:</strong> Techniques in soil fertility, pest and weed management, crop
                rotation, and biodiversity enhancement.
              </li>
              <li>
                <strong>Record-Keeping & Documentation:</strong> Training in traceability and compliance documentation.
              </li>
              <li>
                <strong>Certification Readiness:</strong> Step-by-step preparation for audits and certification
                processes.
              </li>
            </ul>

            <h3>Special Programs Include:</h3>
            <ul>
              <li>Workshops for smallholder cooperatives.</li>
              <li>On-farm practical sessions.</li>
              <li>Digital resources and manuals in local languages.</li>
            </ul>

            <div className="image-placeholder">Photo 1: Farmer training workshop</div>
          </div>
        </div>

        <div className="training-card">
          <div className="card-header">
            <i className="fas fa-search"></i>
            <h2>For Inspectors</h2>
          </div>
          <div className="card-content">
            <p>We develop a new generation of qualified inspectors with expertise in:</p>
            <ul>
              <li>
                <strong>Inspection Techniques:</strong> Best practices in field inspection, interviewing, and report
                writing.
              </li>
              <li>
                <strong>Compliance Assessment:</strong> Identifying non-compliance, risk assessment, and corrective
                actions.
              </li>
              <li>
                <strong>International Standards Training:</strong> Deep dives into ISO/IEC 17065, EU Organic, USDA NOP,
                and IFOAM norms.
              </li>
              <li>
                <strong>Ethics & Integrity:</strong> Maintaining impartiality and professional conduct.
              </li>
            </ul>

            <h3>Courses Offered:</h3>
            <ul>
              <li>Initial Inspector Training.</li>
              <li>Advanced Inspector Workshops.</li>
              <li>Continuous Professional Development (CPD).</li>
            </ul>

            <div className="image-placeholder">Photo 2: Inspector field training</div>
          </div>
        </div>

        <div className="training-card">
          <div className="card-header">
            <i className="fas fa-clipboard-check"></i>
            <h2>For Auditors</h2>
          </div>
          <div className="card-content">
            <p>Auditors play a critical role in ensuring the credibility of certification. We provide:</p>
            <ul>
              <li>
                <strong>Audit Methodologies:</strong> From document review to onsite verification and sampling.
              </li>
              <li>
                <strong>Risk-Based Auditing:</strong> Tools for prioritizing critical control points.
              </li>
              <li>
                <strong>Report Writing & Decision-Making:</strong> How to present findings clearly and objectively.
              </li>
              <li>
                <strong>Updates on International Standards:</strong> Regular refreshers and updates as global norms
                evolve.
              </li>
            </ul>

            <h3>Training Modes:</h3>
            <ul>
              <li>Online modules.</li>
              <li>In-person training sessions.</li>
              <li>Mentorship programs with senior auditors.</li>
            </ul>

            <div className="image-placeholder">Photo 3: Auditor training session</div>
          </div>
        </div>

        <div className="platform-section">
          <h2>Our Learning Platform</h2>
          <div className="platform-content">
            <div className="platform-text">
              <p>We are developing a digital learning hub featuring:</p>
              <ul>
                <li>Interactive e-learning courses.</li>
                <li>Webinars with international experts.</li>
                <li>Downloadable guidelines and toolkits.</li>
                <li>Forums for peer-to-peer learning.</li>
              </ul>

              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-laptop"></i>
                  </div>
                  <div className="feature-text">Access courses anytime, anywhere</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div className="feature-text">Connect with global certification experts</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="feature-text">Earn recognized certifications</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="feature-text">Join a community of practitioners</div>
                </div>
              </div>
            </div>
            <div className="platform-image">
              <div className="image-placeholder">Photo 4: Digital learning platform</div>
            </div>
          </div>
        </div>
      </div>

      <div className="get-involved">
        <h2>Get Involved</h2>
        <p>Farmers, inspectors, and auditors interested in joining our next training sessions can:</p>
        <ul>
          <li>Register online via our Training Portal.</li>
          <li>Contact our Education Team for customized programs.</li>
        </ul>
        <p>Stay connected for updates on upcoming workshops, webinars, and new course offerings.</p>
        <button className="cta-button">Register for Training</button>
      </div>
    </div>
  )
}

export default FarmerTraining

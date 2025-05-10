import "./HomeAboutSection.css"

function HomeAboutSection() {
  return (
    <section className="about-section design-two">
      <div className="organic-shape top-shape"></div>

      <div className="about-container">
        <div className="about-intro-centered">
          <p>
            We are proud to be a pioneering force in Ethiopia's organic certification and sustainable agriculture
            movement.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Our Roots</h3>
              <p>
                We are among the founding members of Ethiopia's first Organic Agriculture Association, working alongside
                esteemed experts including Dr. Sue Edwards. This early involvement laid the groundwork for advancing
                organic farming in Ethiopia.
              </p>
            </div>
            <div className="timeline-image">
              <div className="image-grid">
                <div className="image-item">
                  <img src="/images/coffee.jpeg" alt="coffee" className="small-image" />
                </div>
                <div className="image-item">
                  <img src="/images/crops.jpg" alt="crops" className="small-image" />
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item reverse">
            <div className="timeline-content">
              <div className="timeline-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Our Track Record</h3>
              <p>Through our close collaboration with Eljojofe e.V., we have:</p>
              <ul className="eco-list">
                <li>
                  Trained over 3,000 organic farmers across Ethiopia, helping them maintain their organic practices in
                  line with international standards.
                </li>
                <li>
                  Actively contributed to the development of all Ethiopian Biosphere Reserves, supporting ecological
                  conservation and sustainable livelihoods.
                </li>
              </ul>
            </div>
            <div className="timeline-image">
              <div className="image-placeholder">
                <img src="/images/farmers.jpg" alt="farmers" className="small-image" />
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-icon">
                <i className="fas fa-store"></i>
              </div>
              <h3>Market Development</h3>
              <p>We proudly:</p>
              <ul className="eco-list">
                <li>
                  Organized Ethiopia's first-ever Organic Monthly Market, in partnership with Ecopia PLC, creating a
                  consistent platform for organic producers to connect with conscious consumers.
                </li>
                <li>Continue to champion innovative market access solutions for Ethiopia's organic farmers.</li>
              </ul>
            </div>
            <div className="timeline-image">
              <div className="image-grid">
                <div className="image-item">
                  <img src="/images/market.jpg" alt="market" className="small-image" />
                </div>
                <div className="image-item">
                  <img src="/images/soap.jpg" alt="soap" className="small-image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mission-banner">
          <div className="mission-icon">
            <i className="fas fa-compass"></i>
          </div>
          <h3>Our Mission Moving Forward</h3>
          <p>
            Building on decades of practical experience and deep local engagement, we are now establishing Ethiopia's
            first dedicated eco-certification company, with international accreditation underway. Our goal is to empower
            producers, assure consumers, and help Ethiopia's organic sector thrive on a global stage.
          </p>
        </div>
      </div>

      <div className="organic-shape bottom-shape"></div>
    </section>
  )
}

export default HomeAboutSection

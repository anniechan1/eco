import "./HighlightsSectionOption2.css"

function HighlightsSectionOption2() {
  return (
    <>
      <section className="highlights-section-overlap">
        <div className="overlap-container">
          <div className="overlap-card mission-card">
            <h2>Our Mission</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel justo porttitor, faucibus ex a, rhoncus tortor. Proin vitae tincidunt dolor, pharetra porttitor mauris. 
            </p>
            <div className="card-accent"></div>
          </div>

          <div className="content-container">
            <div className="image-column">
              <div className="image-wrapper">
                <img src="/images/farmer.jpg" alt="Farmer in field" />
                <div className="image-border"></div>
              </div>
            </div>

            <div className="text-column">
              <div className="text-content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel justo porttitor, faucibus ex a, rhoncus tortor. Proin vitae tincidunt dolor, pharetra porttitor mauris. Morbi non auctor dolor, non tempor felis. Nulla malesuada pellentesque justo, non accumsan sapien. Fusce consectetur leo nibh, in lobortis felis elementum nec.
                </p>
{/* 
                <div className="values-grid">
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div className="value-text">
                      <h4>Partnership</h4>
                      <p>We work collaboratively with all stakeholders to achieve shared sustainability goals.</p>
                    </div>
                  </div>

                  <div className="value-item">
                    <div className="value-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="value-text">
                      <h4>Integrity</h4>
                      <p>Our certification processes are transparent, rigorous, and backed by scientific evidence.</p>
                    </div>
                  </div>

                  <div className="value-item">
                    <div className="value-icon">
                      <i className="fas fa-seedling"></i>
                    </div>
                    <div className="value-text">
                      <h4>Innovation</h4>
                      <p>We continuously evolve our methods to meet emerging challenges and opportunities.</p>
                    </div>
                  </div> 
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HighlightsSectionOption2

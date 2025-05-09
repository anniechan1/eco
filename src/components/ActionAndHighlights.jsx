import "./ActionAndHighlights.css"

function ActionAndHighlights() {
  return (
    <>
      {/* Wave Transition */}
      <div className="wave-transition action-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path
            fill="#f9f7f0"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>

      <section className="action-highlights-section">
        <div className="action-highlights-container">
          {/* Calls to Action Section */}
          <div className="cta-section">
            <div className="section-header">
              <h2>Take the Next Step</h2>
              <div className="header-underline"></div>
            </div>

            <div className="cta-content">
              <div className="cta-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                  enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                </p>
                <p>
                  Suspendisse in orci enim. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu
                  tellus rhoncus ut eleifend nibh porttitor.
                </p>
              </div>

              <div className="cta-image">
                <img src="/images/field.jpg" alt="field" />
                <div className="image-accent-circle"></div>
              </div>
            </div>

            {/* Buttons removed as requested */}
          </div>

          {/* Key Highlights Section */}
          <div className="key-highlights-section">
            <div className="section-header">
              <h2>Key Highlights</h2>
              <div className="header-underline"></div>
            </div>

            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="card-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4>Lorem ipsum dolor sit amet</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus.
                </p>
              </div>

              <div className="highlight-card">
                <div className="card-icon">
                  {/* <i className="fas fa-globe-americas"></i> */}
                </div>
                <h4>Lorem ipsum dolor sit amet</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus.
                </p>
              </div>

              <div className="highlight-card">
                <div className="card-icon">
                  {/* <i className="fas fa-laptop"></i> */}
                </div>
                <h4>Lorem ipsum dolor sit amet</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus.
                </p>
              </div>

              <div className="highlight-card">
                <div className="card-icon">
                  {/* <i className="fas fa-users"></i> */}
                </div>
                <h4>Lorem ipsum dolor sit amet</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ActionAndHighlights

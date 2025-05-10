"use client"

import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <div className="footer-logo">LOGO</div>
          <p className="footer-tagline">Certifying sustainability, empowering change</p>
          <p className="footer-description">
            EcoCertification provides trusted, transparent, and accessible certification services for a more sustainable
            future.
          </p>
          
        </div>

        <div className="footer-links-section">
          <div className="footer-column">
            <h3>Certification</h3>
            <ul>
              <li>
                <Link to="/application">Get Certified</Link>
              </li>
              <li>
                <Link to="/organic-certification">Scope of Certification</Link>
              </li>
              <li>
                <Link to="/certification-process">Certification Process</Link>
              </li>
              <li>
                <Link to="/independence-integrity">Independence & Integrity</Link>
              </li>
              <li>
                <Link to="/international-standards">International Standards</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/history">History & Our Team</Link>
              </li>
              <li>
                <Link to="/digital-platform">Eco Certification Digital Platform</Link>
              </li>
              <li>
                <Link to="/sustainability">Our Commitment</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contact-section">
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Reichardstige 1<br />
                  07743 Germany
                </span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>MKM(at)ecopia.de</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+49 3641-5643313</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} EcoCertification.</p>
      </div>
    </footer>
  )
}

export default Footer

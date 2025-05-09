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
          {/* <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div> */}
        </div>

        <div className="footer-links-section">
          <div className="footer-column">
            <h3>Certification</h3>
            <ul>
              <li>
                <Link to="/application">Get Certified</Link>
              </li>
              <li>
                <Link to="/organic-certification">Organic Certification</Link>
              </li>
              <li>
                <Link to="/eudr-compliance">EUDR Compliance</Link>
              </li>
              <li>
                <Link to="/fairtrade">Fairtrade Certification</Link>
              </li>
              <li>
                <Link to="/certification-process">Certification Process</Link>
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
                <Link to="/our-team">Our Team</Link>
              </li>
              <li>
                <Link to="/our-method">Our Method</Link>
              </li>
              <li>
                <Link to="/sustainability">Sustainability</Link>
              </li>
             
            </ul>
          </div>

          <div className="footer-column">
            {/* <h3>Resources</h3>
            <ul>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/resources/guides">Certification Guides</Link>
              </li>
              <li>
                <Link to="/events">Events & Webinars</Link>
              </li>
            </ul> */}
          </div>
        </div>

        <div className="footer-contact-section">
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Green Road</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>contact@</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+111</span>
              </li>
            </ul>
          </div>

          {/* <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest certification news and sustainability insights.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div> */}
        </div>
      </div>

      <div className="footer-middle">
        <div className="partners-section">
          <h3>Our Partners & Accreditations</h3>
          <div className="partners-logos">
            <div className="partner-logo">
              <span>Partner 1</span>
            </div>
            <div className="partner-logo">
              <span>Partner 2</span>
            </div>
            <div className="partner-logo">
              <span>Partner 3</span>
            </div>
            <div className="partner-logo">
              <span>Partner 4</span>
            </div>
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
        <p className="copyright">
          &copy; {new Date().getFullYear()} EcoCertification.
           {/* All rights reserved. Committed to sustainable practices worldwide.*/}
        </p>
      </div>
    </footer>
  )
}

export default Footer




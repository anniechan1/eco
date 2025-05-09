"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "./NavbarOption1.css"

function NavbarOption1() {
  const [click, setClick] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const searchInputRef = useRef(null)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const toggleSearch = () => {
    setSearchActive(!searchActive)
    if (!searchActive) {
      setTimeout(() => {
        searchInputRef.current && searchInputRef.current.focus()
      }, 300)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        !event.target.classList.contains("search-icon")
      ) {
        setSearchActive(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="navbar-organic">
      <div className="navbar-container-organic">
        <Link to="/" className="navbar-logo-organic" onClick={closeMobileMenu}>
          <span className="logo-text">LOGO</span>
          
        </Link>

        <div className="menu-icon-organic" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} aria-hidden="true" />
        </div>

        <ul className={click ? "nav-menu-organic active" : "nav-menu-organic"}>
          <li className="nav-item-organic">
            <span className="nav-links-organic">
              About Us <i className="fas fa-caret-down"></i>
            </span>
            <div className="dropdown-menu-organic">
              <Link to="/about" className="dropdown-link-organic" onClick={closeMobileMenu}>
                Who We Are
              </Link>
              <Link to="/history" className="dropdown-link-organic" onClick={closeMobileMenu}>
                History
              </Link>
              <Link to="/our-team" className="dropdown-link-organic" onClick={closeMobileMenu}>
                Our Team
              </Link>
              <Link to="/our-method" className="dropdown-link-organic" onClick={closeMobileMenu}>
                Our Method
              </Link>
              <Link to="/sustainability" className="dropdown-link-organic" onClick={closeMobileMenu}>
                Sustainability
              </Link>
            </div>
          </li>

          <li className="nav-item-organic">
            <span className="nav-links-organic">
              Certifications <i className="fas fa-caret-down"></i>
            </span>
            <div className="dropdown-menu-organic">
              <Link to="/organic-certification" className="dropdown-link-organic" onClick={closeMobileMenu}>
                Scope of Certification
              </Link>
              <Link to="/certification-process" className="dropdown-link-organic" onClick={closeMobileMenu}>
              Certification Process
              </Link>
              <Link to="/independence-integrity" className="dropdown-link-organic" onClick={closeMobileMenu}>
              Independence & Integrity
              </Link>
              <Link to="/international-standards" className="dropdown-link-organic" onClick={closeMobileMenu}>
              International Standards
              </Link>
              
            </div>
          </li>

          <li className="nav-item-organic">
            <span className="nav-links-organic">
              Sectors <i className="fas fa-caret-down"></i>
            </span>
            <div className="dropdown-menu-organic">
              <Link to="/sectors/agriculture" className="dropdown-link-organic" onClick={closeMobileMenu}>
                Agriculture
              </Link>
              <Link to="/sectors/forestry" className="dropdown-link-organic" onClick={closeMobileMenu}>
                Forestry
              </Link>
              <Link to="/sectors/apiculture" className="dropdown-link-organic" onClick={closeMobileMenu}>
                Apiculture (Beekeeping)
              </Link>
            </div>
          </li>

          <li className="nav-item-organic">
            <span className="nav-links-organic">
              Services <i className="fas fa-caret-down"></i>
            </span>
            <div className="dropdown-menu-organic">
              <Link to="/services/farmer-training" className="dropdown-link-organic" onClick={closeMobileMenu}>
                Farmer Training Programs
              </Link>
              <Link to="/services/inspector-training" className="dropdown-link-organic" onClick={closeMobileMenu}>
                Inspector & Auditor Training
              </Link>
            </div>
          </li>
        </ul>

        <div className="nav-icons-organic">
          <div className="search-container-organic">
            <i className="fas fa-search search-icon" onClick={toggleSearch}></i>
            <div className={`search-overlay ${searchActive ? "active" : ""}`}>
              <div className="search-input-wrapper">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for certification, services..."
                  className="search-input-organic"
                />
                <button className="search-button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <Link to="/contact" className="contact-link-organic">
            CONTACT
          </Link>
          <div className="language-dropdown-organic">
            <i className="fas fa-globe"></i>
            <div className="language-menu-organic">
              <div className="language-option-organic">English</div>
              <div className="language-option-organic">Deutsch</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarOption1

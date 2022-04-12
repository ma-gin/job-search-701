import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo">
          <div className="logo"></div>
        </div>
        <div className="footer-links">
          <div className="footer-socials">
            <i className="bi bi-facebook footer-hover"></i>
            <i className="bi bi-instagram footer-hover"></i>
            <i className="bi bi-youtube footer-hover"></i>
          </div>
          <div className="footer-infos">
            <Link to="/latest" className="footer-hover">
              About
            </Link>
            <Link to="/services" className="footer-hover">
              Services
            </Link>
            <Link to="/employers" className="footer-hover">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

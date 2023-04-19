import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer123">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li><a href="mailto:tiwarisatish985@gmail.com"><i className="fas fa-envelope"></i>Email</a></li>
              <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i>Twitter</a></li>
              <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i>LinkedIn</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About Us</h3>
            <p>We are a company dedicated to providing top-quality services to our clients.</p>
          </div>
          <div className="footer-column">
            <h3>Terms and Conditions</h3>
            <ul className="footer-links">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

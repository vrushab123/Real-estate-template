import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            We are a leading real estate company helping you find the perfect property for your needs. From residential flats to commercial spaces, we have it all.
          </p>
          <div className="socials">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2 className="footer-title">Contact Us</h2>
          <form action="#" method="post">
            <input type="text" name="name" className="text-input contact-input" placeholder="Your Name" required />
            <input type="email" name="email" className="text-input contact-input" placeholder="Your Email" required />
            <textarea name="message" className="text-input contact-input" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Your Real Estate Company | All Rights Reserved</p>
      </div>
    </footer>
  );
}

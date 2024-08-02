import React, { useState } from 'react';
import './about.css';

function About() {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
    console.log("Contact Information: info@organika.com, 555-555-5555");
  };

  return (
    <div className="about">
      <div className="hero">
        <img src="/images/organikaOwners.png" alt="Organika Owners" className="hero-image" />
        <h1>About Organika</h1>
        <p>Organika is a platform that allows you to find the best organic products in your area!</p>
        <h2>Our Mission</h2>
        <p>At Organika, we're passionate about bringing you the best organic products from local farmers and producers. Our carefully curated selection ensures you get the highest quality, sustainably sourced goods for a healthier lifestyle.</p>
      </div>
      <div className="content">
        <section className="contact-section">
          <h2>Contact Us</h2>
          {showContact ? (
            <>
              <p>Contact us at info@organika.com</p>
              <p>Call us at 555-555-5555</p>
            </>
          ) : (
            <button className="btn btn-primary" onClick={handleContactClick}>Contact Us</button>
          )}
        </section>
      </div>
    </div>
  );
}

export default About;

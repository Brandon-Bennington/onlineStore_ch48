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
      <h2>Organika</h2>
      <div className="contactUs">
        <p>Organika is a platform that allows you to find the best organic products in your area!</p>
        {showContact ? (
          <>
            <p>Contact us at info@organika.com</p>
            <p>Call us at 555-555-5555</p>
          </>
        ) : (
          <button className="btn btn-primary" onClick={handleContactClick}>Contact Us</button>
        )}
      </div>
    </div>
  );
}

export default About;
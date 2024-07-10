import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Organika</h1>
        <p>Your one-stop shop for the finest organic products</p>
      </div>
      <div className="content">
        <section className="about-section">
          <h2>About Us</h2>
          <p>At Organika, we're passionate about bringing you the best organic products from local farmers and producers. Our carefully curated selection ensures you get the highest quality, sustainably sourced goods for a healthier lifestyle.</p>
        </section>
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {/* You can add some featured product components here */}
          </div>
        </section>
        <section className="cta">
          <h2>Ready to explore?</h2>
          <Link to="/catalog" className="btn btn-primary btn-lg">
            Browse Our Catalog
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Home;
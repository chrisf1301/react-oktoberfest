import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      {/* Slideshow Section */}
      <section className="slideshow">
        <div className="slideshow-container">
          <img src="/images/homepage.png" alt="Oktoberfest Celebration" />
          <div className="slideshow-text">
            <h2>Oktoberfest 2024</h2>
            <p>Join us for the biggest German celebration in Pennsylvania! Traditional food, live music, and family fun await.</p>
          </div>
        </div>
      </section>
      
      {/* Main Content Area */}
      <div className="main-content">
        {/* Welcome Text Box */}
        <section className="welcome-section">
          <h2>Welcome to Oktoberfest</h2>
          <p>Experience authentic German culture right here in Pennsylvania! Our annual Oktoberfest brings together the community for a day of traditional German food, music, games, and celebration. Whether you're German or just love great food and fun, everyone is welcome to join the festivities!</p>
        </section>
        
        {/* Map Section */}
        <section className="map-section">
          <h3>German Beer & Brews</h3>
          <div className="map-container">
            <img src="/images/hofbrau.png" alt="Hofbräu German Beer" />
          </div>
          <p>Experience authentic German beer culture! From traditional Hofbräu brews to local craft beers, we offer the finest selection of German and German-style beers. Raise a stein and toast to friendship!</p>
        </section>
      </div>
      
      {/* Features Section */}
      <section className="features-section">
        <h2>What to Expect</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/images/food.jpeg" alt="Food" />
            <h3>Food & Drinks</h3>
            <p>Indulge in authentic German cuisine! Enjoy bratwurst, sauerkraut, pretzels, and traditional German beers. Our local vendors bring the best of German culinary traditions to Pennsylvania.</p>
          </div>
          <div className="feature-card">
            <img src="/images/don2.jpg" alt="Music" />
            <h3>Live Music</h3>
            <p>Dance to traditional German music and modern hits! Our talented musicians, including Don, will keep the celebration going with polka, folk songs, and contemporary favorites.</p>
          </div>
          <div className="feature-card">
            <img src="/images/family.png" alt="Family Fun" />
            <h3>Family Fun</h3>
            <p>Bring the whole family for a day of fun! Kids' activities, face painting, games, and entertainment ensure everyone from toddlers to grandparents has a wonderful time.</p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h3>88</h3>
          <p>Years Running</p>
        </div>
        <div className="stat-item">
          <h3>5000+</h3>
          <p>Attendees</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Vendors</p>
        </div>
        <div className="stat-item">
          <h3>11</h3>
          <p>Hours of Fun</p>
        </div>
      </section>
      
      {/* Footer */}
      <footer>
        <p>2024 Oktoberfest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

import React from 'react';
import Footer from '../components/Footer.jsx';
import Slideshow from '../components/Slideshow.jsx';
import "../css/About.css";

const About = () => {
  return (
    <div className="container">
      {/* About Header */}
      <section className="about-header">
        <h1>About Oktoberfest</h1>
      </section>
      
      {/* Slideshow replacing picture boxes */}
      <section className="about-slideshow">
        <h2>Festival Moments</h2>
        <Slideshow />
      </section>

      {/* Centered Parade Image */}
      <section className="about-parade">
        <img src={`${process.env.PUBLIC_URL}/images/parade.jpg`} alt="Cultural Parade" />
      </section>
      
      
      
      <Footer />
    </div>
  );
};

export default About;

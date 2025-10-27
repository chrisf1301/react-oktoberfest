import React from 'react';
import Footer from '../components/Footer.jsx';
import "../css/About.css";

const About = () => {
  return (
    <div className="container">
      {/* About Header */}
      <section className="about-header">
        <h1>About Oktoberfest</h1>
      </section>
      
      {/* Multiple Picture Holders */}
      <section className="picture-gallery">
        <div className="picture-holder">
          <img src={`${process.env.PUBLIC_URL}/images/clipart.jpeg`} alt="Clipart Food" />
          <div className="picture-caption">
            <h3>Authentic German Cuisine</h3>
            <p>Traditional bratwurst, sauerkraut, and German beers</p>
          </div>
        </div>
        <div className="picture-holder">
          <img src={`${process.env.PUBLIC_URL}/images/steve.jpeg`} alt="Steve" />
          <div className="picture-caption">
            <h3>Steve - Event Coordinator</h3>
            <p>Our dedicated organizer who makes it all happen</p>
          </div>
        </div>
        <div className="picture-holder">
          <img src={`${process.env.PUBLIC_URL}/images/emil.JPG`} alt="Emil" />
          <div className="picture-caption">
            <h3>Long Lasting Traditions</h3>
            <p>Leading our traditional German music performances</p>
          </div>
        </div>
        <div className="picture-holder">
          <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="Me" />
          <div className="picture-caption">
            <h3>Longtime Leaders</h3>
            <p>Bringing German culture to Pennsylvania</p>
          </div>
        </div>
      </section>
      
      {/* Slideshow Holder */}
      <section className="about-slideshow">
        <h2>Festival Highlights</h2>
        <div className="slideshow-container">
          <img src={`${process.env.PUBLIC_URL}/images/parade.jpg`} alt="Cultural Parade" />
        </div>
        <div className="slideshow-caption">
          <h3>Cultural Unity Parade</h3>
          <p>Celebrating the beautiful blend of German traditions with American community spirit, bringing together two cultures in one unforgettable celebration</p>
        </div>
      </section>
      
      {/* Vendors Section */}
      <section className="vendors-section">
        <h2>Local Vendors & Food Trucks</h2>
        <p>We're proud to partner with local Pennsylvania vendors who bring authentic German flavors to our festival. From traditional bratwurst and sauerkraut to freshly baked pretzels and German pastries, our vendors ensure every bite is authentic and delicious.</p>
        
        <p>Our food trucks offer a variety of German specialties including schnitzel, potato salad, and traditional German desserts. Don't forget to try our selection of German beers and non-alcoholic beverages, all carefully chosen to complement the authentic German experience.</p>
        
        <p>In addition to food vendors, we feature local artisans selling German-themed crafts, traditional clothing, and unique souvenirs. Support local businesses while taking home a piece of German culture from our festival!</p>
      </section>
      
      {/* History Section */}
      <section className="history-section">
        <h2>Our Story</h2>
        <p>Our German-American club traces its roots back to 1931, when a group of German immigrants settled in Pennsylvania and founded our organization to preserve their cultural heritage and traditions. These pioneering families brought with them the authentic customs, recipes, and celebrations from their homeland, determined to keep their German culture alive in their new American home.</p>
        
        <p>For over 70 years, our Oktoberfest has been the cornerstone of our community, growing from a small gathering of German families to one of Pennsylvania's most celebrated cultural events. What began as an intimate celebration among friends and neighbors has evolved into an annual festival that attracts thousands of visitors, while maintaining the authentic spirit and traditions passed down through generations.</p>
        
        <p>Today, we continue the legacy of our founding German immigrants by sharing the rich traditions of German culture with our diverse community. From traditional music and dance to authentic cuisine and games, we strive to create an authentic Oktoberfest experience that honors our heritage while welcoming everyone to join the celebration. We're proud to carry forward the vision of our founders and be part of Pennsylvania's vibrant cultural landscape!</p>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;

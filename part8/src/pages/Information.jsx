import React from 'react';
import ActivityItem from '../components/ActivityItem.jsx';
import Footer from '../components/Footer.jsx';
import "../css/Information.css";

const Information = () => {
  return (
    <div className="container">
      {/* Highlights Header */}
      <section className="highlights-header">
        <h1>Highlights</h1>
      </section>
      
      {/* Event Flyer */}
      <section className="flyer-section">
        <img src={`${process.env.PUBLIC_URL}/images/flyer.jpg`} alt="Oktoberfest Flyer" />
      </section>
      
      {/* Event Details */}
      <section className="event-details">
        <div className="address-info">
          <h2>Location</h2>
          <p>130 Davisville Rd</p>
          <p>Warminster, PA 18974</p>
          <p>Free parking available on-site</p>
        </div>
        <div className="date-info">
          <h2>Date & Time</h2>
          <p>Saturday, October 12th, 2024</p>
          <p>11:00 AM - 8:00 PM</p>
          <p>Rain or shine event!</p>
        </div>
      </section>
      
      {/* Large Text Box */}
      <section className="large-text-box">
        <h2>What to Expect</h2>
        <p>Join us for a day filled with authentic German culture, delicious food, and family fun! Our Oktoberfest features traditional German music, dancing, games, and activities for all ages. Experience the warmth of German hospitality right here in Pennsylvania.</p>
        
        <p>Bring your appetite for traditional German cuisine including bratwurst, sauerkraut, pretzels, and German beers. Our local vendors will be serving up authentic flavors that will transport you straight to Munich. Don't forget to try our selection of German desserts and pastries!</p>
        
        <p>Entertainment includes live music performances, traditional German dancing, kids' activities, and interactive games. Whether you're German or just love great food and fun, everyone is welcome to join our celebration of German culture and community spirit.</p>
        
        <p>Admission is free, but food and drinks are available for purchase from our vendors. We accept cash and credit cards. Bring the whole family for a day of fun, food, and festivities!</p>
      </section>
      
      {/* Video Section */}
      <section className="video-section">
        <h2>Event Activities</h2>
        <div className="activities-gallery">
          <ActivityItem 
            image="/images/hofbrau.png"
            title="German Beer & Brews"
            description="Experience authentic German beer culture! From traditional Hofbräu brews to local craft beers, we offer the finest selection of German and German-style beers."
          />
          <ActivityItem 
            image="/images/parade.jpg"
            title="Cultural Unity"
            description="Celebrating the beautiful blend of German traditions with American community spirit, bringing together two cultures in one unforgettable celebration."
          />
          <ActivityItem 
            image="/images/ken.jpeg"
            title="Picture Perfect Memories"
            description="Photo opportunities and memories that will last a lifetime."
          />
          <ActivityItem 
            image="/images/phil.jpeg"
            title="Beer"
            description="Traditional German beers and beverages to complete your Oktoberfest experience."
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Information;

import React from 'react';
import Footer from '../components/Footer.jsx';
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="container">
      {/* Contact Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any questions about Oktoberfest 2024!</p>
      </section>
      
      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <h3>Event Location</h3>
            <p>130 Davisville Rd<br />Warminster, PA 18974</p>
          </div>
          <div className="contact-info-item">
            <h3>Event Date</h3>
            <p>October 15, 2024<br />11:00 AM - 10:00 PM</p>
          </div>
          <div className="contact-info-item">
            <h3>Contact Info</h3>
            <p>Phone: (555) 123-4567<br />Email: info@oktoberfest2024.com</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

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
      
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="one">
            <h3>Send us a Message</h3>
            <p>Note: This is a static display. Forms are not functional in this version.</p>
            <form id="contact-form">
              <p>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" required />
              </p>
              <p>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" required />
              </p> 
              <p><label htmlFor="message">Message:</label></p>
              <textarea name="message" required></textarea>
              
              <p><button type="button" disabled>Submit Form (Not Functional)</button></p>
            </form>
          </div>
        </div>
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

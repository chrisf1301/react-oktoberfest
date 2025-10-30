import React, { useState } from 'react';
import Footer from '../components/Footer.jsx';
import "../css/Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "4503e64b-b451-4a7d-aedf-ee3b8f71afe8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
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
          <div className="columns">
            <div className="one">
              <h3>Send us a message</h3>
              <form id="contact-form" onSubmit={onSubmit}>
                <p>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </p>
                <p>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </p>
                <p>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </p>
                <button type="submit">Submit Form</button>
                <span>{result}</span>
              </form>
            </div>
            <div className="one">
              {/* Map placeholder intentionally left blank for now */}
            </div>
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

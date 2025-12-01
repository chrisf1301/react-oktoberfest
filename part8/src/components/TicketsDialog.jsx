import React, { useState } from "react";
import "../css/Tickets.css";

const TicketsDialog = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'https://server-oktoberfest.onrender.com';

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    try {
      const response = await fetch(`${SERVER_URL}/api/tickets`, {
        method: "POST",
        body: formData,
      });

      if (response.status === 200 || response.status === 201) {
        setResult("Ticket Order Successfully Submitted");
        event.target.reset();
        if (props.onTicketAdded) {
          props.onTicketAdded();
        }
        props.closeDialog();
      } else {
        console.log("Error submitting ticket", response);
        const errorText = await response.text();
        setResult(errorText || "Failed to submit ticket order");
      }
    } catch (err) {
      console.error("Error submitting ticket:", err);
      setResult("Error submitting ticket order. Please try again.");
    }
  };

  return (
    <div id="tickets-dialog" className="ticket-dialog-overlay" onClick={props.closeDialog}>
      <div className="ticket-dialog-content" onClick={(e) => e.stopPropagation()}>
        <div className="ticket-dialog-container">
          <span
            id="dialog-close"
            className="ticket-dialog-close"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="ticket-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={inputs.phone || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="ticketType">Ticket Type:</label>
              <select
                id="ticketType"
                name="ticketType"
                value={inputs.ticketType || ""}
                onChange={handleChange}
                required
              >
                <option value="">Select ticket type</option>
                <option value="General Admission">General Admission - FREE</option>
                <option value="Family Pass">Family Pass - $25</option>
                <option value="VIP Pass">VIP Pass - $50</option>
                <option value="Early Bird Special">Early Bird Special - 20% OFF</option>
              </select>
            </p>

            <p>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={inputs.quantity || ""}
                onChange={handleChange}
                min="1"
                required
              />
            </p>

            <section style={{display: "flex", gap: "20px", marginBottom: "15px"}}>
              <div style={{flex: "1"}}>
                <p><strong>Image Preview:</strong></p>
                <img
                  src={
                    inputs.image != null
                      ? URL.createObjectURL(inputs.image)
                      : ""
                  }
                  alt="Ticket preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    display: inputs.image ? "block" : "none"
                  }}
                  onError={(e) => {
                    console.error('Image failed to load');
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div style={{flex: "1"}}>
                <p>
                  <label htmlFor="image">Upload Image (optional):</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </p>
              </div>
            </section>

            <p>
              <button type="submit">Submit</button>
            </p>

            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketsDialog;


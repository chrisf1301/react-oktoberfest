import React, { useState, useEffect } from "react";
import "../css/Tickets.css";

const EditTicketDialog = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'https://server-oktoberfest.onrender.com';

  useEffect(() => {
    if (props.ticket) {
      setInputs({
        name: props.ticket.name || "",
        email: props.ticket.email || "",
        phone: props.ticket.phone || "",
        ticketType: props.ticket.ticketType || "",
        quantity: props.ticket.quantity || ""
      });
    }
  }, [props.ticket]);

  const validateForm = () => {
    const newErrors = {};

    if (!inputs.name || inputs.name.trim() === '') {
      newErrors.name = 'Name is required';
    } else if (inputs.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.email || inputs.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(inputs.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!inputs.phone || inputs.phone.trim() === '') {
      newErrors.phone = 'Phone number is required';
    } else if (inputs.phone.trim().length < 10) {
      newErrors.phone = 'Phone number must be at least 10 characters';
    }

    const validTicketTypes = ['General Admission', 'Family Pass', 'VIP Pass', 'Early Bird Special'];
    if (!inputs.ticketType || inputs.ticketType.trim() === '') {
      newErrors.ticketType = 'Please select a ticket type';
    } else if (!validTicketTypes.includes(inputs.ticketType)) {
      newErrors.ticketType = 'Please select a valid ticket type';
    }

    const quantityNum = parseInt(inputs.quantity);
    if (!inputs.quantity || inputs.quantity === '') {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(quantityNum) || quantityNum < 1) {
      newErrors.quantity = 'Quantity must be a number greater than or equal to 1';
    } else if (quantityNum > 20) {
      newErrors.quantity = 'Maximum 20 tickets per order';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    if (result) {
      setResult("");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      setResult("Please fix the errors below");
      return;
    }

    setResult("Sending....");
    const formData = new FormData(event.target);

    const response = await fetch(`${SERVER_URL}/api/tickets/${props.ticket.id}`, {
      method: "PUT",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Ticket Successfully Updated");
      if (props.onTicketUpdated) {
        props.onTicketUpdated();
      }
      setTimeout(() => {
        props.closeDialog();
      }, 1500);
    } else {
      console.log("Error updating ticket", response);
      setResult("Error updating ticket");
    }
  };

  return (
    <div className="ticket-dialog-overlay" onClick={props.closeDialog}>
      <div className="ticket-dialog-content" onClick={(e) => e.stopPropagation()}>
        <div className="ticket-dialog-container">
          <span
            className="ticket-dialog-close"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <h2>Edit Ticket</h2>
          {result && <p style={{color: result.includes("Successfully") ? "green" : "red", fontWeight: "bold"}}>{result}</p>}
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
              {errors.name && <span style={{color: "red", fontSize: "0.9em"}}>{errors.name}</span>}
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
              {errors.email && <span style={{color: "red", fontSize: "0.9em"}}>{errors.email}</span>}
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
              {errors.phone && <span style={{color: "red", fontSize: "0.9em"}}>{errors.phone}</span>}
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
              {errors.ticketType && <span style={{color: "red", fontSize: "0.9em"}}>{errors.ticketType}</span>}
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
                max="20"
                required
              />
              {errors.quantity && <span style={{color: "red", fontSize: "0.9em"}}>{errors.quantity}</span>}
            </p>

            <p>
              <button type="submit">Update Ticket</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTicketDialog;


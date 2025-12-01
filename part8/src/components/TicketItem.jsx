import "../css/Tickets.css";

import React, { useState } from "react";

import EditTicketDialog from "./EditTicketDialog";

const TicketItem = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showTicket, setShowTicket] = useState(true);
  const [ticket, setTicket] = useState(props.ticket);

  const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'https://server-oktoberfest.onrender.com';

  const imageSrc = ticket.image 
    ? `${SERVER_URL}/${ticket.image.startsWith('/') ? ticket.image.slice(1) : ticket.image}`
    : null;

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const editTicket = (updatedTicket) => {
    setTicket(updatedTicket);
    if (props.onTicketUpdated) {
      props.onTicketUpdated();
    }
  };

  const hideTicket = () => {
    setShowTicket(false);
    if (props.onTicketDeleted) {
      props.onTicketDeleted(ticket._id);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this ticket?")) {
      return;
    }
    hideTicket();
  };

  return (
    <>
      {showTicket ? (
        <div className="ticket-order-card">
          {showEditDialog ? (
            <EditTicketDialog
              closeDialog={closeEditDialog}
              editTicket={editTicket}
              _id={ticket._id}
              name={ticket.name}
              email={ticket.email}
              phone={ticket.phone}
              ticketType={ticket.ticketType}
              quantity={ticket.quantity}
              image={ticket.image}
            />
          ) : (
            ""
          )}

          <h3>{ticket.name}</h3>
          {imageSrc && (
            <div style={{marginBottom: "15px", textAlign: "center"}}>
              <img 
                src={imageSrc} 
                alt="Ticket" 
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  borderRadius: "5px",
                  border: "1px solid #ddd"
                }}
                onError={(e) => {
                  console.error('Image failed to load:', ticket.image);
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="ticket-order-info">
            <p><strong>Email:</strong> {ticket.email}</p>
            <p><strong>Phone:</strong> {ticket.phone}</p>
            <p><strong>Ticket Type:</strong> {ticket.ticketType}</p>
            <p><strong>Quantity:</strong> {ticket.quantity}</p>
            {ticket.status && (
              <p><strong>Status:</strong> {ticket.status}</p>
            )}
          </div>
          <div style={{marginTop: "15px", display: "flex", gap: "10px", justifyContent: "center"}}>
            <button
              onClick={openEditDialog}
              style={{
                padding: "8px 20px",
                backgroundColor: "var(--color-dark-green)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              style={{
                padding: "8px 20px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TicketItem;


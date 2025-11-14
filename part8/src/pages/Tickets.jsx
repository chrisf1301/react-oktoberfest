import React, { useState, useEffect } from 'react';
import TicketCard from '../components/TicketCard.jsx';
import Footer from '../components/Footer.jsx';
import TicketsDialog from '../components/TicketsDialog.jsx';
import "../css/Tickets.css";

const Tickets = () => {
  const [showForm, setShowForm] = useState(false);
  const [myTickets, setMyTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'https://server-oktoberfest.onrender.com';

  // Load tickets from server
  const loadTickets = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${SERVER_URL}/api/tickets`);
      if (response.status === 200) {
        const tickets = await response.json();
        setMyTickets(Array.isArray(tickets) ? tickets : []);
      }
    } catch (err) {
      console.error('Error loading tickets:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);

  const closeDialog = () => {
    setShowForm(false);
  };

  const handleTicketAdded = () => {
    loadTickets();
  };

  return (
    <div className="container">
      {/* Tickets Header */}
      <section className="tickets-header">
        <h1>Tickets & Pricing</h1>
      </section>
      
      {/* Ticket Options */}
      <section className="ticket-options">
        <TicketCard 
          backgroundImage="/images/people.jpeg"
          title="General Admission"
          price="FREE"
          features={["Access to all festival areas", "Live music and entertainment", "Kids' activities and games"]}
        />
        <TicketCard 
          backgroundImage="/images/threepeople.jpeg"
          title="Family Pass"
          price="$25"
          features={["Perfect for families of 4-6", "Includes food vouchers", "Priority seating areas", "Kids' activity package"]}
        />
        <TicketCard 
          backgroundImage="/images/flyer.jpeg"
          title="VIP Pass"
          price="$50"
          features={["Exclusive VIP seating area", "Complimentary food & drinks", "Meet & greet with performers", "Limited edition souvenir", "Priority parking access"]}
        />
        <TicketCard 
          backgroundImage="/images/germanGame.jpeg"
          title="Early Bird Special"
          price="20% OFF"
          features={["Purchase before October 1st", "Save on all ticket types", "Guaranteed availability", "Bonus food voucher included"]}
        />
      </section>
      
      {/* Location Paragraph */}
      <section className="location-paragraph">
        <h2>How to Purchase Tickets</h2>
        <p>Tickets can be purchased online through our website, at the event venue, or at the entrance on the day of the festival. We accept cash, credit cards, and mobile payments. Early bird discounts are available until October 1st, 2024.</p>
        <p>For group bookings of 10 or more people, please contact us directly for special group rates. All tickets include access to live music, entertainment, and activities. Food and beverages are available for purchase from our vendors throughout the festival grounds.</p>
        
        <button 
          onClick={() => setShowForm(true)} 
          className="purchase-ticket-btn"
          style={{
            marginTop: '20px',
            padding: '15px 30px',
            fontSize: '1.2em',
            backgroundColor: 'var(--color-dark-green)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
        >
          Purchase Tickets Online
        </button>
      </section>

      {/* Ticket Dialog */}
      {showForm && (
        <TicketsDialog 
          closeDialog={closeDialog}
          onTicketAdded={handleTicketAdded}
        />
      )}

      {/* My Tickets Section */}
      <section className="my-tickets-section">
        <h2>My Tickets</h2>
        
        {loading ? (
          <p className="ticket-loading">Loading your tickets...</p>
        ) : myTickets.length === 0 ? (
          <p className="ticket-empty">No tickets purchased yet. Purchase tickets above to see them here!</p>
        ) : (
          <div className="my-tickets-grid">
            {myTickets.map((ticket, index) => (
              <div key={ticket.id || index} className="ticket-order-card">
                <h3>{ticket.name}</h3>
                <div className="ticket-order-info">
                  <p><strong>Email:</strong> {ticket.email}</p>
                  <p><strong>Phone:</strong> {ticket.phone}</p>
                  <p><strong>Ticket Type:</strong> {ticket.ticketType}</p>
                  <p><strong>Quantity:</strong> {ticket.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default Tickets;

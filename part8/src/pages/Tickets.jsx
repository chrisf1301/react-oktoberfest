import React from 'react';
import TicketCard from '../components/TicketCard.jsx';
import Footer from '../components/Footer.jsx';
import "../css/Tickets.css";

const Tickets = () => {
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
      </section>
      
      <Footer />
    </div>
  );
};

export default Tickets;

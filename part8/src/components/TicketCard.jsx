import React from 'react';
import "../css/TicketCard.css";

const TicketCard = ({ backgroundImage, title, price, features }) => {
    return (
        <div className="ticket-card">
            <div className="ticket-background" style={{backgroundImage: `url('${process.env.PUBLIC_URL}${backgroundImage}')`}}></div>
            <div className="ticket-content">
                <h2>{title}</h2>
                <div className="price">{price}</div>
                {features.map((feature, index) => (
                    <p key={index}>{feature}</p>
                ))}
            </div>
        </div>
    );
};

export default TicketCard;
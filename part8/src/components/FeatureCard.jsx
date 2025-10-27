// Component based on W3Schools React tutorial: https://www.w3schools.com/react/react_components.asp
import React from 'react';
import "../css/FeatureCard.css";

const FeatureCard = ({ image, title, description }) => {
    return (
        <div className="feature-card">
            <img src={`${process.env.PUBLIC_URL}${image}`} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;


// Component based on W3Schools React tutorial: https://www.w3schools.com/react/react_components.asp
import React from 'react';
import "../css/StatItem.css";

const StatItem = ({ number, label }) => {
    return (
        <div className="stat-item">
            <h3>{number}</h3>
            <p>{label}</p>
        </div>
    );
};

export default StatItem;


import React from 'react';
import "../css/ActivityItem.css";

const ActivityItem = ({ image, title, description }) => {
    return (
        <div className="activity-item">
            <img src={image} alt={title} />
            <div className="activity-caption">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ActivityItem;


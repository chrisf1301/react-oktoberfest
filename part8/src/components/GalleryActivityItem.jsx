// Component based on W3Schools React tutorial: https://www.w3schools.com/react/react_components.asp
import React from 'react';
import "../css/Gallery.css";

const GalleryActivityItem = ({ 
    id, 
    img_name, 
    name, 
    category, 
    price_range, 
    popularity, 
    onClick 
}) => {
    // Load images from server URL
    const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'https://server-oktoberfest.onrender.com';
    const cleanImgName = img_name ? img_name.trim() : '';
    const imageUrl = `${SERVER_URL}/${cleanImgName}`;
    
    return (
        <div className="gallery-item" onClick={onClick}>
            <img 
                src={imageUrl} 
                alt={name}
                onError={(e) => {
                    console.error('Image failed to load:', imageUrl);
                    e.target.style.display = 'none';
                }}
            />
            <div className="activity-info">
                <h3>{name}</h3>
                <p className="category">{category}</p>
                <p className="price">{price_range}</p>
                <p className="popularity">{popularity}</p>
            </div>
        </div>
    );
};

export default GalleryActivityItem;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer.jsx';
import GalleryActivityItem from '../components/GalleryActivityItem.jsx';
import "../css/Gallery.css";

const Gallery = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // After page has loaded
  useEffect(() => {
    const loadActivities = async () => {
      try {
        // Fetch JSON data from Render server
        const response = await axios.get('https://server-oktoberfest.onrender.com/api/activities');
        setActivities(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching activities:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  const openModal = (activity) => {
    setSelectedImage(activity);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="container">
        <section className="gallery-header">
          <h1>Gallery</h1>
        </section>
        <div className="loading-message">Loading activities...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <section className="gallery-header">
          <h1>Gallery</h1>
        </section>
        <div className="error-message">Error loading activities: {error}</div>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="gallery-header">
        <h1>Gallery</h1>
      </section>
      
      <section className="json-notice">
        <h2>Oktoberfest Activities & Features</h2>
        <p>This page loads festival activities and features from our server API. Data includes activity names, descriptions, categories, pricing, and popularity ratings.</p>
      </section>
      
      <section className="image-gallery">
        {activities.map((activity) => (
          <GalleryActivityItem
            key={activity._id}
            id={activity._id}
            img_name={activity.img_name}
            name={activity.name}
            category={activity.category}
            price_range={activity.price_range}
            popularity={activity.popularity}
            onClick={() => openModal(activity)}
          />
        ))}
      </section>
      
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={`${process.env.REACT_APP_SERVER_URL || 'https://server-oktoberfest.onrender.com'}/${selectedImage.img_name}`} alt={selectedImage.name} />
            <div className="modal-info">
              <h3>{selectedImage.name}</h3>
              <p><strong>Category:</strong> {selectedImage.category}</p>
              <p><strong>Price:</strong> {selectedImage.price_range}</p>
              <p><strong>Popularity:</strong> {selectedImage.popularity}</p>
              <p><strong>Description:</strong> {selectedImage.description}</p>
              {selectedImage.dietary_options && (
                <p><strong>Dietary Options:</strong> {selectedImage.dietary_options}</p>
              )}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;

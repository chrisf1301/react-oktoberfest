import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer.jsx';
import "../css/Gallery.css";

const Gallery = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await fetch('/oktoberfest-activities.json');
        if (!response.ok) {
          throw new Error('Failed to load activities');
        }
        const data = await response.json();
        setActivities(data);
        setLoading(false);
      } catch (err) {
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
        <p>This page loads festival activities and features from a JSON file. Data includes activity names, descriptions, categories, pricing, and popularity ratings.</p>
      </section>
      
      <section className="image-gallery">
        {activities.map((activity) => (
          <div key={activity._id} className="gallery-item" onClick={() => openModal(activity)}>
            <img src={`/images/${activity.img_name}`} alt={activity.name} />
            <div className="activity-info">
              <h3>{activity.name}</h3>
              <p className="category">{activity.category}</p>
              <p className="price">{activity.price_range}</p>
              <p className="popularity">{activity.popularity}</p>
            </div>
          </div>
        ))}
      </section>
      
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={`/images/${selectedImage.img_name}`} alt={selectedImage.name} />
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

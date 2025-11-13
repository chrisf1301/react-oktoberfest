import React, { useState } from 'react';
import "../css/ActivityFormDialog.css";

const ActivityFormDialog = ({ closeDialog, onActivityAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price_range: '',
    popularity: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'https://server-oktoberfest.onrender.com';

  // Simplified validation
  const validate = () => {
    const newErrors = {};

    if (!selectedFile) {
      newErrors.image = 'Please select an image file';
    }

    if (!formData.name || formData.name.trim() === '') {
      newErrors.name = 'Activity name is required';
    }

    if (!formData.description || formData.description.trim() === '') {
      newErrors.description = 'Description is required';
    }

    if (!formData.category || formData.category.trim() === '') {
      newErrors.category = 'Category is required';
    }

    if (!formData.price_range || formData.price_range.trim() === '') {
      newErrors.price_range = 'Price range is required';
    }

    if (!formData.popularity || formData.popularity.trim() === '') {
      newErrors.popularity = 'Popularity is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (errors.image) {
        setErrors(prev => ({
          ...prev,
          image: ''
        }));
      }
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('Sending....');

    try {
      // Create FormData directly from the form element (like the example)
      const formDataToSend = new FormData(e.target);

      const response = await fetch(`${SERVER_URL}/api/activities`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus('success');
        const newActivity = await response.json();
        
        // Reset the form
        e.target.reset();
        setFormData({
          name: '',
          description: '',
          category: '',
          price_range: '',
          popularity: ''
        });
        setSelectedFile(null);
        
        // Notify parent component that activity was added
        if (onActivityAdded) {
          onActivityAdded();
        }
        
        // Auto-close after 2 seconds on success
        setTimeout(() => {
          closeDialog();
        }, 2000);
      } else {
        console.log('Error adding activity', response);
        setSubmitStatus('error');
        setErrors({ submit: 'Failed to add activity. Please try again.' });
      }
    } catch (err) {
      console.error('Error adding activity:', err);
      setSubmitStatus('error');
      setErrors({ submit: 'Failed to add activity. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="activity-form-overlay" onClick={closeDialog}>
      <div className="activity-form-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="form-close-btn" onClick={closeDialog}>&times;</button>
        
        <h2>Add New Activity</h2>
        
        {submitStatus && (
          <div className={submitStatus === 'success' ? 'form-success-message' : submitStatus === 'error' ? 'form-error-message' : 'form-info-message'}>
            {submitStatus === 'success' ? '✓ Activity added successfully!' : submitStatus === 'error' ? (errors.submit || 'Failed to add activity') : submitStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className="activity-form" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="image">Select Image *</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className={errors.image ? 'error' : ''}
            />
            {selectedFile && (
              <p className="file-selected">Selected: {selectedFile.name}</p>
            )}
            {errors.image && <span className="error-message">{errors.image}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name">Activity Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Traditional German Food"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the activity..."
              rows="3"
              className={errors.description ? 'error' : ''}
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g., Food & Dining"
              className={errors.category ? 'error' : ''}
            />
            {errors.category && <span className="error-message">{errors.category}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price_range">Price Range *</label>
              <input
                type="text"
                id="price_range"
                name="price_range"
                value={formData.price_range}
                onChange={handleChange}
                placeholder="e.g., $8-15"
                className={errors.price_range ? 'error' : ''}
              />
              {errors.price_range && <span className="error-message">{errors.price_range}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="popularity">Popularity *</label>
              <select
                id="popularity"
                name="popularity"
                value={formData.popularity}
                onChange={handleChange}
                className={errors.popularity ? 'error' : ''}
              >
                <option value="">Select popularity</option>
                <option value="Extremely Popular">Extremely Popular</option>
                <option value="Very Popular">Very Popular</option>
                <option value="Popular">Popular</option>
                <option value="Moderately Popular">Moderately Popular</option>
                <option value="Not Popular">Not Popular</option>
              </select>
              {errors.popularity && <span className="error-message">{errors.popularity}</span>}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={closeDialog} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Activity'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActivityFormDialog;


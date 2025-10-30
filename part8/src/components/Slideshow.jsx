import React, { useState } from 'react';
import "../css/Slideshow.css";

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    // Use images hosted in public/images to avoid bundling issues
    const images = [
        `${process.env.PUBLIC_URL}/images/clipart.jpeg`,
        `${process.env.PUBLIC_URL}/images/emil.JPG`,
        `${process.env.PUBLIC_URL}/images/food.jpeg`,
        `${process.env.PUBLIC_URL}/images/me.jpg`
    ];

    const slideForward = () => {
        setSlideIndex(slideIndex < images.length - 1 ? slideIndex + 1 : 0);
    };

    const slideBackward = () => {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : images.length - 1);
    };

    return (
        <section id="slideshow" className="slideshow">
            <div className="slideshow-container">
                <img src={images[slideIndex]} alt="Event highlight" />
                <button className="arrow" onClick={slideForward} id="right-arrow" type="button" aria-label="Next slide">&gt;</button>
                <button className="arrow" onClick={slideBackward} id="left-arrow" type="button" aria-label="Previous slide">&lt;</button>
            </div>
        </section>
    );
};

export default Slideshow;



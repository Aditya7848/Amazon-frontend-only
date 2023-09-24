import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={handleClickPrev}>Previous</button>
      <div className="carousel">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
};

const App = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // ... add more image URLs here
    'image20.jpg',
  ];

  return (
    <div>
      <h1>Image Carousel</h1>
      <ImageCarousel images={images} />
    </div>
  );
};

export default App;
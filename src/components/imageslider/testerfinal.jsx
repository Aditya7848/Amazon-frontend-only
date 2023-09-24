import React, { useState } from "react";

const AmazonProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handleClickPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handleClickPrev}>
        {"<"}
      </button>
      <div className="carousel">
        {products.map((product, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            {/* Add more product details or customizations */}
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleClickNext}>
        {">"}
      </button>
    </div>
  );
};

export default AmazonProductCarousel;

import React, { useState } from 'react';
// import './lightbox.css';
// import { FiMove } from 'react-icons/fi';


const Lightbox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + images.length - 1) % images.length
    );
  };

  return (
    <>
      <div className="lightbox">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <a href='#Portfolio' className='port'>
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => openLightbox(index)}
                width="100%"
              />
           </a>
            {/* <ul className="social-icons">
              <li>
                <a href="#Portfolio">
                 <FiMove/>
                </a>
              </li>
            </ul> */}
       
          </div>
        ))}
      </div>
              {/* <span class="eye-wrapper">
        
              <i class="icon icon-cursor-move eye-icon" ></i></span> */}

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeLightbox()}>
              &times;
            </span>
            <img src={images[currentImageIndex].src} alt="" />
            <button className="prev" onClick={() => prevImage()}>
              &#10094;
            </button>
            <button className="next" onClick={() => nextImage()}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Lightbox;

import React, { useState } from 'react';
import './GalleryPage.css';
import Footer from '../../utils/Footer/Footer';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageColumns = [
    [
      './images/IMG_1.JPG', './images/IMG_5.JPG', './images/IMG_9.jpeg', './images/IMG_13.JPG', './images/IMG_17.JPG',
      './images/IMG_21.JPG', './images/IMG_25.JPG', './images/IMG_29.jpeg', './images/IMG_33.jpeg'
    ],
    [
      './images/IMG_2.JPG', './images/IMG_6.jpg', './images/IMG_10.jpg', './images/IMG_14.jpg', './images/IMG_18.jpg',
      './images/IMG_22.jpeg', './images/IMG_26.jpeg'
    ],
    [
      './images/IMG_3.jpg', './images/IMG_7.jpg', './images/IMG_11.jpeg', './images/IMG_15.jpeg', './images/IMG_19.jpeg',
      './images/IMG_23.jpeg', './images/IMG_27.jpeg', './images/IMG_31.jpg', './images/IMG_35.jpeg'
    ],
    [
      './images/IMG_4.jpeg', './images/IMG_8.jpeg', './images/IMG_12.jpeg', './images/IMG_16.jpeg', './images/IMG_20.jpeg',
      './images/IMG_24.jpeg', './images/IMG_28.jpeg', './images/IMG_32.jpeg'
    ]
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container-gallery">
      <div className="row">
        <h1>Gallery</h1>
        <p>Step into our Marcos Quay's gallery, a dynamic montage of athletic prowess, teamwork, and unforgettable moments captured on and off the field</p>
      </div>
      <div className="gallery-main-container">
        {imageColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="gallery-child-container">
            {column.map((image, imageIndex) => (
              <img
                key={`${columnIndex}-${imageIndex}`}
                src={image}
                alt={`Image ${columnIndex + 1}-${imageIndex + 1}`}
                onClick={() => openImage(image)}
              />
            ))}
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="enlarged-image-overlay" onClick={closeImage}>
          <img src={selectedImage} alt="Enlarged view" className="enlarged-image" />
        </div>
      )}
      <Footer />
    
    </div>
  );
}

export default GalleryPage;
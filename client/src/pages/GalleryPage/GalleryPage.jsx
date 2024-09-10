import React from 'react'
import './GalleryPage.css';
import Footer from '../../utils/Footer/Footer';

const GalleryPage = () => {

  return (
    <div className="container1">
      <div className="row">
        <h1>Gallery</h1>
        <p>Step into our Marcos Quay's gallery, a dynamic montage of athletic prowess, teamwork, and unforgettable moments captured on and off the field</p>
      </div>
      <div className="gallery-main-container">
        <div className="gallery-child-container">
          <img src='./images/IMG_1.JPG' alt='Image 1'></img>
          <img src='./images/IMG_5.JPG' alt='Image 1'></img>
          <img src='./images/IMG_9.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_13.JPG' alt='Image 1'></img>
          <img src='./images/IMG_17.JPG' alt='Image 1'></img>
          <img src='./images/IMG_21.JPG' alt='Image 1'></img>
          <img src='./images/IMG_25.JPG' alt='Image 1'></img>
          <img src='./images/IMG_29.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_33.jpeg' alt='Image 1'></img>
        </div>
        <div className="gallery-child-container">
          <img src='./images/IMG_2.JPG' alt='Image 1'></img>
          <img src='./images/IMG_6.jpg' alt='Image 1'></img>
          <img src='./images/IMG_10.jpg' alt='Image 1'></img>
          <img src='./images/IMG_14.jpg' alt='Image 1'></img>
          <img src='./images/IMG_18.jpg' alt='Image 1'></img>
          <img src='./images/IMG_22.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_26.jpeg' alt='Image 1'></img>
        </div>
        <div className="gallery-child-container">
          <img src='./images/IMG_3.jpg' alt='Image 1'></img>
          <img src='./images/IMG_7.jpg' alt='Image 1'></img>
          <img src='./images/IMG_11.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_15.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_19.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_23.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_27.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_31.jpg' alt='Image 1'></img>
          <img src='./images/IMG_35.jpeg' alt='Image 1'></img>
        </div>
        <div className="gallery-child-container">
          <img src='./images/IMG_4.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_8.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_12.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_16.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_20.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_24.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_28.jpeg' alt='Image 1'></img>
          <img src='./images/IMG_32.jpeg' alt='Image 1'></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default GalleryPage
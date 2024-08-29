import React from 'react';
import './OurOfferingsCard.css'
const OurOfferingsCard = ({ img, title, content, url }) => {
  return (
    <div className="ourOfferingsCard">
      <div className="ourOfferingsCard-image">
        <img src={img} alt={title} />
      </div>

      <div className="ourOfferingsCard-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <a href={url} className="ourOfferingsCard-link">Know More &#8250;</a>
      </div>
    </div>
  );
};

export default OurOfferingsCard;

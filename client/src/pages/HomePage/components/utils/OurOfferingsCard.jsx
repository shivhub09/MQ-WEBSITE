import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OurOfferingsCard.css';

const OurOfferingsCard = ({ img, title, content, url }) => {
  const navigate = useNavigate();

  function handleOnClick(url) {
    navigate(`/ourOfferings/${url}`);
  }

  return (
    <div className="ourOfferingsCard">
      <div className="ourOfferingsCard-image">
        <img src={img} alt={title} />
      </div>

      <div className="ourOfferingsCard-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <h4
          className="ourOfferingsCard-link" 
          onClick={() => handleOnClick(url)} // pass as a callback
        >
          Know More &#8250;
        </h4>
      </div>
    </div>
  );
};

export default OurOfferingsCard;

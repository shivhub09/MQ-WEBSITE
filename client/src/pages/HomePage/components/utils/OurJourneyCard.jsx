import React, { useEffect, useState } from 'react';
import "./OurJourneyCard.css";

const OurJourneyCard = (props) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const end = parseInt(props.number);
    const start = end > 100000 ? 100000 : 0; // Start from 100,000 if the number is large
    const duration = 2000; // duration in ms
    let current = start;
    const increment = end > start ? Math.ceil((end - start) / (duration / 50)) : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        setDisplayNumber(end);
        clearInterval(timer);
      } else {
        setDisplayNumber(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [props.number]);

  return (
    <div className="ourJourneyCard">
        <h1>{props.title}</h1>
        <h2>{displayNumber}+</h2>
    </div>
  );
}

export default OurJourneyCard;

import React, { useEffect, useState, useRef } from 'react';
import "./OurJourneyCard.css";

const OurJourneyCard = (props) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const cardRef = useRef(null); // To track the component visibility

  useEffect(() => {
    const end = parseInt(props.number);
    const duration = 4000; // Total animation duration in ms
    const frameDuration = 1000 / 60; // Approximate duration per frame at 60fps
    const totalFrames = Math.round(duration / frameDuration);

    // Determine start point: 150000 if end is greater than 150000, else 0
    const start = end > 150000 ? 150000 : 0;

    // Easing function for smooth transition (ease-out cubic effect)
    const easeOutCubic = (t) => --t * t * t + 1;

    const scrollEffect = () => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutCubic(Math.min(frame / totalFrames, 1)); // Apply cubic easing for smoother effect
        let currentNumber = Math.floor(progress * (end - start) + start);

        // Dynamic skip logic: Start with larger skips, reduce them toward the end
        if (frame < totalFrames) {
          const step = Math.max(1, Math.floor((1 - progress) * 100)); // Reduce step size as progress increases
          currentNumber = currentNumber - (currentNumber % step); // Skip by a dynamic step size
        } else {
          currentNumber = end; // Ensure final number is correct
        }

        setDisplayNumber(currentNumber);

        if (progress === 1) {
          clearInterval(counter);
        }
      }, frameDuration);
    };

    // Observer to detect when component is in view
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        scrollEffect(); // Trigger the scroll effect when component is in view
      }
    }, { threshold: 0.5 }); // Adjust threshold to trigger when 50% of the card is visible

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current); // Cleanup observer
      }
    };
  }, [props.number]);

  return (
    <div className="ourJourneyCard" ref={cardRef}>
      <h1>{props.title}</h1>
      <h2>{displayNumber}+</h2>
    </div>
  );
};

export default OurJourneyCard;

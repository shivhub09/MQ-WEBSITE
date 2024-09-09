import React, {useEffect} from 'react'
import './SportsAcademy.css'
const SportsAcademy = () => {

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className='sportsAcademy-container'>
      <h2>Sports Academy</h2>
    </div>
  )
}

export default SportsAcademy

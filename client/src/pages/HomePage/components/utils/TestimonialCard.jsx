import React from 'react'
import './TestimonialCard.css'
const TestimonialCard = (props) => {
  return (
    <div className="testimonialCard-container">
        <p className='testimonialCard-content'>{props.content}</p>
        <h3 className='testimonialCard-name'>{props.name}</h3>
        <h3 className='testimonialCard-position'>{props.position}</h3>
    </div>
  )
}

export default TestimonialCard
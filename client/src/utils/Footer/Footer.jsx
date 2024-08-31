import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <h3 className='footer-line'>© 2024 Marcos Quay. All rights reserved.</h3>
      <div className="social-media-footer">
        <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="Facebook" />
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png" alt="Instagram" />
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" alt="Twitter" />
        <img src="https://cdn-icons-png.flaticon.com/512/733/733641.png" alt="Whatsapp" />
        <img src="https://cdn-icons-png.flaticon.com/512/152/152810.png" alt="YouTube" />
      </div>
    </div>
  )
}

export default Footer

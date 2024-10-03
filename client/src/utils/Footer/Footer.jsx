import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-main-container">
      <h3 className='footer-line'>© 2024 Marcos Quay. All rights reserved.</h3>
      <div className="social-media-footer">
        <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="Facebook"
          onClick={() => window.open('https://www.facebook.com/profile.php?id=100067224519991&mibextid=LQQJ4d', '_blank')} />
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png" alt="Instagram" onClick={() => window.open('https://www.instagram.com/marcosquay?igsh=MWZybmc4ZjBuZ2N6&utm_source=qr', '_blank')} />
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" alt="Twitter" onClick={() => window.open('https://WWW.twitter.com/marcosquay', '_blank')} />
        <img src="https://cdn-icons-png.flaticon.com/512/733/733641.png" alt="Whatsapp" />
        <img src="https://cdn-icons-png.flaticon.com/512/152/152810.png" alt="YouTube" onClick={() => window.open('https://www.youtube.com/@marcosquay-healthisahabit6541', '_blank')} />
      </div>
    </div>
  )
}

export default Footer

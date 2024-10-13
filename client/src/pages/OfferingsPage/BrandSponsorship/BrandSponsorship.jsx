import React, { useEffect } from 'react';
import './BrandSponsorship.css';
import BrandSponsorshipImage from './Sponsorship.png';
import OurBrands from './Website Our Offerings.png';
import Bisleri from './images/Bisleri.png';
import Cipla from './images/Cipla.png';
import Conitnuum from './images/Conitnuum.png';
import DaburHoney from './images/Dabur Honey.png';
import Epigamia from './images/Epigamia Yogurt.png';
import GOQIi from './images/GOQii.png';
import HRX from './images/HRX.png';
import ICICI from './images/ICICI.png';
import Kanakia from './images/Kanakia.png';
import Nanvati from './images/Nanvati.png';
import Sports from './images/Sports Q.png';
const BrandSponsorship = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);
  return (
    <div className="brandSponsorship-main-container">
      <section className="one">
        <div className="brandSponsorship-container-one">
          <h1>Branding and Sponsorship</h1>
        </div>

        <div className="brandSponsorship-container-two-content">
          <div className="brandSponsorship-container-two-content-image">
            <img src={BrandSponsorshipImage} alt="Brand Sponsorship" />
          </div>

          <div className="brandSponsorship-container-two-content-para">
            <p>
              Branding and sponsorship services are essential components of modern marketing strategies. At Marcos Quay, we offer comprehensive solutions and a platform for brands to reach out to their target audience. From crafting compelling brand identities to securing impactful sponsorships, our services aim to enhance brand recognition, drive engagement, and maximize ROI. Our approach combines creative innovation with data-driven insights to deliver customized strategies that resonate with target audiences and align with overarching business objectives. Whether it’s establishing brand positioning, negotiating sponsorship deals, or activating cross-channel marketing campaigns, we’re dedicated to empowering brands to stand out and thrive in today’s competitive landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="one">
        <div className="brandSponsorship-container-two">
          <h1>Brands who have benefited from our partnership</h1>
        </div>

        <div className="brandSponsorship-container-two-content">
          <div className="brandSponsorship--brands-container-two-content-image">
            <img src={OurBrands} alt="Brand Sponsorship" />
          </div>
        </div>
        <div className="brandSponsorship-container-two-content-mobile-view">
          <img src={Bisleri} alt="Brands" />
          <img src={Cipla} alt="Brands" />
          <img src={Conitnuum} alt="Brands" />
          <img src={DaburHoney} alt="Brands" />
          <img src={Epigamia} alt="Brands" />
          <img src={GOQIi} alt="Brands" />
          <img src={HRX} alt="Brands" />
          <img src={ICICI} alt="Brands" />
          <img src={Kanakia} alt="Brands" />
          <img src={Nanvati} alt="Brands" />
          <img src={Sports} alt="Brands" />
        </div>
      </section>
    </div>
  );
}

export default BrandSponsorship;

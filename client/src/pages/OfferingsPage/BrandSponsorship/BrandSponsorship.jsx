import React, {useEffect} from 'react';
import './BrandSponsorship.css';
import BrandSponsorshipImage from './Sponsorship.png';
import OurBrands from './Website Our Offerings.png';

const BrandSponsorship = () => {

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
        <div className="brandSponsorship-container-one">
          <h1>Brands who have benefited from our partnership</h1>
        </div>

        <div className="brandSponsorship-container-two-content">
          <div className="brandSponsorship--brands-container-two-content-image">
            <img src={OurBrands} alt="Brand Sponsorship" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrandSponsorship;

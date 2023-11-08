import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='ABH app__bg'>
    <div className='AB_intro'>
      <h1>Stake. Earn. Relax</h1>
      <p>stakefish is the leading validator in the crypto ecosystem</p>
      <button type='button' className='AB_button'> Stake Now </button>
    </div>  
    <div className='AB_present'>
      <h3>We know staking</h3>
      <p>Stakefish has been operating validators from 2018. We
         are one of the largest and trusted validators in the crypto ecosystem. 
      </p>
      <p>We support 20+ protocols and help stake over
         $1 billion worth of assets for both institutions and retail
          investors.</p>
      <img src={images.ABU} alt='Center_image'/>
      <p>We know staking.</p>
    </div>
    <div className='AB_gl'>
      <img src={images.continent} alt='continent_img' />
      <h1>Blockchains never sleep. Neither do we.</h1>
      <p>Our globally distributed team covers all timezones. We guarantee a 24h 
        coverage of our validator nodes so you can Stake. Earn. Relax.</p>
    </div>
    <div className='AB_arr'>
      <h3>Follow us for the latest on staking and stakefish.</h3>
      <img src={images.arrow} alt='arrow'/>
    </div>
  </div>
);

export default AboutUs;

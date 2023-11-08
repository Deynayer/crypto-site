import React from 'react';
import images from '../../constants/images';
import './Section1.css';

const Section1 = () => {
  return (
    <div className='app_s1header'>
      <div className='app_s1struct'>
        <img className='wonder' src={images.magic} alt="app__wand" />
        <h1>Unrivaled Ethereum Stalking Experience</h1>
        <div className='icons'>
          <img src={images.dash} alt="app__icon1" /> 
          <p>Dashboard</p>
          <img src={images.fee} alt="app__icon2" />
          <p>Zero protocol fee</p>
          <img src={images.rewards} alt="app__icon3" />
          <p>Fee/mev rewards</p>
          <img src={images.defi} alt="app__icon4" />
          <p>DeFi-ready</p>
        </div>
      </div>
      <div className='bigimg'>
        <img />
      </div>
    </div>
  )
}

export default Section1
import React from 'react';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding app__bg' id='home'>
    <div className='app__wrapper_info'>
      <h1 className='app__header-h1'>Stake.Earn.Relax</h1>
      <button type='button' className='app-button'>Stake 32 ETH</button>
      <p>790,688 ETH staked with us</p>
    </div>
    <div className='app__wrapper_img'>
    </div>
  </div>
);

export default Header;
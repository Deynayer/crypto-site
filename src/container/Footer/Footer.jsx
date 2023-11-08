import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Footer.css';

const Footer = () => (
  <div className='footer'>
  <div className='SocialMedia'>
    <InstagramIcon /> <FacebookIcon /> <TwitterIcon /> <LinkedInIcon />
  </div>
  <p> &copy; 2023 stakefish</p>
</div>
);

export default Footer;

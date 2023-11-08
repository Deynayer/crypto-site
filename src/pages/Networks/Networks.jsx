import React from 'react';
import images from '../../constants/images';
import './Networks.css';


const Networks = () => {
  return (
    <div className='NH'>
      <div className='N_intro app__bg'>
      <h1>Networks</h1>
      <p>We support projects that are aligned with our values  and build towards the decentralized future.</p>
      <p>We spend a lot of time and resources to set up highly available and secure infrastructure for these projects.</p>   
      <p>We will constantly review and maintain a high quality of networks to support.</p>
      </div> 
      <div className='N_stake'>
        <h2>Stake with us</h2>
        <p>
          We run validators for these protocols. 
          Token holders can stake with us to help secure these
        </p>
        <p>
          networks and earn staking rewards. 
          Join the staking ecosystem today with stakefish. 
        </p>
      </div>
      <div className='N_Icons'>
          <h3>Ethereum</h3>
          <img src={images.cry2} alt='icon_c'/>
          <p>4%-8%</p>
          <p>Expected reward rate</p>
          <button type='button'>STAKE NOW</button> 
          <h3>Cosmos</h3>
          <img src={images.cosmos} alt='icon_c'/>
          <p>17%-21%</p>
          <p>Expected reward rate</p>
          <button type='button'>STAKE NOW</button> 
          <h3>Polkadot</h3>
          <img src={images.polkadot} alt='icon_p'/>
          <p>12%-16%</p>
          <p>Expected reward rate</p>
          <button type='button'>STAKE NOW</button> 
          <h3>Tezos</h3>
          <img src={images.tezos} alt='icon_t'/>
          <p>4%-8%</p>
          <p>Expected reward rate</p>
          <button type='button'>STAKE NOW</button> 
          <h3>Solana</h3>
          <img src={images.solana} alt='icon_s'/>
          <p>4%-8%</p>
          <p>Expected reward rate</p>
          <button type='button'>STAKE NOW</button> 
          <h3>Polygon</h3>
          <img src={images.polygon} alt='icon_p'/>
          <p>3%-7%</p>
          <p>Expected reward rate</p>
          <button type='button'>STAKE NOW</button> 
          <h3>Near</h3>
          <img src={images.near} alt='icon_n'/>
          <p>9%-13%</p>
          <p>Expected reward rate</p>
          <button type='button'>STAKE NOW</button> 
      </div>
      <div className='N_secure app__bg'>
        <h2>Networks we help secure</h2>
        <p>We run nodes for the following projects. These networks do not yet have staking enabled. 
            Please stay tuned for updates on staking activation.
        </p>
      </div>
      <div className='secure_tables app__bg'>
          <h3>Chainlink</h3>
          <img src={images.chainlink} alt='icon_p'/>
          <p>Node operator</p>
          <p>Learn more</p>
          <h3>Centrifuge Chain</h3>
          <img src={images.centrifuge} alt='icon_p'/>
          <p>Node operator</p>
          <p>Learn more</p>
      </div>
      <div className='N_final_sect app__bg'>
        <h2>Stay updated on the decentralized future</h2>
        <p>Get our bi-weekly newsletter, PoS Roundup, current news on the PoS ecosystem, and updates from your favorite validator.</p>
        <button type='button' className='J_button'> VIEW OPEN JOBS </button>
      </div>
    </div>
  )
}

export default Networks;

import React from 'react'
import images from '../../constants/images';
import './Section2.css';

const Section2 = () => {
  return (
    <div className='Section2H app__bg2' id='home'>
      <div className='SectionH'>
      <img className='crymage' src={images.cry2} alt='cry_icon'/>
        <h1>Stake with stakefish.
            Non-custodial. Secure.
        </h1>
        <p>Secure networks and earn rewards with
           the leading validator in the ecosystem.
        </p>
        <div className='Section2icons'>
          <h3>Cosmos</h3>
          <img src={images.cosmos} alt='icon_c'/>
          <p>The internet of blockchains</p>
          <h3>Polkadot</h3>
          <img src={images.polkadot} alt='icon_p'/>
          <p>Shared protocol enabling blockchain networks to operate togheder</p>
          <h3>Tezos</h3>
          <img src={images.tezos} alt='icon_t'/>
          <p>Platform for smart contracts and decentralized applications</p>
          <h3>Solana</h3>
          <img src={images.solana} alt='icon_s'/>
          <p>fast,secure and scalable blockchain network without sharding</p>
          <h3>Polygon</h3>
          <img src={images.polygon} alt='icon_p'/>
          <p>A protocol and framework for building and connecting Ethereum-compatible blockchain networks</p>
          <h3>Near</h3>
          <img src={images.near} alt='icon_n'/>
          <p>Shared, developer-riendly, public Proof of Stake blockchain</p>
        </div>
        <button type='button' className='S2button'>FIND MORE NETWORKS</button>
      </div>
    </div>
  )
}

export default Section2
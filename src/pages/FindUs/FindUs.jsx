import React from 'react';
import './FindUs.css';

const FindUs = () => (
  <div className='page_total app__bg'>
    <div className='AB_intro'>
      <h1>Get in touch</h1>
      <p>Do you have a question? You came to the right place</p>
      <button type='button' className='AB_button'> CONTACT US </button>
    </div>  
    <div className='FU_struct'>
      <h3>Do you have questions about staking or our validators?</h3>
      <p>Reach out to us. We are happy to talk with anyone about our services and
         help community members navigate the staking ecosystem.</p>
    </div>
  
  <div className='contact'>
    <div className="rightSide">
      <h1> Contact Us</h1>
      <form id="contact-form" method='POST'>
          <label htmlFor='name'> Full Name</label>
          <input name='name' placeholder='Enter your full name...' type='text' />
          <label htmlFor='email'> Email </label>
          <input name='email' placeholder='Enter your email...' type='email' />
          <label htmlFor='message'> Message </label>
          <textarea rows="6" placeholder='Enter message...' 
          name='message' required> </textarea>
          <button type='submit'> Send Message </button>
      </form>
    </div>
  </div>
</div>
);

export default FindUs;

import React from 'react';
import './Jobs.css';
import { stakevid } from '..';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

  
 

const Jobs = () => {
const [playVideo, setPlayVideo] = React.useState(false);
const vidRef = React.useRef();
  
 return ( 
  <div className='JH app__bg'>
    <div className='J_intro'>
      <h1>Join our team</h1>
      <p>Let’s build a decentralized future together.</p>
      <button type='button' className='J_button'> VIEW OPEN JOBS </button>
    </div>  
    <div className='J_1pbg'>
      <h3>We are building the infrastructure backbone of the blockchain ecosystem and paving the way to a decentralized future.</h3>
    </div>
    <div className='J_tables'>
      <h2>Remote</h2>
      <p>We are a remote-first, asynchronous, globally distributed team. Whether it be Antarctica or The North Pole, we invite you to apply, no matter where you live.</p>
      <h2>Commitment</h2>
      <p>We are committed to being an open-minded contributor to the blockchain ecosystem and are passionate about enabling protocols, builders, and users to build the future of decentralization.</p>
      <h2>Proactive</h2>
      <p>We believe that the best way to move forward is to initiate, ask questions, try and push boundaries. We seek to practice this in our daily work, and throughout our products.</p>
      <h2>Diversity</h2>
      <p>Our team members come from different backgrounds and cultures. This melting pot of humans brings a rich combination of unique perspectives and ideas to stakefish.</p>
    </div>
  
    <div className="app__video">
      <video
        ref={vidRef}
        src={stakevid}
        type="video/mp4"
        loop
        controls={false}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
    <div className='J_r'>
      <h2>Our recruiting process</h2>
      <p>We believe that the recruiting process is a great chance for both parties to get 
         to know each other and share expectations for the role.
      </p>
    </div>
    <div className='J_Wicons'>
      <h3>Introduction call</h3>
      <p>The first step of our process is to set up an introductory call with our recruiting team to get to know you, understand your strengths, and answer any questions. Some positions may require a quick take-home assignment to help us understand your skill sets.</p>
      <h3>Hiring manager interview(s)</h3>
      <p>You will meet the manager hiring for the role in which you are applying, discuss the details of the position, and, if applicable, review the take-home assignment.</p>
      <h3>Final interview</h3>
      <p>The final interview is with Chun Wang, stakefish’s CEO and founder to discuss the role, your skillset, and any other questions he may prepare for you.</p>
    </div>
    <div className='J_last'>
      <p>We do our best to keep the process smooth for you, clearly and consistently communicating with you every step of the way. Feel free to contact us with any questions throughout the process.</p>
    </div>
  </div>
 )
};

export default Jobs;

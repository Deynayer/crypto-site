import React from 'react';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.stake} alt="app__logo" />
      </div>
      <div className="app__navbar-links">
          <Link className='p__opensans'to="/">Home
          </Link>
          <Link className='p__opensans' to="/Networks">Networks
          </Link> 
          <Link className='p__opensans' to= "/AboutUs">AboutUs
          </Link>
          <Link className='p__opensans' to="Jobs">Jobs
          </Link>  
          <Link className='p__opensans' to="/FindUs">FindUs
          </Link>  
        <div className='allontana'>  
          <li className="p__opensans"><a href="#Dashboard">Dashboard</a></li>
        </div>
      </div>
    </nav>
    );
  };

export default Navbar
import React from 'react';
import {Link} from 'react-router-dom'

import {FaCoins} from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {
  return (
    <Link to="/">
        <div className="navbar">
            <div className="icon">
                <FaCoins className="icon" />
            </div>
            <h1> Crypto <span className="span">Hunter </span></h1>
        </div>
    </Link>
  )
}

export default Navbar
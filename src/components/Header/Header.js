import React from 'react';
import { Link } from 'react-router-dom';
import veggieIcon from '../../Images/carrot2.png';

import './Header.css';

const Header = () => {

  const toggleLink = () => {
    const homeLink = document.querySelector('.home-link')
    const profileLink = document.querySelector('.profile-link')
    homeLink.classList.toggle('hidden')
    profileLink.classList.toggle('hidden')
  }

  return (
    <header className='header'>
      <h1 className='veg-share-title'>Garden Party 
        <img src={veggieIcon} alt='carrot icon' className='veggie-img'/>
      </h1>

      {/* <Link className='home-title-link' to='/' onClick={() => toggleLink()}>
        <h1 className='veg-share-title'>Garden Party</h1>
        <img src={veggieIcon} alt='carrot icon' className='veggie-img'/>
      </Link> */}

      <div className='header-links'>
        <button className='link-button'>
          <Link className='home-link hidden' to='/' onClick={() => toggleLink()}>Home</Link>
          <Link className='profile-link' to='/profile' onClick={() => toggleLink()}>Profile</Link>
        </button>
      </div>
    </header>
  )
}

export default Header;

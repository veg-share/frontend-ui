import React from 'react';
import PropTypes from 'prop-types';

import profilePic from '../../Images/user.png';
import homeIcon from '../../Images/home.png';
import veggieIcon from '../../Images/carrot.png';
import './UserDetails.css';

const UserDetails = ({user}) => {
  return (
    <div className='user-details-container'>
      <img src={profilePic} alt='user profile' className='profile-pic'/>
      <h2 className='user-name'>{user.name}</h2>
      <div className='user-details'>
        <div className='location-container'>
          <img src={homeIcon} alt='house icon' className='home-img'/>
          <p className='user-location'>{user.location}</p>
        </div>
        <div className='shares-container'>
          <img src={veggieIcon} alt='carrot icon' className='veggie-img'/>
          <p className='user-shares'>Veg Shares: {user.numberOfShares}</p>
        </div>
        <p className='user-bio'>{user.bio}</p>
      </div>
    </div>
  )
}

UserDetails.propTypes = {
  user: PropTypes.object,
}

export default UserDetails;

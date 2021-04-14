import React from 'react';
import './UserDetails.css';
import profilePic from '../../Images/user.png';
import homeIcon from '../../Images/home.png';
import veggieIcon from '../../Images/carrot.png';

const UserDetails = ({user}) => {
  return (
    <div className='user-container'>
      <img src={profilePic} alt='profile-picture' className='profile-pic'/>
      <h2 className='user-name'>{user.name}</h2>
      <div className='user-details'>
        <div className='location-container'>
          <img src={homeIcon} alt='house' className='home-img'/>
          <p className='user-location'>{user.location}</p>
        </div>
        <div className='shares-container'>
          <img src={veggieIcon} alt='carrot' className='veggie-img'/>
          <p className='user-shares'>Veg Shares: {user.numberOfShares}</p>
        </div>
        <p className='user-bio'>{user.bio}</p>
      </div>
    </div>
  )
}

export default UserDetails;

import React from 'react';
import './UserDetails.css';

const UserDetails = ({user}) => {
  return (
    <div className='user-container'>
      {/*<img src= alt='profile-picture' className='profile-picture'/> */}
      <h3 className='user-name'>{user.name}</h3>
      <p className='user-bio'>{user.bio}</p>
      <p className='user-location'>{user.location}</p>
      <p className='user-shares'>Veg Shares: {user.numberOfShares}</p>
    </div>
  )
}

export default UserDetails;

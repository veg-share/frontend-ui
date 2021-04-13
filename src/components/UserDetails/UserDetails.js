import React from 'react';
import './UserDetails.css';

const UserDetails = () => {
  return (
    <div className='user-container'>
      {/*<img src= alt='profile-picture' className='profile-picture'/> */}
      <h3 className='user-name'>Name</h3>
      <p className='user-bio'>User bio goes here.</p>
    </div>
  )
}

export default UserDetails;

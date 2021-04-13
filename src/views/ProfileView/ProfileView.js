import React from 'react';
import './ProfileView.css';
import UserDetails from '../../components/UserDetails/UserDetails';
import UserInteractions from '../../components/UserInteractions/UserInteractions';
// import Feed from '../../components/Feed/Feed';

const ProfileView = () => {
  return (
    <div className='profile-page'>
      <h2 className='profile-title'>Profile</h2>
      <UserDetails />
      <UserInteractions />
      <h3 className='profile-feed-title'>Posts</h3>
    </div>
  )
}

export default ProfileView;

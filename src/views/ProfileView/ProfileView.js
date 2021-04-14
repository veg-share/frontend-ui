import React, { useState, useEffect } from 'react';
import './ProfileView.css';
import UserDetails from '../../components/UserDetails/UserDetails';
import UserInteractions from '../../components/UserInteractions/UserInteractions';
// import Feed from '../../components/Feed/Feed';
import user from '../../Data/mockData';

const ProfileView = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    setCurrentUser(user)
  }, [])

  return (
    <div className='profile-page'>
      <h2 className='user-name'>{currentUser.name}</h2>
      <UserDetails user={currentUser}/>
      <UserInteractions />
      <h3 className='profile-feed-title'>Posts</h3>
    </div>
  )
}

export default ProfileView;

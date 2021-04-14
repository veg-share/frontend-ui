import React, { useState, useEffect } from 'react';
import './ProfileView.css';
import UserDetails from '../../components/UserDetails/UserDetails';
import UserInteractions from '../../components/UserInteractions/UserInteractions';
import Feed from '../../components/Feed/Feed';
import { user } from '../../Data/mockData';

const ProfileView = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    setCurrentUser(user)
  }, [])

  return (
    <div className='profile-page'>
      <UserDetails user={currentUser}/>
      <div className='feed-container'>
        <UserInteractions />
        <h3 className='feed-title'>Posts</h3>
        <Feed />
      </div>
    </div>
  )
}

export default ProfileView;

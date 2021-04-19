import React, { useState, useEffect } from 'react';
import './ProfileView.css';
import UserDetails from '../../components/UserDetails/UserDetails';
import UserInteractions from '../../components/UserInteractions/UserInteractions';
import Feed from '../../components/Feed/Feed';
import { user } from '../../Data/mockData';

const ProfileView = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [profileIsVisible, setProfileIsVisible] = useState(false)

  useEffect(() => {
    setCurrentUser(user)
    setProfileIsVisible(true)
  }, [])

  return (
    <div className='profile-page'>
      <UserDetails user={currentUser}/>
      <div className='feed-container'>
        <UserInteractions user={currentUser}/>
        <h3 className='feed-title'>My Posts</h3>
        <Feed profileIsVisible={profileIsVisible}/>
      </div>
    </div>
  )
}

export default ProfileView;

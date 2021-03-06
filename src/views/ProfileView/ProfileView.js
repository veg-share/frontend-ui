import React, { useState, useEffect } from 'react';

import UserDetails from '../../components/UserDetails/UserDetails';
import UserInteractions from '../../components/UserInteractions/UserInteractions';
import Feed from '../../components/Feed/Feed';

import './ProfileView.css';

import { user } from '../../Data/mockData';

const ProfileView = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [profileIsVisible, setProfileIsVisible] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([user.posts])

  useEffect(() => {
    setCurrentUser(user)
    setProfileIsVisible(true)
  }, [])

  const addPost = (newPost) => {
    setPosts(...posts, newPost)
  }

  return (
    <section className='profile-page'>
      <UserDetails user={currentUser}/>
      <section className='feed-container'>
        <UserInteractions
          user={currentUser}
          addPost={addPost}
        />
        <h3 className='feed-title'>My Posts</h3>
        <Feed
          profileIsVisible={profileIsVisible}
          searchResults={searchResults}
        />
      </section>
    </section>
  )
}

export default ProfileView;

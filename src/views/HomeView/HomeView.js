import React, { useState, useEffect } from 'react';

import UserInteractions from '../../components/UserInteractions/UserInteractions';
import Feed from '../../components/Feed/Feed';
import './HomeView.css';

import { user } from '../../Data/mockData';

const HomeView = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [isHome, setIsHome] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([user.posts])

  useEffect(() => {
    setCurrentUser(user)
    setIsHome(true)
  }, [])
  
  const determineSearchResults = (posts) => {
    setSearchResults(posts)
  }

  const addPost = (newPost) => {
    setPosts(...posts, newPost)
  }

  return (
    <section className='home-view'>
      <section className='feed-container'>
        <UserInteractions
          isHome={isHome}
          user={currentUser}
          determineSearchResults={determineSearchResults}
          addPost={addPost}
        />
        <h3 className='feed-title'>All Posts</h3>
        <Feed
          isHome={isHome}
          searchResults={searchResults}
        />
      </section>
    </section>
  )
}

export default HomeView;

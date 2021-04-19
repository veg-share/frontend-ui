import React, { useState, useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Feed.css';
import Post from '../../components/Post/Post';
import { user } from '../../Data/mockData';
import AppContext from '../../Context/AppContext';


const Feed = ({ profileIsVisible, searchResults }) => {
  const [currentUserPosts, setCurrentUserPosts] = useState([])
  const allPosts = useContext(AppContext)

  useEffect(() => {
    setCurrentUserPosts(user.posts)
  }, [currentUserPosts])

  const displayPostsInFeed = (postsToDisplay) => {
    return postsToDisplay.map(post => {
      return (
        <Post
          userName={post.userName}
          title={post.title}
          date={post.date}
          location={post.location}
          description={post.description}
          distance={post.distance}
          imageUrl={post.image}
        />
      )
    })
  }

  return (
    <div className='post-container'>
      {profileIsVisible && displayPostsInFeed(currentUserPosts)}
      {searchResults.length ? displayPostsInFeed(searchResults) : displayPostsInFeed(allPosts)}
    </div>
  )
}

export default Feed;

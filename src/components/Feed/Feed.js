import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Feed.css';
import Post from '../../components/Post/Post';
import { user } from '../../Data/mockData';

const Feed = () => {
  const [currentUserPosts, setCurrentUserPosts] = useState([])

  useEffect(() => {
    console.log('user.posts', user.posts)
    const userPosts = user.posts
    console.log('user posts', userPosts)
    setCurrentUserPosts(userPosts)
    console.log('currentUserPosts', currentUserPosts)
  }, [currentUserPosts])

  const displayPostsForCurrentUser = (postsToDisplay) => {
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
      {displayPostsForCurrentUser(currentUserPosts)}
    </div>
  )
}

export default Feed;

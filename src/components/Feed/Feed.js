import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Feed.css';
import Post from '../../components/Post/Post';
import { user, posts } from '../../Data/mockData';

const Feed = ({ profileIsVisible }) => {
  const [currentUserPosts, setCurrentUserPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    setCurrentUserPosts(user.posts)
    setAllPosts(posts)
    // console.log('currentUserPosts', currentUserPosts)
    // console.log('allPosts', allPosts)
  }, [currentUserPosts, allPosts])

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
      {/* Conditionally render the feed to only display all posts on the home page
        and the current user's posts on the profile page */}
      {profileIsVisible ? displayPostsForCurrentUser(currentUserPosts) : displayPostsForCurrentUser(allPosts)}
    </div>
  )
}

export default Feed;

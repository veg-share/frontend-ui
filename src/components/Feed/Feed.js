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
  }, [currentUserPosts, allPosts])

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
          key={post.id}
        />
      )
    })
  }

  return (
    <div className='post-container'>
      {profileIsVisible ? displayPostsInFeed(currentUserPosts) : displayPostsInFeed(allPosts)}
    </div>
  )
}

Feed.propTypes = {
  profileIsVisible: PropTypes.bool,
}

export default Feed;

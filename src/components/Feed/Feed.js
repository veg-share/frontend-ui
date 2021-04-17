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
    // setCurrentUserPosts(user.posts)
    setAllPosts(posts)
  }, [currentUserPosts, allPosts])

  const displayPostsInFeed = (postsToDisplay) => {
    if (postsToDisplay.length) {
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
    } else {
      return (
        <section className='no-user-posts-message'>
          <p>Looks like you haven't made any shares yet. Click the 'Create Post' button above to join the party!</p>
        </section>
      )
    }
  }

  return (
    <div className='post-container'>
      {profileIsVisible ? displayPostsInFeed(currentUserPosts) : displayPostsInFeed(allPosts)}
    </div>
  )
}

export default Feed;

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

  const modifyDates = (posts) => {
    const modifiedPosts = posts.map(post => {
      return new Date(post.date).toString().slice(0, 15)
    })
    return sortPostsByDate(modifiedPosts)
  }

  const sortPostsByDate = (posts) => {
    return posts.sort((a, b) => {
      if (a.post < b.post) {
        return -1;
      } else if (a.post == b.post) {
        return 0;
      } else {
        return 1;
      }
    })
  }

  const displayPostsInFeed = (postsToDisplay) => {
    if (postsToDisplay.length) {

      // Currently, this method should take in the posts passed in, convert their date properties, then sort them to be displayed in this method. We'd just have to assign the result of the modifyDates method to a variable name and map over those posts instead.
      modifyDates(postsToDisplay)

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
          <p>Looks like there are no shares here. Press the 'Create Post' button to join the party!</p>
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

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

  let postsToDisplay

  const modifyDate = (date) => {
    return new Date(date).toString().slice(0, 15)
  }

  const sortPostsByDate = (posts) => {
    return posts.sort((a, b) => {
      if (a.post.createdAt < b.post.createdAt) {
        return -1;
      } else if (a.post.createdAt == b.post.createdAt) {
        return 0;
      } else {
        return 1;
      }
    })
  }

  const displayPostsInFeed = (posts) => {
    if (posts.length) {

      // Currently, this method should take in the posts passed in, convert their date properties, then sort them to be displayed in this method. We'd just have to assign the result of the modifyDates method to a variable name and map over those posts instead.

      return postsToDisplay = posts.map(post => {
        return (
          <Post
          userName={post.userName}
          title={post.title}
          date={modifyDate(post.createdAt)}
          location={post.location}
          description={post.description}
          distance={post.distance}
          imageUrl={post.image}
          key={post.id}
        />
        )
      })
    } else {
      return displayNoPostsMessage()
    }
  }

  const displayNoPostsMessage = () => {
      postsToDisplay =
        <section className='no-user-posts-message'>
          <p>Looks like there's nothing here. Press the 'Create Post' button to join the party!</p>
        </section>
  }

  if (profileIsVisible) {
    displayPostsInFeed(currentUserPosts)
  } else if (searchResults.length || !searchResults) {
    displayPostsInFeed(searchResults)
  } else if (!profileIsVisible && !searchResults.length) {
    console.log('hi')
    console.log('all posts', allPosts.getAllPosts)
    displayPostsInFeed(allPosts.getAllPosts)
  }

  return (
    <div className='post-container'>
      {postsToDisplay}
    </div>
  )
}

Feed.propTypes = {
  profileIsVisible: PropTypes.bool,
}

export default Feed;

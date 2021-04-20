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

  const modifyDates = (posts) => {
    const modifiedPosts = posts.map(post => {
      return new Date(post.createdAt).toString().slice(0, 15)
    })
    return sortPostsByDate(modifiedPosts)
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

      // modifyDates(postsToDisplay)

      return postsToDisplay = posts.map(post => {
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
  }

  const displayNoPostsMessage = () => {
    console.log('oopppsiieee')
      return (
        <section className='no-user-posts-message'>
          <p>Looks like there are no shares here. Press the 'Create Post' button to join the party!</p>
        </section>
      )
  }

  if (profileIsVisible) {
    console.log('profile')
    displayPostsInFeed(currentUserPosts)
  } else if (!profileIsVisible && !searchResults.length) {
    console.log('home')
    displayPostsInFeed(allPosts)
  } else if (searchResults.length) {
    console.log('search')
    displayPostsInFeed(searchResults)
  } else {
    displayNoPostsMessage()
  }

  return (
    <div className='post-container'>
      {postsToDisplay}
    </div>
  )
}

export default Feed;

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import profilePic from '../../Images/user.png';
import './Post.css';

const Post = ({ userName, title, date, location, description, distance, imageUrl }) => {
  return (
    <div className='single-post'>
      <div className='post-header'>
        <img src={profilePic} alt='small-profile' className='small-profile-pic'/>
        <div className='post-top'>
          <p className='post-name'>{userName}</p>
          <p className='post-date'>{date}</p>
        </div>
      </div>
      <div className='post-body'>
        <p className='post-title'>{title}</p>
        <p className='post-description'>{description}</p>
        <img src={imageUrl} alt={title} className='post-image'/>
      </div>
    </div>
  )
}

Post.propTypes = {
  userName: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.object,
  description: PropTypes.string,
  distance: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Post;

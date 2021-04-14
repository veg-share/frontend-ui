import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import profilePic from '../../Images/user.png';
import './Post.css';

const Post = ({ userName, title, date, location, description, distance, imageUrl }) => {
  return (
    <div className='single-post'>
      <div className='post-header'>
        <img src='profilePic' alt='profile-picture' className='post-profile-pic'/>
        <p>{userName}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Post;

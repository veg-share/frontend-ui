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
        <p className='post-name'>{userName}</p>
        <p className='post-date'>{date}</p>
      </div>
    </div>
  )
}

export default Post;

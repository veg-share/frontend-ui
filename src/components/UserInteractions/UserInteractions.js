import React from 'react';
import './UserInteractions.css';
import Search from '../Search/Search';
import PropTypes from 'prop-types';
// import FormModal from '../FormModal/FormModal';

const UserInteractions = ({ isHome, determineSearchResults }) => {
  return (
    <div className='interactions-container'>
      {isHome && <Search determineSearchResults={determineSearchResults}/>}
      <button className='post-button'>Create Post</button>
    </div>
  )
}

export default UserInteractions;

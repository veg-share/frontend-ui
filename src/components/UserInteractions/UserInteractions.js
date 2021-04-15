import React from 'react';
import './UserInteractions.css';
import Search from '../Search/Search';
// import FormModal from '../FormModal/FormModal';

const UserInteractions = ({ isHome }) => {
  return (
    <div className='interactions-container'>
      {isHome && <Search />}
      <button className='post-button'>Create Post</button>
    </div>
  )
}

export default UserInteractions;

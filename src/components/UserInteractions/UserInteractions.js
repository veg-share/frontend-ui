import React from 'react';
import './UserInteractions.css';
import Search from '../Search/Search';
// import FormModal from '../FormModal/FormModal';

const UserInteractions = () => {
  return (
    <div className='interactions-container'>
      {/* conditionally render search component based on view */}
      <Search />
      <button className='post-button'>Create Post</button>
    </div>
  )
}

export default UserInteractions;

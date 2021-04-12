import React from 'react';
import './UserInteractions.css';
import Search from './Search';
import FormModal from './FormModal';

const UserInteractions = () => {
  return (
    <div className='interactions-container'>
      {/* conditionally render search component based on view */}
      <Search />
      <FormModal />
    </div>
  )
}

export default UserInteractions;

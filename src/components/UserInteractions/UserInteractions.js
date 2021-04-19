import React, { useState, useEffect } from 'react';
import './UserInteractions.css';
import Search from '../Search/Search';
import PropTypes from 'prop-types';
import FormModal from '../FormModal/FormModal';

const UserInteractions = ({ isHome }) => {

  const [formModalIsOpen, setFormModal] = useState(false)

  const toggleFormModal = () => {

    console.log('MODAL - IS OPEN? >>> ', formModalIsOpen);

    const modalStatus = formModalIsOpen === false ? true : false;
    setFormModal(modalStatus)
  }

  return (
    <div className='interactions-container'>
      {isHome && <Search />}
      <button className='post-button' onClick={toggleFormModal}>Create Post</button>
    </div>
  )
}

export default UserInteractions;

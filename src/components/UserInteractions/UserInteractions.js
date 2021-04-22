import React, { useState, useEffect } from 'react';
import Search from '../Search/Search';
import PropTypes from 'prop-types';
import FormModal from '../FormModal/FormModal';

import './UserInteractions.css';

const UserInteractions = ({ isHome, user, determineSearchResults }) => {

  const [formModalIsOpen, setFormModal] = useState(false)

  const toggleFormModal = () => {
    const modalStatus = formModalIsOpen === false ? true : false;
    setFormModal(modalStatus)
  }

  return (
    <section className='interactions-container'>
      {isHome && <Search determineSearchResults={determineSearchResults} />}
      <button className='create-post-button' onClick={toggleFormModal}>Create Post</button>
      <article className='form-modal'>
        {formModalIsOpen && <FormModal
        user={user}
        toggleFormModal={toggleFormModal}/>}
      </article>
    </section>
  )
}

UserInteractions.propTypes = {
  user: PropTypes.object.isRequired,
  isHome: PropTypes.bool,
}

export default UserInteractions;

import React, { useState, useEffect } from 'react';
import Search from '../Search/Search';
import PropTypes from 'prop-types';
import FormModal from '../FormModal/FormModal';

import './UserInteractions.css';

const UserInteractions = ({ isHome, user }) => {

  const [formModalIsOpen, setFormModal] = useState(false)

  const toggleFormModal = () => {
    console.log('MODAL - IS OPEN? >>> ', formModalIsOpen);
    const modalStatus = formModalIsOpen === false ? true : false;
    setFormModal(modalStatus)
  }

  return (
    <section className='interactions-container'>
      {isHome && <Search />}
      <button className='create-post-button' onClick={toggleFormModal}>Create Post</button>
      <article className='form-modal'>
      {formModalIsOpen && <FormModal user={user}/>}
    </article>
    </section>
  )
}

UserInteractions.propTypes = {
  user: PropTypes.object.isRequired,
  isHome: PropTypes.bool,
}

export default UserInteractions;

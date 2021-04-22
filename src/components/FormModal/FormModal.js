import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './FormModal.css';

// import { user } from '../../Data/mockData';

const FormModal = ({ user, toggleFormModal, addPost }) => {
  const [title, setPostTitle] = useState('')
  const [description, setPostDescription] = useState('')
  const [image, setPostImageUrl] = useState('')

  const submitPost = event => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      userId: user.id,
      user: user,
      location: user.location,
      title,
      description,
      image
    }

    user.posts.push(newPost)
    addPost(newPost);
    toggleFormModal();
    clearInputs();
  }

  const clearInputs = () => {
    setPostTitle('')
    setPostDescription('')
    setPostImageUrl('')
  }

  return (
      <form className="form__create-post">
        <input
          className="post__title-input"
          type="text"
          name="title-input"
          placeholder="Title of post"
          value={ title }
          aria-required="true"
          aria-label="field to input title of post"
          onChange={event => setPostTitle(event.target.value)}
        />
        <input
          className="post__description-input"
          type="text"
          name="description-input"
          placeholder="Brief description (items & amounts)"
          value={ description } 
          aria-required="true" 
          aria-label="field to input description of post"
          onChange={event => setPostDescription(event.target.value)}
        />
        <input
          className="post__image"
          type="text"
          name="image-input"
          placeholder="URL link for the image to post"
          value={ image }
          aria-required="true"
          aria-label="field to input link for image to upload"
          onChange={event => setPostImageUrl(event.target.value)}
        />
      {/*
          value={ image } 
          aria-required="true" 
          aria-label="field to input link for image to upload"
          onChange={event => setPostImageUrl(event.target.value)}
        />
      {/* 
        <input
          className="post__quantity-input"
          type="text"
          name="post-quantity-input"
          placeholder="Amount in QUANTITY (eaches)"
          value={ quantity }
          aria-label="field to input amount per item offered in eaches"
        />
      <input
          className="post__weight-input"
          type="text"
          name="post-weight-input"
          placeholder="Amount in WEIGHT (lbs)"
          value={ weight }
          aria-label="field to input amount per item offered in lbs"
        /> */}
      <button className='submit-post-button' onClick={event => submitPost(event)}>Submit Post</button>
      </form>
  )
}

FormModal.propTypes = {
  user: PropTypes.object.isRequired,
  toggleFormModal: PropTypes.func,
}

export default FormModal;

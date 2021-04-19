import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './FormModal.css';
// import Search from '../../components/Search/Search';

const FormModal = ({ user }) => {
  const [title, setPostTitle] = useState('')
  const [description, setPostDescription] = useState('')
  const [image, setPostImgUrl] = useState('')

  const submitPost = event => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      postedById: user.id,
      postedBy: user.name,
      location: user.location,
      title,
      description,
      image
    }

    console.log("POST to be submitted! >>> ", newPost)

    // props.addPost(newPost);
    //// create (/ & pass in) a function which will actually sent this post in a request to the BE

    clearInputs();
  }

  const clearInputs = () => {
    setPostTitle('')
    setPostDescription('')
    setPostImgUrl('')
  }

  return (

    <article className="form-modal">
      <form className="form__create-post">

        <input
          className="post__title-input"
          type="text"
          name="title-input"
          placeholder="Title"
          value={ title } 
          aria-required="true" 
          aria-label="field to input title of post"
          onChange={event => setPostTitle(event.target.value)}
        />

        <input
          className="post__description-input"
          type="text"
          name="description-input"
          placeholder="Please provide a brief description"
          value={ description } 
          aria-required="true" 
          aria-label="field to input description of post"
          onChange={event => setPostDescription(event.target.value)}
        />

        <input
          className="post__image"
          type="text"
          name="image-input"
          placeholder="Please provide a url link for the image to post!"
          value={ image } 
          aria-required="true" 
          aria-label="field to input link for image to upload"
          onChange={event => setPostImgUrl(event.target.value)}
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

      <button className='submit-post-button' onClick={event => submitPost(event)}>Create Post</button>

      </form>
    </article>

  )
}

export default FormModal;

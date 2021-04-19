import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './FormModal.css';
// import Search from '../../components/Search/Search';

const FormModal = () => {
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
        />

        <input
          className="post__description-input"
          type="text"
          name="description-input"
          placeholder="Please provide a brief description"
          value={ description } 
          aria-required="true" 
          aria-label="field to input description of post"
        />

        <input
          className="post__image"
          type="text"
          name="image-input"
          placeholder="Please provide a url link for the image to post!"
          value={ image } 
          aria-required="true" 
          aria-label="field to input link for image to upload"
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

      </form>
    </article>

  )
}

export default FormModal;

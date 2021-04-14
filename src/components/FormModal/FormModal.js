import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './FormModal.css';

// import Search from '../../components/Search/Search';

const FormModal = () => {
  return (
    // <h2>Form modal goes here</h2>

    <article className="form-modal">
      <form className="form">

        <input
          className="post__title-input"
          type="text"
          name="title-input"
          placeholder="Title"
          value={ this.state.title }
          aria-label="field to input title of post"
          // onChange={ (event) => this.handleChange(event) }
        >

        <input
          className="post__description-input"
          type="text"
          name="description-input"
          placeholder="Please provide a brief description"
          value={ this.state.description }
          aria-label="field to input description of post"
          // onChange={ (event) => this.handleChange(event) }
        >

      </form>
    </article>

  )
}

export default FormModal;

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Search.css';

const Search = () => {
  return (
    <div className='search'>
      <input type='text' className='search-bar' placeholder='Search'/>
      <button type='submit' className='search-button'></button>
    </div>
  )
}

export default Search;

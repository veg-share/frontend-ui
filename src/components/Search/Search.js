import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

const Search = () => {
  return (
    <div className='search'>
      <input type='text' className='search-bar' placeholder='Search'/>
      <button type='submit' className='search-button'>
        <i className="fa fa-search"></i>
      </button>
    </div>
  )
}

export default Search;

import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import './Search.css';

const Search = () => {
  // props needed for search funtionality: allPosts
  // might try using context instead of having to pass these all the way down
  // we'll also need access to a method on the feed component that determines which posts to display based on the search term

  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    filterPosts()
  }

  const filterPosts = () => {
    // filter over the array of posts
    // return all posts that include searchInput in the title or description
    // call a method to determine which posts to display (I think this method would live in the feed component)
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        type='text'
        className='search-bar'
        placeholder='Search by produce name'
        onChange={handleSearch}
      />
      <button
        type='submit'
        className='search-button'>
        <i className="fa fa-search"></i>
      </button>
    </form>
  )
}

// Search.propTypes = {

// }

export default Search;

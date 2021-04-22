import React, { useState, useContext } from 'react';
import AppContext from '../../Context/AppContext';
import PropTypes from 'prop-types';

import './Search.css';

const Search = ({ determineSearchResults }) => {
  const [searchInput, setSearchInput] = useState('')
  const allData = useContext(AppContext)

  const handleSearch = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    filterPosts()
  }

  const filterPosts = () => {
    const postsToDisplay = allData[0].getAllPosts.filter(post => {
      return post.title.toLowerCase().includes(searchInput) || post.description.toLowerCase().includes(searchInput)
    })
    if (postsToDisplay.length) {
      determineSearchResults(postsToDisplay)
    } else {
      determineSearchResults(false)
    }
  }

  const clearSearch = (event) => {
    event.preventDefault()
    setSearchInput('')
    determineSearchResults([])
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        type='text'
        value={searchInput}
        className='search-bar'
        placeholder='Search by produce name'
        onChange={handleSearch}
      />
      <button
        type='submit'
        className='search-button'>
        <i className="fa fa-search"></i>
      </button>
      <button
        className='clear-button'
        onClick={clearSearch}>
        Clear Search
        </button>
    </form>
  )
}

Search.propTypes = {
  determineSearchResults: PropTypes.func,
}

export default Search;

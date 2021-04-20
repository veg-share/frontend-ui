import React, { useState, useContext } from 'react';
import './Search.css';
import AppContext from '../../Context/AppContext';

const Search = ({ determineSearchResults }) => {
  const [searchInput, setSearchInput] = useState('')
  const allPosts = useContext(AppContext)

  const handleSearch = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    filterPosts()
  }

  const filterPosts = () => {
    const postsToDisplay = allPosts.filter(post => {
      return post.title.includes(searchInput) || post.description.includes(searchInput)
    })
    if (postsToDisplay.length) {
      determineSearchResults(postsToDisplay)
    } else {
      determineSearchResults(null)
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

export default Search;

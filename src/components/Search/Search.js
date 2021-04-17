import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <form className='search'>
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

export default Search;

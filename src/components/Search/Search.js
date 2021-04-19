import React, { useState, useContext } from 'react';
import './Search.css';
import AppContext from '../../Context/AppContext';

const Search = () => {
  // props needed for search funtionality: allPosts
  // might try using context instead of having to pass these all the way down
  // we'll also need access to a method on the feed component that determines which posts to display based on the search term

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
    // filter over the array of posts
    // return all posts that include searchInput in the title or description
    const postsToDisplay = allPosts.filter(post => {
      return post.title.includes(searchInput) || post.description.includes(searchInput)
    })
    console.log('postsToDisplay', postsToDisplay)
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

export default Search;

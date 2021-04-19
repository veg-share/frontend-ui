import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './HomeView.css';

import UserInteractions from '../../components/UserInteractions/UserInteractions';
import FormModal from '../../components/FormModal/FormModal';
import Feed from '../../components/Feed/Feed';

const HomeView = () => {
  const [isHome, setIsHome] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setIsHome(true)
  }, [])

  const determineSearchResults = (posts) => {
    setSearchResults(posts)
  }

  return (
    <section className='home-view'>
      <UserInteractions isHome={isHome} determineSearchResults={determineSearchResults}/>
      <Feed searchResults={searchResults}/>
    </section>
  )
}

export default HomeView;

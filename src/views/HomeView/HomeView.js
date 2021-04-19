import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './HomeView.css';

import UserInteractions from '../../components/UserInteractions/UserInteractions';
import FormModal from '../../components/FormModal/FormModal';
import Feed from '../../components/Feed/Feed';

const HomeView = () => {
  const [isHome, setIsHome] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  // const [allPosts, setAllPosts] = useState([]);
  // const [userLocation, setUserLocation] = useState({});
  // const [error, setError] = useState('');

  // const getUserLocation = async () => {
  //   // update with URL for geocoding location API
  //   const url = '';
  //   setError('');
  //
  //   try {
  //     const response = await fetch(url)
  //     const userLocation = await response.json()
  //     setUserLocation(userLocation);
  //   } catch(error) {
  //     setError(error.message);
  //   }
  // }
  //
  // const getAllPosts = async () => {
  //   // update with URL to BE to request from when avail.
  //   const url = '';
  //   setError('');
  //
  //   try {
  //     const response = await fetch(url)
  //     const allPosts = await response.json()
  //     setAllPosts(allPosts);
  //   } catch(error) {
  //     setError(error.message);
  //   }
  // }

  useEffect(() => {
    setIsHome(true)
    // getUserLocation();
    // getAllPosts();
    }, [])

  const determineSearchResults = (posts) => {
    setSearchResults(posts)
    console.log('searchResults', searchResults)
  }

  return (
    <section className='home-view'>
      <UserInteractions isHome={isHome} determineSearchResults={determineSearchResults}/>
      <Feed />
    </section>
  )
}

export default HomeView;

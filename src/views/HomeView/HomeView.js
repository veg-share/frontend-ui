import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './HomeView.css';

// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';
// import UserInteractions from '../../components/UserInteractions/UserInteractions';
// import FormModal from '../../components/FormModal/FormModal';
// import Search from '../../components/Search/Search';
// import Feed from '../../components/Feed/Feed';
// import Post from '../../components/Post/Post';

const HomeView = () => {

  const [allPosts, setAllPosts] = useState([]);
  const [userLocation, setUserLocation] = useState({});
  const [error, setError] = useState('');

  const getUserLocation = async () => {
    // update with URL for geocoding location API
    const url = '';
    setError('');

    try {
      const response = await fetch(url)
      const userLocation = await response.json()
      setUserLocation(userLocation);
    } catch(error) {
      setError(error.message);
    }
  }

  const getAllPosts = async () => {
    // update with URL to BE to request from when avail.
    const url = '';
    setError('');

    try {
      const response = await fetch(url)
      const allPosts = await response.json()
      setAllPosts(allPosts);
    } catch(error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getUserLocation();
    getAllPosts();
  }, [])

  return (
    <section className='home-view'>
      
      <UserInteractions />
      <FormModal />
      <Feed />

    </section>
  )
}

export default HomeView;
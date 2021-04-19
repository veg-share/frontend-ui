import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './HomeView.css';

import UserInteractions from '../../components/UserInteractions/UserInteractions';
import Feed from '../../components/Feed/Feed';
import { user } from '../../Data/mockData';

const HomeView = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [isHome, setIsHome] = useState(false)



  useEffect(() => {
    setCurrentUser(user)
    setIsHome(true)
    }, [])

  return (
    <section className='home-view'>

      <section className='feed-container'>
        <UserInteractions isHome={isHome} user={currentUser}/>
        <h3 className='feed-title'>All Posts</h3>
        <Feed isHome={isHome}/>
      </section>

    </section>
  )
}

export default HomeView;

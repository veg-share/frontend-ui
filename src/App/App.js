import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeView from '../views/HomeView/HomeView';
import ProfileView from '../views/ProfileView/ProfileView';
import AppContext from '../Context/AppContext';
import { posts } from '../Data/mockData';

import './App.css';

const App = () => {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    setAllPosts(posts)
  }, [allPosts])

  return (
     <AppContext.Provider value={allPosts}>
        <section className='main'>
          <Header />
          <Route exact path='/' component={HomeView} />
          <Route exact path='/profile' component={ProfileView} />
          <Footer />
        </section>
     </AppContext.Provider>
  )
}

export default App;

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeView from '../views/HomeView/HomeView';
import ProfileView from '../views/ProfileView/ProfileView';
import AppContext from '../Context/AppContext';
import { posts } from '../Data/mockData';

const App = () => {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    setAllPosts(posts)
  }, [allPosts])

  return (
    <>
      <AppContext.Provider value={allPosts}>
        <Header />
        <Route exact path='/' component={HomeView} />
        <Route exact path='/profile' component={ProfileView} />
        <Footer />
      </AppContext.Provider>
    </>
  )
}

export default App;

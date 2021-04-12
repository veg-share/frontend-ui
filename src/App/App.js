import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeView from '../views/HomeView/HomeView';
import ProfileView from '../views/ProfileView/ProfileView';

const App = () => {

  return (
    <>
      <Header />
      <Route exact path='/' component={HomeView} />
      <Route exact path='/profile' component={ProfileView} />
      <Footer />
    </>
  )
}

export default App;
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeView from '../views/HomeView/HomeView';
import ProfileView from '../views/ProfileView/ProfileView';

import './App.css';

const App = () => {

  return (
    <section className='main'>
      <Header />
      <Route exact path='/' component={HomeView} />
      <Route exact path='/profile' component={ProfileView} />
      <Footer />
    </section>
  )
}

export default App;

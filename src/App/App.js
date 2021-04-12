import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import '../components/Header/Header';
import '../components/Footer/Footer';
import '../views/HomeView/HomeView';
import '../views/ProfileView/ProfileView';

const App = () => {

  return (
    <>
      <Header />
      
      <Footer />
    </>
  )
}

export default App;
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeView from '../views/HomeView/HomeView';
import ProfileView from '../views/ProfileView/ProfileView';
import AppContext from '../Context/AppContext';
import { useQuery, gql } from '@apollo/client';

import './App.css';

const GET_ALL_POSTS = gql`
      query {
        getAllPosts {
          id
          userId
          title
          description
          createdAt
          tags
        }
      }
    `

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS)

  if (loading) return <p>Loading...</p>
  if (data) console.log(data)
  if (error) return <p>Error :(</p>

  return (
     <AppContext.Provider value={data}>
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

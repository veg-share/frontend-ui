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
          user {
            username
          }
        }
      }
    `

const GET_ALL_USERS = gql`
    query {
      getAllUsers {
        id
        username
        city
        state
        posts {
          title
          description
        }
      }
    }
  `

const App = () => {

  const QueryMultiple = () => {
    const response1 = useQuery(GET_ALL_POSTS)
    const response2 = useQuery(GET_ALL_USERS)
    return [response1, response2]
  }

  const [
    { loading: loading1, error: error1, data: data1 },
    { loading: loading2, error: error2, data: data2 }
  ] = QueryMultiple()

  if (loading1 || loading2) return <div className='container'><p className='loading'>Loading...</p></div>
  if (error1) return <p className='error'>Error: ${error1.message}</p>
  if (error2) return <p className='error'>Error: ${error2.message}</p>

  return (
     <AppContext.Provider value={[data1, data2]}>
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

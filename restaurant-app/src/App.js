import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './component/Home'
import RestaurantsList from './component/RestaurantsList'
import RestaurantCreate from './component/RestaurantCreate'
import RestaurantUpdate from './component/RestaurantUpdate'
import RestaurantDetail from './component/RestaurantDetail'
import RestaurantSearch from './component/RestaurantSearch'
import Login from './component/Login'
import Logout from './component/Logout'

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/list">
          <RestaurantsList ></RestaurantsList>
        </Route>

        <Route path="/create">
          <RestaurantCreate ></RestaurantCreate>
        </Route>

        <Route path="/update/:id"
          render={props => (
            <RestaurantUpdate {...props} />
          )}
        >

        </Route>


        <Route path="/detail">
          <RestaurantDetail ></RestaurantDetail>
        </Route>

        <Route path="/search">
          <RestaurantSearch ></RestaurantSearch>
        </Route>

        <Route path="/login"
          render={props => (
            <Login {...props} />
          )}
        >
        </Route>

        <Route path="/logout">
          <Logout />
        </Route> 


      </Router>
    </div>
  );
}

export default App;

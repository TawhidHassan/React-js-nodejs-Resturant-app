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
        <Route path="/update">
          <RestaurantUpdate ></RestaurantUpdate>
        </Route>
        <Route path="/detail">
          <RestaurantDetail ></RestaurantDetail>
        </Route>
        <Route path="/search">
          <RestaurantSearch ></RestaurantSearch>
        </Route>
      </Router>
    </div>
  );
}

export default App;

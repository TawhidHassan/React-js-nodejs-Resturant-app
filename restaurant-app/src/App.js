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
import Protected from './component/Protected'

function App() {
  return (
    <div className="App">
      <Router>

      <Protected exact path="/" component={Home} />

      <Protected exact path="/details" component={RestaurantDetail} />
        <Protected exact path="/update/:id" component={RestaurantUpdate} />
        {/* <Route path="/update/:id"
          render={props => (
            <RestaurantUpdate {...props} />
          )}
        >
        </Route> */}
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/create" component={RestaurantCreate} />
        <Protected exact path="/list" component={RestaurantsList} />

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

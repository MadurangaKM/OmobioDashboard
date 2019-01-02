import React, { Component } from 'react';
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error"
import {BrowserRouter,Route,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
    
      <BrowserRouter>
        <Switch>
        <Route path="/" component={SignIn} exact/>
        <Route path="/Dashboard" component={Dashboard} />
        <Route component={Error} />
        </Switch>
      </BrowserRouter>
      </div>
      
    );
  }
}

export default App;

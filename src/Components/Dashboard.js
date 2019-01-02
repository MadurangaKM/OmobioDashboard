import React, { Component } from 'react';
import Appbar from './Appbar'
import Grid from '../Components/Grid';


class Dashboard extends Component {
    render() {
      return (
        <div>
            <Appbar/>
            <Grid/>
        </div>
      );
    }
  }
  
  export default Dashboard;
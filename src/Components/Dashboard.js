import React, { Component } from 'react';
import Appbar from './Appbar'
import Grid from '../Components/Grid';
import Space from "./Space";


class Dashboard extends Component {
    render() {
      return (
        <div>
            <Appbar />
            <Space height={60}/>
            <Grid />
            <Space height={20}/>
        </div>
      );
    }
  }
  
  export default Dashboard;
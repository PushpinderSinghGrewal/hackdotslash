import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const clusterName = process.env.REACT_APP_CLUSTER_NAME || 'NoClusterName';
    return (
      <div className="App">
        
         <div id="bar" style={{height:'50px',backgroundColor:'#3B5998'}} >
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';


class App extends Component {
  render() {
    const clusterName = process.env.REACT_APP_CLUSTER_NAME || 'NoClusterName';
    return (
       <MuiThemeProvider>
      <div className="App">
        
      <div id="bar" style={{color:'white', height:'50px',backgroundColor:'#3B5998'}} > <div style={{fontSize:25,paddingTop:20}}><b>E-Campus</b></div> </div>
      </div>
      <List>
        <div>
          <Paper style={{marginLeft:170,marginTop:30,height:500,width:500}}>
           <Paper style={{marginLeft:670,marginTop:30,height:500,width:500}}></Paper>
            
              </Paper>
              </div>
              <List>
              <Paper style={{marginLeft:170,marginTop:30,height:100,width:1170 }} >
              <ListItem style={{marginLeft:'0px'}}>
                <p style={{color:'red',marginTop:20}}>Facing some issue in the campus but don't know who to report to? Type it out here and we assure you to take care of it.</p>
                </ListItem>
                </Paper>
                </List>
            </List> 
      </MuiThemeProvider>
    );
  }
}

export default App;

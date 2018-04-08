import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField'
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
          <Paper style={{marginLeft:170,marginTop:30,height:500,width:500}}> <p style={{color:'blue',paddingTop:20,paddingLeft:20}}><b>Found something in the campus? </b><br/></p>
          <p style={{paddingTop:10,paddingLeft:20}}>Fill the form below and we will try to find whose item it is. </p>
           
             <TextField style={{paddingLeft:20}}
                hintText="What did  you find?"
              />
             <TextField style={{paddingLeft:20,marginTop:20}}
              hintText="Where did you find it?"
              />
              <TextField style={{paddingLeft:20,marginTop:20}}
               hintText="Anything else we should know?" 
                />
                <div>
                <FlatButton  label="Send" style={{backgroundColor:'lightBlue',color:'black',marginTop:50,marginLeft:20}}/> </div>

           <Paper style={{marginLeft:670,marginTop:-385,height:500,width:500}}><p style={{color:'blue',paddingTop:20,paddingLeft:20}}><b>Lost Something? </b><br/></p> 
           <p style={{paddingTop:10,paddingLeft:20,paddingRight:20}}>Just fill out the form and we will deliver it to your doorstep once we find it!</p>
           <TextField style={{paddingLeft:20}}
                hintText="What did  you lost?"
              />
                      <TextField style={{paddingLeft:20,marginTop:20}}
              hintText="Remember where you lost it?"   />  
               <TextField style={{paddingLeft:20,marginTop:20}}
               hintText="Anything else we should know?"
                />
                <div><FlatButton  label="Send" style={{backgroundColor:'lightBlue',color:'black',marginTop:20,marginLeft:'20px'}}/></div>
           </Paper>
            
              </Paper>
              </div>
              <List>
              <Paper style={{marginLeft:170,marginTop:30,height:160,width:1170 }} >
              
                <p style={{color:'red',paddingTop:30,paddingLeft:30}}><b>Facing some issue in the campus but don't know who to report to?
                Type it out here and we assure you to take care of it!</b></p>
                
            <TextField style={{marginLeft:20,marginRight:20}}
      hintText="Feel free to write your issue"
      fullWidth={true} />
                <FlatButton  label="Send" style={{backgroundColor:'lightBlue',color:'black',marginTop:50,marginLeft:'1052px'}}/>
                
          

                
                </Paper>
                </List>
            </List> 

      </MuiThemeProvider>
    );
  }
}

export default App;

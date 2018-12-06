import React, { Component } from 'react';
import './App.css';
import { Grid, Divider } from 'semantic-ui-react';

import Header from './component/Header'
import NaughtyList from './component/NaughtyList.jsx';
import NiceList from './component/NiceList.jsx';
class App extends Component {
  state = {
    email: 'e',
    name: 'n'
  }
  render() {
    return (
      <div className="App">
<h1> SantaBaba</h1>
        <Header /> 
        <Grid>
          <Grid.Row>
          <Grid.Column width={6}>
              <NaughtyList />
          </Grid.Column>
          
          <Grid.Column width={6}>
              <NiceList />
          </Grid.Column>    
          </Grid.Row>
        <Divider vertical>Gauge Here</Divider>
        </Grid>
      </div>
    );
  }
}

export default App;

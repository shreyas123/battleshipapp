import React, { Component } from 'react';
import { Router } from 'react-native-mobx';
import scenes from '~/config/routes';
import initializeController from '~/controllers/InitializeController';

class App extends Component {
  componentDidMount() {
    initializeController.perform();
  }

  render() {
    return (
      <Router scenes={scenes} />
    );
  }
}

export default App;

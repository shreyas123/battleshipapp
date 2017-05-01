import React from 'react';
import { Actions, Scene } from 'react-native-mobx';
import landing from '~/components/Landing/LandingComponent';
import LoginComponent from '~/components/Login/LoginComponent';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="landing" initial component={landing} type={'reset'} />
    <Scene key="loginComponent" component={LoginComponent} store={{}} title="Login" />
  </Scene>,
);

export default scenes;

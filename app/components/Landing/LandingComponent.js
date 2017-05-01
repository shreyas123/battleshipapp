import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Orientation from 'react-native-orientation';
import styles from './Styles';

export default class Landing extends Component {
  componentWillMount() {
    // console.log();
    // Orientation.default.lockToPortrait();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <View style={styles.background}>
        <ActivityIndicator />
      </View>
    );
  }
}

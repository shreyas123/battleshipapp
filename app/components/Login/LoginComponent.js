import React, { Component, PropTypes } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Basic } from '~/components/Buttons/Button';
import autobind from 'autobind-decorator';

export default class LoginComponent extends Component {
  static propTypes = {
    loginClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  @autobind
  loginPress() {
    this.props.loginClick(this.state.text);
  }

  render() {
    return (<View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
      <Basic handlePress={this.loginPress}> LOGIN </Basic>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

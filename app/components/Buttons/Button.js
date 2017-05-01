import React, { PropTypes } from 'react';
import Button from 'react-native-button';

export const Basic = (props = {}) => (
  <Button
    style={{ fontSize: 20, color: 'green' }}
    styleDisabled={{ color: 'red' }}
    onPress={props.handlePress}
  >
    {props.children}
  </Button>
);

Basic.propTypes = {
  handlePress: PropTypes.func.isRequired,
  children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

Basic.defaultProps = {
  children: 'Press Me',
};

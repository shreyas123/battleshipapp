import React from 'react';
import renderer from 'react-test-renderer';
import App from '../index';

describe('App (Snapshot)', () => {
  it('App renders hello world', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

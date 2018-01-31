import React from 'react';
import renderer from 'react-test-renderer';
import StyledHOC from '../StyledHOC';
import { View } from 'react-native';

it('renders a StyledHOC wrapped View with empty styles using Snapshots', () => {
  const WrappedView = StyledHOC(View, {});
  expect(renderer.create(
    <WrappedView />
  )).toMatchSnapshot();
});
  
it('renders a StyledHOC wrapped View with styles using Snapshots', () => {
  const WrappedView = StyledHOC(View, { flex: 1});
  expect(renderer.create(
    <WrappedView />
  )).toMatchSnapshot();
});
  
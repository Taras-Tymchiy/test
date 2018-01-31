import React from 'react';
import renderer from 'react-test-renderer';
import SpinnerHOC from '../SpinnerHOC';
import { View } from 'react-native';

it('renders a SpinnerHOC wrapped View with spinner using Snapshots', () => {
  const WrappedView = SpinnerHOC(View);
  expect(renderer.create(
    <WrappedView spinner={true} />
  )).toMatchSnapshot();
});
  
it('renders a SpinnerHOC wrapped View without spinner using Snapshots', () => {
  const WrappedView = SpinnerHOC(View);
  expect(renderer.create(
    <WrappedView />
  )).toMatchSnapshot();
});

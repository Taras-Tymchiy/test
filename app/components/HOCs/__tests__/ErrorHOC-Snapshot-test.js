import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ErrorHOC from '../ErrorHOC';
import { View } from 'react-native';

const error = new Error('test');

it('renders a ErrorHOC wrapped View with error using Snapshots', () => {
  const WrappedView = ErrorHOC(View);
  expect(renderer.create(
    <WrappedView error={error} />
  )).toMatchSnapshot();
});
  
it('renders a ErrorHOC wrapped View without error using Snapshots', () => {
  const WrappedView = ErrorHOC(View);
  expect(renderer.create(
    <WrappedView />
  )).toMatchSnapshot();
});

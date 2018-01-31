import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SpinnerHOC from '../SpinnerHOC';
import { View, ActivityIndicator } from 'react-native';

it('renders an ActivityIndicator in SpinnerHOC wrapped View using Enzyme', () => {
  const WrappedView = SpinnerHOC(View);
  const wrapper = shallow(
    <WrappedView spinner={true} />
  );
  expect(wrapper.find(ActivityIndicator).length).toEqual(1);
});

it('renders no ActivityIndicator in SpinnerHOC wrapped View using Enzyme', () => {
  const WrappedView = SpinnerHOC(View);
  const wrapper = shallow(
    <WrappedView spinner={false} />
  );
  expect(wrapper.find(ActivityIndicator).length).toEqual(0);
});

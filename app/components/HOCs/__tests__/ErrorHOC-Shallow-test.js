import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ErrorHOC from '../ErrorHOC';
import { View } from 'react-native';

const error = new Error('test');

it('renders an error message in ErrorHOC wrapped View using Enzyme', () => {
  const WrappedView = ErrorHOC(View);
  const wrapper = shallow(
    <WrappedView error={error} />
  );
  expect(wrapper.contains(error.message)).toBe(true);
});

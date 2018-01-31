import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import StyledHOC from '../StyledHOC';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = {
  backgroundColor: '#123',
  width: 123
}

it('renders a StyledHOC wrapped View with proper styles using Enzyme', () => {
  const WrappedView = StyledHOC(View, styles);
  const ownStyle = {
    width: 321
  };
  const wrapper = shallow(
    <WrappedView style={ownStyle} />
  );
  const wrapperStyle = StyleSheet.flatten(wrapper.props().style);
  expect(wrapperStyle.backgroundColor).toEqual(styles.backgroundColor);
  expect(ownStyle.width).toEqual(ownStyle.width);
});

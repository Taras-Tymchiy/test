import React from 'react';
import { View } from 'react-native';
import 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from '../Header';
import SimpleButton from '../../atoms/SimpleButton';

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'android';
  return Platform;
});

const props: HeaderProps = {
    title: 'Test title',
    leftButtonTitle: 'Test left title',
    rightButtonTitle: 'Test right title',
    onLeftButtonPress: jest.fn(),
    onRightButtonPress: jest.fn(),
};

it('triggers callbacks using Enzyme', () => {
  const wrapper = shallow(
    <Header {...props} />
  );
  const buttons = wrapper.find(SimpleButton);
  expect(buttons.length).toEqual(2);
  buttons.first().props().onPress();
  expect(props.onLeftButtonPress.mock.calls.length).toEqual(1);
  buttons.at(1).props().onPress();
  expect(props.onRightButtonPress.mock.calls.length).toEqual(1);
});

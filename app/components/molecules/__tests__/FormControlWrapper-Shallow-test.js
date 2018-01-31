import React from 'react';
import { View, Modal } from 'react-native';
import 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FormControlWrapper from '../FormControlWrapper';
import Header from '../Header';

jest.mock('../../../assets/ios7-arrow-right.png', ()=>({ uri: 'ios7-arrow-right.png'}));
jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'android';
  return Platform;
});

const props: FormControlWrapperProps = {
    title: 'Test title',
    onSave: jest.fn(),
    onDiscard: jest.fn()
};

const MyTestControl = () => <View/>;

it('renders child control inside modal using Enzyme', () => {
  const wrapper = shallow(
    <FormControlWrapper {...props} >
      <MyTestControl/>
    </FormControlWrapper>
  );
  const modal = wrapper.find(Modal);
  expect(modal.length).toEqual(1);
  const myControl = modal.find(MyTestControl);
  expect(myControl.length).toEqual(1);
});

it('triggers callbacks using Enzyme', () => {
  const wrapper = shallow(
    <FormControlWrapper {...props} >
      <MyTestControl/>
    </FormControlWrapper>
  );
  wrapper.instance().openModal();
  // wrapper.setState({modalVisible: true});
  const header = wrapper.find(Header);
  expect(header.length).toEqual(1);
  header.first().props().onLeftButtonPress();
  expect(props.onDiscard.mock.calls.length).toEqual(1);
  header.first().props().onRightButtonPress();
  expect(props.onSave.mock.calls.length).toEqual(1);
});

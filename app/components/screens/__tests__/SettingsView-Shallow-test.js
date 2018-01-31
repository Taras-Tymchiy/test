import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FormControlWrapper from '../../molecules/FormControlWrapper';
import SettingsView from '../settings-screen/SettingsView';
import { posts } from '../../../../jest/testData';

jest.mock('../../../assets/ios7-arrow-right.png', ()=>({ uri: 'ios7-arrow-right.png'}));

const props = {
  pullInterval: 5000,
  postsCount: 10,
  postsUrl: 'test',
  intervalChanged: jest.fn(),
  urlChanged: jest.fn(),
  postsCountChanged: jest.fn()
};

it('calls actions on FormControlWrapper callbacks', () => {
  const wrapper = shallow(
    <SettingsView {...props} />
  );
  const state = {pullInterval: '11', postsCount: '33', postsUrl: 'changed'};
  wrapper.setState(state);
  
  const formWrappers = wrapper.find(FormControlWrapper);
  formWrappers.forEach(w=> w.props().onSave());

  expect(props.intervalChanged.mock.calls.length).toEqual(1);
  expect(props.intervalChanged.mock.calls[0]).toEqual([+state.pullInterval]);

  expect(props.urlChanged.mock.calls.length).toEqual(1);
  expect(props.urlChanged.mock.calls[0]).toEqual([state.postsUrl]);

  expect(props.postsCountChanged.mock.calls.length).toEqual(1);
  expect(props.postsCountChanged.mock.calls[0]).toEqual([+state.postsCount]);
});

